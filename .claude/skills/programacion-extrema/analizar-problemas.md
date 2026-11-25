# Analizar un problema al estilo XP

El libro de Beck trae, repartidas en sus capítulos, herramientas para **diagnosticar** antes de actuar. Aquí están ordenadas como un método. Sirve igual para un bug, un proyecto que se atasca, un equipo que no rinde o un cliente insatisfecho.

## 1. Mirar antes de tocar: ¿qué está pasando de verdad?
- **Contrastar sentimientos con hechos.** La intuición avisa (miedo, enfado o ansiedad son señales), pero hay que cruzarla con datos u opiniones de confianza (cap. 8).
- **Buscar tendencias en las métricas**, no fotos sueltas. Ejemplo del libro: al revisar todos los defectos, un equipo descubrió que todos venían de gente programando sola (cap. 8).
- **Señales de un proyecto en apuros** (Chrysler, cap. 17): la fecha que siempre está "a dos meses"; gente que mira quién escucha antes de hablar; cansancio e irritabilidad; nadie se cree las estimaciones.
- **El silencio es el sonido del riesgo acumulándose** (cap. 10).
- **Valores reales frente a valores declarados**: fíjate en lo que la gente hace, no en lo que dice valorar (caps. 3 y 20).

## 2. ¿A qué nivel está el problema? Valores, principios o prácticas
Es la herramienta más potente del libro (cap. 3):
- **Práctica** (técnica): no saben hacerlo. Se arregla enseñando o practicando.
- **Principio**: saben hacerlo pero no entienden para qué sirve, así que lo aplican mal o como un ritual.
- **Valor**: saben hacerlo y no quieren. Ejemplo del libro: el programador que no quiere estimar no tiene un problema técnico; valora más protegerse que comunicar, quizá porque le culparon injustamente antes. Ejemplo del bug "sin importancia": el defecto es de técnica; no querer aprender de él es de valores.
→ Una solución técnica a un problema de valores no funciona. Tampoco al revés.

## 3. ¿Es falta de comunicación o falta de conocimiento? (cap. 4)
- **Comunicación**: casi siempre **alguien ya sabe la solución**, pero no llega a quien tiene poder para actuar. Tarea: encontrar a quien sabe y llevar ese conocimiento a quien decide (así entró Beck en Chrysler: "si pudiéramos borrar los discos duros, haríamos este proyecto").
- **Conocimiento**: nadie podía saberlo ("Ctrl-Mayús-S ya está asignado en Windows polaco"). No hay culpa; sí hay que preguntar qué comunicación evitará que se repita.
- Preguntas: ¿lo causó la falta de comunicación? ¿Qué hay que comunicar ahora? ¿Qué comunicación nos habría evitado esto?

## 4. Siempre es (también) un problema de personas
"No importa lo que diga el cliente que es el problema: siempre es un problema de personas" (cap. 7, el equipo de Chicago repartido en despachos de esquina). Los arreglos solo técnicos no bastan.
- **Los 5 porqués** (Ohno, cap. 9): preguntar "¿por qué?" cinco veces hasta llegar a la causa humana (el saldo negativo nocturno → solo lo sabía la Sra. Crosby → … → nadie sabía que 20.000 $ ahorraban 500.000 $).
- **¿Están alineadas responsabilidad y autoridad?** Si alguien decide sin vivir las consecuencias, o responde de algo que no puede decidir, ahí hay un problema (cap. 5).
- **Ecos de Taylor** (cap. 18): planificación separada de la ejecución, estimaciones cambiadas por otro, calidad como "departamento de otro", personas tratadas como piezas intercambiables.
- **¿Se cubren las necesidades humanas?** Seguridad, logro, pertenencia, crecimiento, intimidad (cap. 5). La gente agotada o con miedo no rinde, la culpa no es de la técnica.

## 5. ¿Dónde está el cuello de botella? (teoría de las restricciones, cap. 11)
- **El trabajo se acumula delante de la restricción** (la ropa mojada espera a la secadora, no la seca al que dobla).
- Dibujar el proceso como una cadena de actividades y buscar dónde se amontona.
- Pasos: encontrarla → que trabaje a tope → aumentar su capacidad, descargarla o eliminarla. Al quitarla aparece otra.
- **Mejorar fuera del cuello de botella no sirve** y hasta empeora (otra lavadora = más ropa mojada). La micro-optimización no es suficiente: mirar el todo antes de cambiar.
- **¿Es un problema del desarrollo o de fuera?** (los aviones que solo se actualizaban en revisión): si está fuera, la solución también.
- Cuidado: un equipo que mejora mueve el cuello de botella a otro departamento, que no querrá el foco.

## 6. Dimensionar: ¿de qué tamaño es realmente? (cap. 15)
- Dimensiones: personas, inversión, tamaño de la organización, tiempo, complejidad del problema, complejidad de la solución, consecuencia del fallo. ¿Cuál es la que de verdad pesa?
- **Complejidad del problema vs. de la solución**: muchas veces el sistema es más complicado que lo que resuelve. Entonces lo primero es **dejar de cavar**.
- **Consecuencia del fallo** cambia los valores prioritarios ("si nos equivocamos, mueren bebés"): ahí la seguridad manda.

## 7. Descomponer y elegir la solución (caps. 15, 12, 14)
1. **Partir el problema en problemas más pequeños.**
2. **Soluciones simples primero.**
3. **Soluciones complejas solo para lo que quede.**
- "¿Lo resolvería un equipo/solución pequeña?" Si no, conquista una parte pequeña y luego divide por las líneas de fractura naturales.
- **Poner precio a cada opción** antes de elegir (Ferrari a 150.000 vs. monovolumen a 25.000): sin coste y sin restricciones no se decide bien.
- **Extender las piezas sobre la mesa** y ordenarlas de varias formas (riesgo, valor, tipo). Si te pierdes, barajar y volver a extender.
- **¿Basta con pensar o hace falta experiencia?** (gráficos del cap. 14). Si solo la experiencia dará la respuesta, diseña lo justo para empezar y aprende.
- **Autosimilitud**: ¿hay una estructura que ya funcionó en otra escala o contexto? Es buen punto de partida, no garantía.
- **Redundancia** para lo crítico: atacar el problema por varias vías a la vez.

## 8. Comprobar cada solución contra los principios
- **Beneficio mutuo**: ¿beneficia a todos (ahora, después y al cliente)? Si gana uno y pierde otro, es una pérdida neta.
- **Economía**: ¿aporta valor pronto? ¿Mantiene opciones abiertas sin pagar flexibilidad especulativa?
- **Simplicidad**: ¿es comprensible para quien la va a usar o mantener?
- **Pasos de bebé**: ¿cuál es el primer paso pequeño que va reconociblemente en la buena dirección?
- **Mentalidad de suficiencia**: "¿Cómo lo harías si tuvieras tiempo suficiente?" Libera de soluciones desesperadas.

## 9. Convertir la duda en experimento
- **Feedback rápido**: "¿Será un problema el rendimiento?" → "No lo sé, hagamos un prototipo y veamos."
- **Fallar barato**: si no sabes cuál de tres caminos es mejor, prueba los tres; el temporizador de 15 minutos para dejar de debatir.
- **Valentía o paciencia**: si sabes cuál es el problema, actúa; si no lo sabes, ten la paciencia de esperar a que se manifieste con claridad.
- **Las prácticas son hipótesis**: "probemos desplegar más a menudo y veamos si ayuda".

## 10. Convertir el problema en oportunidad y cerrar el ciclo
- **Problema → práctica**: ¿no podemos planificar a largo plazo? Ciclo trimestral. ¿Una persona sola se equivoca mucho? Parejas (cap. 5).
- **Reflexionar después de actuar**: ¿por qué funcionó o falló? Aprender es acción reflexionada.
- **Ejercicio de mapear** (cap. 8): en el centro la práctica o el problema; debajo su propósito; alrededor los factores que influyen y los síntomas de que va mal. No hay respuestas correctas: el valor está en la conversación.
- **Pasar a la acción**: las buenas ideas no sirven si se gastan en quejarse ("llorar en la cerveza"). Si tiene sentido, hazlo, aunque sea solo.
- **El cambio empieza por uno mismo**: lo único que controlas es tu comportamiento.
- **Si una mejora empeora las cosas**, puede que falte un prerrequisito oculto: retrocede, arréglalo y vuelve a intentarlo.

## Resumen en una tarjeta
1. ¿Qué pasa de verdad? (hechos, no solo sensaciones)
2. ¿Es de valores, principios o prácticas?
3. ¿Falta comunicación o falta conocimiento? ¿Quién lo sabe ya?
4. ¿Cuál es el problema de personas detrás? (5 porqués)
5. ¿Dónde se acumula el trabajo?
6. ¿Qué dimensión pesa de verdad?
7. Partir, lo simple primero, poner precio.
8. ¿Beneficia a todos? ¿Cuál es el primer paso pequeño?
9. Si dudo, experimento barato.
10. Actuar, reflexionar, repetir.
