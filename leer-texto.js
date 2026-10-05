// Pizarra de tiza: convierte texto normal (el que copias de Google Lens o Microsoft Lens)
// en el JSON de la pizarra, con reglas sencillas y sin ninguna IA. Todo ocurre en tu navegador.
//
// Reglas:
// - La primera línea es el título.
// - Una línea como "Ideas", "Tareas:", "Pendiente", "Dudas"… abre esa sección; cualquier otra línea
//   corta que termina en ":" abre una sección de notas con ese nombre.
// - Una casilla ([ ], [x]) o un ✓ mandan siempre: van a tareas o decisiones aunque haya otra sección abierta.
// - Fuera de una sección: con "?" es una duda; con [ ], [x] o una fecha es una tarea; con ✓ o
//   "hecho:" es una decisión; lo demás, una idea.
// - Colores: "urgente" o "!" = rosa; "importante" o viñeta "*" = amarilla; dudas = naranja;
//   decisiones = verde; lo demás, blanca.
// - Fechas: 10/10, 3-11-2027, 3.11.27 o 2026-12-01. Sin año: este año, o el siguiente si ya pasó
//   hace más de dos meses.
(function (raiz) {
  "use strict";

  const NOMBRES = { ideas: "Ideas", tareas: "Tareas", decisiones: "Decisiones", notas: "Notas", preguntas: "Dudas" };
  const ENCABEZADOS = [
    [/^(lluvia de )?ideas?$/, "ideas"],
    [/^(tareas?|pendientes?|to ?do|por hacer|acciones)$/, "tareas"],
    [/^(decisiones|decidido|acuerdos?)$/, "decisiones"],
    [/^(notas?|apuntes)$/, "notas"],
    [/^(dudas?|preguntas?)$/, "preguntas"],
  ];

  const sinAcentos = t => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const dos = n => String(n).padStart(2, "0");

  function encabezado(linea) {
    const limpio = sinAcentos(linea.replace(/^#+\s*/, "")).replace(/[:\s]+$/, "").trim();
    for (const [patron, tipo] of ENCABEZADOS) if (patron.test(limpio)) return { tipo, nombre: NOMBRES[tipo] };
    if (/^[^:]{1,30}:$/.test(linea.trim())) return { tipo: "notas", nombre: linea.trim().slice(0, -1).trim() };
    return null;
  }

  function fechaValida(a, m, d) {
    const f = new Date(Date.UTC(a, m - 1, d));
    return f.getUTCFullYear() === a && f.getUTCMonth() === m - 1 && f.getUTCDate() === d;
  }

  // Devuelve { dia: "AAAA-MM-DD", resto: texto sin la fecha } o null.
  function buscarFecha(texto, hoy) {
    const iso = texto.match(/\b(\d{4})-(\d{1,2})-(\d{1,2})\b/);
    if (iso && fechaValida(+iso[1], +iso[2], +iso[3])) {
      return { dia: `${iso[1]}-${dos(iso[2])}-${dos(iso[3])}`, resto: texto.replace(iso[0], "") };
    }
    const dm = texto.match(/\b(\d{1,2})[/.-](\d{1,2})(?:[/.-](\d{2}|\d{4}))?\b/);
    if (!dm) return null;
    const d = +dm[1], m = +dm[2];
    let a = dm[3] ? +dm[3] : hoy.getFullYear();
    if (dm[3] && dm[3].length === 2) a += 2000;
    if (!fechaValida(a, m, d)) return null;
    if (!dm[3]) {
      const haceDosMeses = new Date(hoy.getFullYear(), hoy.getMonth() - 2, hoy.getDate());
      if (new Date(a, m - 1, d) < haceDosMeses) a += 1;
    }
    return { dia: `${a}-${dos(m)}-${dos(d)}`, resto: texto.replace(dm[0], "") };
  }

  function leerLinea(linea, hoy) {
    let t = linea.trim();
    const item = { texto: "", color: "blanca", tipo: null, marcado: false };
    let importante = false, urgente = false;

    const vineta = t.match(/^(\d+[.)]|[-*•·–—>])\s+/);
    if (vineta) { importante = vineta[1] === "*"; t = t.slice(vineta[0].length); }

    const casilla = t.match(/^(\[( |x|X)\]|☐|☑)\s*/);
    if (casilla) {
      item.tipo = "tareas";
      item.marcado = true;
      item.hecha = casilla[2] ? casilla[2] !== " " : casilla[1] === "☑";
      t = t.slice(casilla[0].length);
    }
    const decision = t.match(/^([✓✔✅]|(hecho|decidido|ok)\s*:)\s*/i);
    if (decision && !casilla) { item.tipo = "decisiones"; item.marcado = true; t = t.slice(decision[0].length); }

    const marca = t.match(/^(urgente|importante)\s*:\s*/i);
    if (marca) { (sinAcentos(marca[1]) === "urgente" ? (urgente = true) : (importante = true)); t = t.slice(marca[0].length); }
    if (/!\s*$/.test(t)) { urgente = true; t = t.replace(/!+\s*$/, ""); }

    const fecha = buscarFecha(t, hoy);
    if (fecha) {
      item.dia = fecha.dia;
      t = fecha.resto;
      if (!item.tipo) item.tipo = "tareas";
    }
    if (!item.tipo && t.includes("?")) item.tipo = "preguntas";

    item.texto = t.replace(/\s+/g, " ").replace(/^[\s,;:()-]+|[\s,;:(-]+$/g, "").trim();
    const pregunta = item.texto.includes("?");
    item.color = urgente ? "rosa" : importante ? "amarilla"
      : pregunta ? "naranja" : item.tipo === "decisiones" ? "verde" : "blanca";
    return item;
  }

  function leerTexto(texto, hoy = new Date()) {
    const lineas = String(texto).split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (!lineas.length) throw new Error("El texto está vacío: copia primero el texto de la foto.");

    const titulo = lineas[0].replace(/^#+\s*/, "").replace(/:$/, "").trim();
    const secciones = [];
    const seccion = (tipo, nombre) => {
      let s = secciones.find(x => x.tipo === tipo && x.nombre === nombre);
      if (!s) { s = { tipo, nombre, items: [] }; secciones.push(s); }
      return s;
    };

    let actual = null; // sección abierta por un encabezado
    for (const linea of lineas.slice(1)) {
      const cabecera = encabezado(linea);
      if (cabecera) { actual = seccion(cabecera.tipo, cabecera.nombre); continue; }
      const item = leerLinea(linea, hoy);
      if (!item.texto) continue;
      // Una marca clara (casilla o ✓) manda sobre la sección abierta; "?" y las fechas, no.
      const manda = item.marcado && (!actual || actual.tipo !== item.tipo);
      const destino = actual && !manda ? actual : seccion(item.tipo || "ideas", NOMBRES[item.tipo || "ideas"]);
      const limpio = { texto: item.texto, color: item.color };
      if (destino.tipo === "tareas") { limpio.dia = item.dia || ""; limpio.hecha = !!item.hecha; }
      destino.items.push(limpio);
    }

    const ahora = `${hoy.getFullYear()}-${dos(hoy.getMonth() + 1)}-${dos(hoy.getDate())}`;
    return { titulo, fecha: ahora, secciones: secciones.filter(s => s.items.length) };
  }

  raiz.PizarraTexto = { leerTexto };
  if (typeof module !== "undefined") module.exports = { leerTexto };
})(typeof window !== "undefined" ? window : globalThis);
