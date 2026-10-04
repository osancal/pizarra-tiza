# Pizarra de tiza

Haz una foto a tu pizarra y tenla en digital con aspecto de tiza: texto editable en tizas de colores, dibujos encima y exportación a fichas de ideas, agenda y notas. Funciona en el navegador, sin instalar nada.

## Descárgala y empieza
1. Pulsa el botón verde **Code** de esta página y elige **Download ZIP**.
2. Descomprime el archivo.
3. Haz doble clic en **`v2.html`**. Se abre en tu navegador y ya está.


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
2. Pásasela a Claude con este encargo: *"Lee esta pizarra y devuélveme el JSON para Pizarra de tiza"* (formato abajo).
3. Abre `v2.html` (o `index.html`), pulsa **Pegar datos** y pega el JSON. Con **Foto original** puedes verla al lado para comparar.
4. Retoca lo que quieras: haz clic en el texto para editarlo y pasa el ratón por un renglón para cambiar su tiza o borrarlo.
5. Exporta: **Fichas de ideas (.md)** para el banco de ideas, **Agenda (.ics)** para Google Calendar u Outlook (tareas pendientes con fecha) y **Notas (.md)** para las notas del proyecto. **Guardar .json** guarda la pizarra para abrirla otro día.

## Colores de tiza
blanca = normal · amarilla = importante · rosa = urgente · azul = técnico · verde = hecho o decidido · naranja = pregunta o duda.

## Formato (JSON)
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
- Leer la foto directamente en el navegador, sin pasarla por un asistente.

## Licencia
MIT: úsala, cópiala y modifícala libremente. Ver `LICENSE`.
