# Pizarra de tiza

Haz una foto a tu pizarra y tenla en digital con aspecto de tiza: texto editable en tizas de colores, dibujos encima y exportación a fichas de ideas, agenda y notas. Funciona en el navegador, sin instalar nada.

## Descárgala y empieza
1. Pulsa el botón verde **Code** de esta página y elige **Download ZIP**.
2. Descomprime el archivo.
3. Haz doble clic en **`v2.html`**. Se abre en tu navegador y ya está. (Deja `leer-texto.js` en la misma carpeta: es el que ordena el texto.)


> **Dos versiones:**
> - **`v2.html` (recomendada), sobre Excalidraw:** pizarra verde con letra manuscrita, **puedes dibujar encima** (flechas, cajas, rodear, tachar), bandeja de **tizas de colores** (elige el color de lo que dibujas y recolorea lo seleccionado), diagramas editables, guarda en **`.excalidraw`** (se abre también en excalidraw.com y en Obsidian con su plugin) y exporta a **PNG**. Necesita internet la primera vez para cargar Excalidraw.
> - **`index.html` (v1):** versión sencilla, sin dibujos.
>
> El JSON de la v2 acepta además un apartado **`dibujos`** con elementos de Excalidraw (cajas, elipses y flechas con etiqueta) para los diagramas de la pizarra:
> ```json
> "dibujos": [
>   { "type": "rectangle", "x": 60,  "y": 560, "width": 200, "height": 70, "label": { "text": "Normativa" } },
>   { "type": "rectangle", "x": 400, "y": 560, "width": 200, "height": 70, "label": { "text": "Laboratorio" }, "strokeColor": "#9fd3f5" },
>   { "type": "arrow", "x": 262, "y": 595, "width": 136, "height": 0, "strokeColor": "#f7e27a" }
> ]
> ```
> Colores de tiza en hexadecimal: blanca `#f4f1e8`, amarilla `#f7e27a`, rosa `#f6a5c0`, azul `#9fd3f5`, verde `#b6e59e`, naranja `#f7b267`.

Haces una foto a tu pizarra y la tienes **en digital con aspecto de tiza**: texto de verdad (editable y buscable) en tizas de colores, más exportación a fichas de ideas, agenda y notas. Funciona en el navegador, sin instalar nada. La foto no se sube a ningún sitio.

## Cómo se usa
1. Haz la foto de la pizarra (mejor con el modo "Pizarra" de Microsoft Lens).
2. **Copia el texto de la foto** con el móvil: en **Google Lens** (o la cámara de Android), toca *Texto* → *Seleccionar todo* → *Copiar*; en **Microsoft Lens**, elige *Texto* al guardar y copia lo que lee. Los dos leen bien la letra a mano.
3. Abre `v2.html` (o `index.html`), pulsa **Pegar texto o datos** y pega. La pizarra **ordena el texto sola** (reglas abajo). Con **Foto original** puedes ver la foto al lado para comparar.
4. Retoca lo que quieras: haz clic en el texto para editarlo y pasa el ratón por un renglón para cambiar su tiza o borrarlo.
5. Exporta: **Fichas de ideas (.md)** para el banco de ideas, **Agenda (.ics)** para Google Calendar u Outlook (tareas pendientes con fecha) y **Notas (.md)** para las notas del proyecto. **Guardar .json** guarda la pizarra para abrirla otro día.

Todo pasa en tu navegador: ni la foto ni el texto se suben a ningún sitio, y no hace falta ninguna IA.

## Cómo ordena el texto
- La **primera línea** es el título.
- Una línea como **Ideas**, **Tareas**, **Pendiente**, **Decisiones**, **Notas** o **Dudas** (con o sin `:`) abre esa sección. Cualquier otra línea corta acabada en `:` abre una sección de notas con ese nombre.
- Sin sección abierta: con `?` es una **duda**; con una **fecha** o casilla `[ ]` / `[x]` es una **tarea**; con `✓` o `hecho:` es una **decisión**; lo demás es una **idea**.
- Una casilla o un `✓` mandan siempre, aunque estén debajo de otra sección.
- Tizas: `urgente:` o `!` al final = **rosa**; `importante:` o viñeta `*` = **amarilla**; dudas = **naranja**; decisiones = **verde**.
- Fechas: `10/10`, `3-11-2027`, `3.11.27` o `2026-12-01`. Sin año, se entiende este año (o el siguiente si ya pasó hace más de dos meses).

Ejemplo que puedes pegar tal cual:
```
Reunión del lunes
Ideas:
- Banco de ideas compartido
* App de recetas
Tareas:
[ ] Enviar presupuesto 10/10
Llamar a Ana urgente!
¿Quién paga el local?
✓ Lo hacemos en Python
```

## Colores de tiza
blanca = normal · amarilla = importante · rosa = urgente · azul = técnico · verde = hecho o decidido · naranja = pregunta o duda.

## Formato (JSON), para usos avanzados
También puedes pegar directamente este JSON, por ejemplo si se lo pides a un asistente de IA o lo genera otro programa.

```json
{
  "titulo": "Nombre de la pizarra",
  "fecha": "2026-10-04",
  "secciones": [
    { "tipo": "ideas",      "nombre": "Ideas",      "items": [ { "texto": "…", "color": "amarilla" } ] },
    { "tipo": "tareas",     "nombre": "Tareas",     "items": [ { "texto": "…", "color": "rosa", "dia": "2026-10-10", "hecha": false } ] },
    { "tipo": "decisiones", "nombre": "Decisiones", "items": [ { "texto": "…", "color": "verde" } ] },
    { "tipo": "notas",      "nombre": "Notas",      "items": [ { "texto": "…", "color": "blanca" } ] },
    { "tipo": "preguntas",  "nombre": "Dudas",      "items": [ { "texto": "…", "color": "naranja" } ] }
  ]
}
```
Tipos válidos: `ideas`, `tareas`, `decisiones`, `notas`, `preguntas`. Colores: `blanca`, `amarilla`, `rosa`, `azul`, `verde`, `naranja`. Fechas en formato AAAA-MM-DD.

## Ideas para siguientes versiones
- Botón **Leer foto**: leer la foto directamente en el navegador (Tesseract.js), sin copiar el texto a mano. Funciona bien con letra clara; con letra a mano rápida, Lens lee mejor.

## Licencia
MIT: úsala, cópiala y modifícala libremente. Ver `LICENSE`.
