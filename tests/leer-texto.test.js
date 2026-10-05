// Pruebas del lector de texto: node --test tests/
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { leerTexto } = require("../leer-texto.js");

const HOY = new Date("2026-10-05T10:00:00");
const seccion = (d, tipo) => d.secciones.find(s => s.tipo === tipo);
const textos = (d, tipo) => (seccion(d, tipo)?.items || []).map(i => i.texto);

test("la primera línea es el título y la fecha es la de hoy", () => {
  const d = leerTexto("Reunión de producto\nidea suelta", HOY);
  assert.equal(d.titulo, "Reunión de producto");
  assert.equal(d.fecha, "2026-10-05");
});

test("encabezados con dos puntos o nombres conocidos cambian de sección", () => {
  const d = leerTexto("Pizarra\nIDEAS:\n- app de recetas\nPendiente\n- llamar a Ana\nDudas\n- presupuesto", HOY);
  assert.deepEqual(textos(d, "ideas"), ["app de recetas"]);
  assert.deepEqual(textos(d, "tareas"), ["llamar a Ana"]);
  assert.deepEqual(textos(d, "preguntas"), ["presupuesto"]);
});

test("sin encabezado: interrogación es duda, fecha es tarea, check es decisión, lo demás idea", () => {
  const d = leerTexto("Lluvia\n¿Cuánto cuesta?\nEnviar informe 10/10\n✓ Usamos Python\nBanco de ideas", HOY);
  assert.deepEqual(textos(d, "preguntas"), ["¿Cuánto cuesta?"]);
  assert.deepEqual(textos(d, "tareas"), ["Enviar informe"]);
  assert.equal(seccion(d, "tareas").items[0].dia, "2026-10-10");
  assert.deepEqual(textos(d, "decisiones"), ["Usamos Python"]);
  assert.deepEqual(textos(d, "ideas"), ["Banco de ideas"]);
});

test("formatos de fecha: dd/mm, dd-mm-aaaa, d.m.aa e ISO", () => {
  const d = leerTexto("T\nTareas:\na 3/11\nb 03-11-2027\nc 3.11.27\nd 2026-12-01", HOY);
  assert.deepEqual(seccion(d, "tareas").items.map(i => i.dia), ["2026-11-03", "2027-11-03", "2027-11-03", "2026-12-01"]);
});

test("fecha sin año ya pasada hace meses va al año siguiente", () => {
  const d = leerTexto("T\nRenovar seguro 15/01", HOY);
  assert.equal(seccion(d, "tareas").items[0].dia, "2027-01-15");
});

test("casillas: [x] es tarea hecha y [ ] pendiente", () => {
  const d = leerTexto("T\n[x] comprar tiza\n[ ] borrar pizarra\n☐ otra", HOY);
  assert.deepEqual(seccion(d, "tareas").items.map(i => [i.texto, i.hecha]),
    [["comprar tiza", true], ["borrar pizarra", false], ["otra", false]]);
});

test("colores: urgente o ! es rosa, importante o * es amarilla, duda naranja, decisión verde", () => {
  const d = leerTexto("T\nIdeas:\nllamar ya!\n* clave\nimportante: precio\nnormal\n¿y esto?\nhecho: logo", HOY);
  const color = t => d.secciones.flatMap(s => s.items).find(i => i.texto.startsWith(t)).color;
  assert.equal(color("llamar ya"), "rosa");
  assert.equal(color("clave"), "amarilla");
  assert.equal(color("precio"), "amarilla");
  assert.equal(color("normal"), "blanca");
  assert.equal(color("¿y esto?"), "naranja");
  assert.equal(color("logo"), "verde");
});

test("quita viñetas y numeración y salta líneas vacías", () => {
  const d = leerTexto("T\n\n1. uno\n2) dos\n• tres\n·  cuatro\n\n", HOY);
  assert.deepEqual(textos(d, "ideas"), ["uno", "dos", "tres", "cuatro"]);
});

test("texto vacío da un error claro", () => {
  assert.throws(() => leerTexto("   \n  ", HOY), /vacío/);
});

test("solo salen las secciones con algo y el resultado es el JSON de la pizarra", () => {
  const d = leerTexto("T\nuna idea", HOY);
  assert.deepEqual(d.secciones.map(s => s.tipo), ["ideas"]);
  assert.deepEqual(Object.keys(d).sort(), ["fecha", "secciones", "titulo"]);
});

test("una marca clara (✓ o casilla) manda sobre la sección abierta", () => {
  const d = leerTexto("T\nDudas\n¿quién paga?\n✓ Lo hacemos en Python\n[ ] mandar acta", HOY);
  assert.deepEqual(textos(d, "preguntas"), ["¿quién paga?"]);
  assert.deepEqual(textos(d, "decisiones"), ["Lo hacemos en Python"]);
  assert.deepEqual(textos(d, "tareas"), ["mandar acta"]);
});
