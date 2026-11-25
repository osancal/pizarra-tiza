# Cómo trabajamos en este proyecto

Programamos al estilo **Programación Extrema (XP)**. Antes de escribir o cambiar código, carga la skill `programacion-extrema` (`.claude/skills/programacion-extrema/`): ahí están las reglas operativas y, en `referencia.md`, el libro de Kent Beck destilado capítulo a capítulo.

## Lo esencial, siempre
- **Primero un test que falle**, luego el código mínimo que lo haga pasar, luego refactorizar. Un solo test roto a la vez.
- **Pasos de bebé**: el cambio más pequeño que vaya reconociblemente en la buena dirección. Tests en verde en cada commit.
- **Lo más simple que podría funcionar**, sin duplicación (una vez y solo una vez) y sin código "por si acaso".
- **Bug** → test que lo reproduce → arreglo → explicar por qué ocurrió y qué evita que se repita.
- **La calidad no se negocia; el alcance sí.** Si algo no cabe o va más lento, se dice claro y el usuario elige qué va primero.
- **De extremo a extremo**: comprobar el resultado final (lo que ve el usuario en la pizarra y en los archivos exportados), no solo los cálculos intermedios.
- Valores: comunicación, simplicidad, retroalimentación, valentía y respeto.

## Este proyecto
- Web estática sin build: `v2.html` (recomendada, sobre Excalidraw), `index.html` (v1) y `leer-texto.js` (lógica que ordena el texto pegado; es la parte con tests).
- **Tests**: `node --test tests/` (tardan menos de un segundo; ejecútalos tras cada cambio).
- La lógica nueva va en módulos testeables con Node (como `leer-texto.js`), no metida dentro del HTML.
- Para cambios visuales en los HTML, compruébalos en el navegador (Playwright/Chromium) y no solo leyendo el código.
- El usuario escribe en español; el código, los mensajes y los commits también van en español.
