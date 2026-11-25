# Referencia completa: "Extreme Programming Explained: Embrace Change" (2ª ed., Kent Beck con Cynthia Andres, 2004)

Destilado capítulo a capítulo. Paráfrasis propia; las citas breves van entre comillas.

---

## Sección 1. Explorando XP

### Cap. 1. ¿Qué es XP?
- XP trata de **cambio social**: dejar hábitos que antes nos protegían y ahora estorban. Buenas relaciones → buen negocio. Hace falta **técnica + relaciones**.
- Se compone de: una filosofía (valores), un cuerpo de prácticas, unos principios que traducen valores en prácticas, y una comunidad.
- Se distingue por: ciclos cortos con feedback temprano y continuo; planificación incremental; programación flexible de funcionalidades; tests automáticos de programadores, clientes y testers; comunicación oral + tests + código fuente; diseño evolutivo que dura lo que dura el sistema; colaboración de gente de talento normal; prácticas que sirven tanto al instinto a corto plazo como al interés a largo plazo.
- Es ligera (solo lo que crea valor), aborda restricciones del desarrollo (no marketing, ventas, finanzas), vale para equipos de cualquier tamaño (las prácticas se adaptan) y para requisitos vagos o cambiantes (y también estables).
- **La vulnerabilidad es seguridad**: guardarse el último 20% no protege. Si doy lo mejor y no gusta, puedo sentirme bien igualmente.
- **Mentalidad de suficiencia**: "¿Cómo lo harías si tuvieras tiempo suficiente?" Quejarse de las restricciones distrae del objetivo.
- Lo único que controlo es mi comportamiento; no es mi trabajo gestionar las expectativas ajenas, sino hacerlo lo mejor posible y comunicar con claridad.
- **Riesgos y cómo los aborda XP**:
  - Retrasos → releases cortas, iteraciones semanales, tareas cortas, lo más prioritario primero.
  - Cancelación → la release más pequeña con más sentido de negocio.
  - El sistema se degrada → suite de tests automáticos ejecutada muchas veces al día; siempre desplegable.
  - Tasa de defectos → tests de programador (función a función) y de cliente (funcionalidad a funcionalidad).
  - Negocio mal entendido → gente de negocio en el equipo; especificación refinada continuamente.
  - El negocio cambia → ciclos cortos; se pueden sustituir funcionalidades no empezadas.
  - Falsa riqueza de funcionalidades → solo lo más prioritario.
  - Rotación de personal → cada uno estima su trabajo, recibe feedback, se respetan sus estimaciones; contacto humano; incorporación gradual.
- Definición final: abandonar hábitos ineficaces; apreciarte por el esfuerzo total de hoy; esforzarte por mejorar mañana; evaluarte por tu contribución a los objetivos del equipo; satisfacer necesidades humanas a través del trabajo.

### Cap. 2. Aprender a conducir
Conducir es atención y pequeñas correcciones constantes. Todo cambia (requisitos, diseño, negocio, tecnología, equipo); el problema no es el cambio sino nuestra incapacidad para afrontarlo. Los clientes conducen el contenido; el equipo conduce el proceso. Cada práctica es un experimento.

### Cap. 3. Valores, principios y prácticas
- Metáfora del jardinero experto: las **prácticas** son lo que haces (claras, objetivas: o escribes el test antes o no). Los **valores** son el sentido profundo de lo que está bien (universales). Los **principios** son guías específicas del dominio que los unen (p. ej. "plantación complementaria" es el principio; "caléndulas junto a las fresas" es la práctica).
- Sin valores, las prácticas se vuelven rutina vacía. Las prácticas son la evidencia de los valores ("valoro la comunicación" no justifica un documento de mil páginas si 15 minutos de charla diaria comunican más). Los valores dan propósito a las prácticas; las prácticas dan rendición de cuentas a los valores.
- Leer no basta: se aprende practicando, uniéndose a la comunidad y enseñando.

### Cap. 4. Valores
Lo que importa no es el comportamiento individual sino cómo se comportan las personas como equipo. Ej.: más que el "mejor" estilo de código, importa que el equipo tenga un estilo común.
- **Comunicación** — la mayoría de problemas los resolvería alguien que ya sabe la respuesta. Ante un problema: ¿falta de comunicación? ¿qué comunicación lo evita en el futuro?
- **Simplicidad** — el más intelectual. "Lo más simple que podría funcionar." Depende del contexto (generador de parsers vs. descenso recursivo según lo que sepa el equipo). Comunicación y simplicidad se refuerzan.
- **Retroalimentación** — ninguna dirección fija sigue siendo válida mucho tiempo. "¿No sería más fácil hacerlo bien a la primera?" Sí, salvo que: no sabemos cuál es "bien"; lo correcto hoy puede ser erróneo mañana; hacerlo todo "bien" puede tardar tanto que llega tarde. Puede haber demasiado feedback: si no se puede atender, frenar y arreglar la causa.
- **Valentía** — acción eficaz ante el miedo: a veces acción, a veces paciencia. Sola es peligrosa; con los demás valores es poderosa.
- **Respeto** — si a los miembros no les importan los demás o el proyecto, nada lo salva.
- Otros valores posibles: seguridad, protección, previsibilidad, calidad de vida. Lo esencial es alinear comportamiento del equipo y valores.

### Cap. 5. Principios
La conversación es preferible a lo escrito (permite aclarar, feedback inmediato, lluvia de ideas). Otros dominios añaden principios (p. ej. trazabilidad en sistemas críticos).
1. **Humanidad** — las personas necesitan seguridad básica, logro, pertenencia, crecimiento e intimidad. Limitar horas deja espacio a otras necesidades. Separar lo privado, lo personal y lo público.
2. **Economía** — valor de negocio; el dinero hoy vale más que mañana (ganar antes, gastar después: diseño incremental difiere inversión); **valor de opción** del software y del equipo, sin invertir en flexibilidad especulativa.
3. **Beneficio mutuo** — el más importante y el más difícil. Las soluciones que benefician a uno a costa de otro son pérdida neta. Documentación interna extensa lo viola; tests automáticos, refactorización y metáforas coherentes lo cumplen (benefician ahora y después).
4. **Autosimilitud** — copiar estructuras que funcionan a otras escalas: el ritmo "test que falla → hacerlo funcionar" vale para trimestres (temas → historias), semanas (historias → tests de sistema → implementación) y horas (lista de tests → uno a uno).
5. **Mejora** — "perfecto" es verbo. Hacerlo lo mejor posible hoy y mejorar mañana; no esperar la perfección para empezar.
6. **Diversidad** — equipos de gente igual son cómodos pero poco eficaces. El conflicto "hay dos formas de hacerlo" es oportunidad.
7. **Reflexión** — pensar en cómo y por qué trabajamos; escuchar también a las emociones. Reflexión después de la acción: aprender es acción reflexionada.
8. **Flujo** — entregar un flujo constante de valor haciendo todas las actividades a la vez. Bajo estrés, los equipos tienden a lotes más grandes (menos integración, menos despliegue) y eso empeora todo. Si te alejas del flujo, propónte volver.
9. **Oportunidad** — problemas como oportunidades. ¿No puedes planificar a largo plazo? Ciclo trimestral. ¿Una persona sola comete muchos errores? Parejas.
10. **Redundancia** — los problemas críticos (defectos) se atacan de varias maneras: parejas, integración continua, sentarse juntos, cliente real, despliegue diario. Quitar redundancia (p. ej. fase de pruebas final) solo cuando se demuestra innecesaria en la práctica (varios despliegues sin defectos).
11. **Fallo** — si no consigues acertar, falla. Prueba las tres formas. Anécdota del temporizador de cocina: discusiones de diseño de 15 minutos máximo, luego implementar.
12. **Calidad** — no es variable de control. Más calidad → entrega más rápida y predecible. La gente necesita estar orgullosa de su trabajo. Lo que se controla es el alcance. La preocupación por la calidad no excusa la inacción: haz lo mejor posible ahora y termina limpio después.
13. **Pasos de bebé** — "¿Qué es lo mínimo que podrías hacer que vaya reconociblemente en la buena dirección?" Los pasos pequeños cuestan menos que recular de un gran cambio abortado.
14. **Responsabilidad aceptada** — la responsabilidad no se asigna, se acepta. Quien firma el trabajo lo estima. Con responsabilidad va autoridad; un "experto de procesos" que dicta sin compartir consecuencias es un desalineamiento.

### Cap. 6. Prácticas
Las prácticas sin valores son estériles (emparejarse para contentar al jefe es frustrante). Dependen de la situación. Se enuncian como absolutos para dar una dirección (un vector), no como "o todo o nada". Son hipótesis para experimentar. Juntas se amplifican.

### Cap. 7. Prácticas primarias
- **Sentarse juntos** — espacio abierto para todo el equipo con rincones privados cerca. Anécdota de Chicago: el problema "técnico" era que los seniors estaban en despachos en cada esquina; juntándose (¡en la sala de máquinas!) el proyecto despegó. "Sea lo que sea lo que diga el cliente, siempre es un problema de personas." No derribar cubículos antes de que el equipo esté preparado. Equipos distribuidos pueden hacer XP; si hay problemas, más tiempo cara a cara.
- **Equipo completo** — todas las habilidades y perspectivas necesarias; composición dinámica. Umbrales de 12 y 150 personas (Gladwell). Las personas "fraccionadas" entre proyectos pierden tiempo y sentido de equipo.
- **Espacio de trabajo informativo** — en 15 segundos un observador sabe cómo va el proyecto. Tarjetas de historias en la pared ordenadas espacialmente; gráficos grandes y visibles que se retiran cuando dejan de ser útiles. Agua, comida, limpieza.
- **Trabajo con energía** — solo las horas productivas y sostenibles. El desarrollo es un juego de perspicacia, que llega a la mente descansada. Las horas extra son una forma de recuperar control ilusorio; cansado, cuesta ver que restas valor. Enfermo, quédate en casa. Paso intermedio: dos horas diarias de "tiempo de código" sin teléfono ni correo.
- **Programación en parejas** — dos personas en una máquina: se mantienen en la tarea, generan refinamientos, aclaran ideas, toman la iniciativa cuando el otro se atasca, se exigen las prácticas del equipo. Se puede explorar solo, pero se trae la idea (no el código) y se reimplementa en pareja. Cansa: 5-6 h/día máximo. Rotar parejas a menudo. Respetar espacio personal, higiene, y separar emociones personales del trabajo.
- **Historias** — unidades de funcionalidad visible para el cliente ("manejar 5 veces el tráfico con el mismo tiempo de respuesta"). Estimar en cuanto se escriben. "Requisito" sugiere algo obligatorio y permanente, y no lo es. Nombre corto + descripción en tarjeta, en una pared. Estimar pronto permite decidir con precio (Ferrari a 150.000 vs. monovolumen a 25.000).
- **Ciclo semanal** — reunión al inicio: revisar progreso real vs. esperado; el cliente elige las historias de la semana; se dividen en tareas que cada uno elige y estima. Se empieza escribiendo los **tests automáticos que pasarán cuando las historias estén hechas**. Objetivo: software desplegable el viernes. Si el miércoles se ve que no da, aún hay tiempo de terminar lo más valioso. Planificar es desperdicio necesario: reducir su tiempo (de un día a una hora). La semana sirve también como plataforma para experimentos.
- **Ciclo trimestral** — reflexionar sobre equipo, proyecto y alineación; identificar cuellos de botella (sobre todo externos); iniciar reparaciones; elegir **temas** y las historias que los abordan; ver el panorama general.
- **Holgura** — incluir tareas menores que se puedan dejar. Cumplir compromisos reconstruye relaciones. Camiones islandeses: van en tracción a dos ruedas para tener la de cuatro de reserva. Ejemplos: "semana geek" 1 de cada 8, 20% para tareas elegidas por programadores. Empezar por ser honesto con uno mismo sobre cuánto tardará algo.
- **Build de 10 minutos** — construir todo y pasar todos los tests automáticamente en 10 minutos. Camino: primero automatizar, luego construir solo lo cambiado, luego testear solo lo afectado (con el riesgo que conlleva). Un build automático es un alivio del estrés: "¿Nos equivocamos? Construyamos y veamos."
- **Integración continua** — integrar y probar cada par de horas como mucho. Programar en equipo es "divide, vence e **integra**". Beck prefiere el modelo síncrono: la pareja integra al acabar cada episodio y espera a que pase todo (tiempo natural de reflexión). Integrar el producto completo; el primer despliegue no debe ser un gran acontecimiento.
- **Programación test-first** — test fallido antes de cambiar código. Resuelve: alcance que se desborda, acoplamiento/cohesión (difícil de testear = problema de diseño), confianza, ritmo (test, código, refactor). Extensiones: análisis estático y model checking al estilo test-first; **testing continuo** en cada cambio, como un compilador incremental.
- **Diseño incremental** — invertir en diseño cada día. El dogma "diseña todo antes" venía de datos de Boehm sobre el coste creciente de los defectos; XP crea condiciones para que el coste del cambio no se dispare (tests, mejora continua del diseño, proceso social). Error de quienes leyeron la 1ª ed.: amontonar historias sin diseño → sistemas frágiles. No minimizar el diseño: mantenerlo proporcional. Dónde mejorar: eliminar duplicación. La refactorización codifica los patrones de cambio recurrentes.

### Cap. 8. Empezar
- No hay un único punto de partida. ¿Agobiado? Empieza tu propio ciclo semanal.
- Usar planificación XP para el propio cambio: historias como "Automatizar el build", "Test-first todo el día", "Emparejarme con Joe dos horas".
- El cambio empieza con la conciencia (sentimientos contrastados con hechos; métricas). Ejemplo: todos los defectos post-desarrollo de un equipo venían de gente programando sola.
- Cada práctica es un continuo: sitúate y avanza un paso. El cambio empieza por uno mismo; dictar prácticas destruye la confianza.
- Ejercicio de **mapear prácticas**: la práctica en el centro, su propósito debajo, factores y síntomas alrededor. Medio día con todo el equipo; actuar, no solo quejarse.
- Mensaje: los defectos deberían ser notables por raros; los ajustes grandes de alcance solo en la primera mitad; el primer despliegue tras un pequeño % del presupuesto; los equipos deberían poder crecer y encoger sin catástrofes.

### Cap. 9. Prácticas corolarias
(Peligrosas sin las primarias: desplegar a diario sin tasa de defectos cercana a cero es un desastre.)
- **Cliente real implicado** — personas afectadas por el sistema en el equipo y en la planificación. Proxies → funcionalidades sin uso y tests que no reflejan la aceptación real. Generalizar un sistema exitoso es más fácil que especializar uno inútil. "La fábrica de salchichas": los clientes ya saben cómo trabajas.
- **Despliegue incremental** — sustituir un sistema heredado asumiendo su carga poco a poco desde el principio. "Ese truco nunca funciona" (cambio total un domingo). Anécdota de los 9.000 contratos: el 80% funcionaba a los dos meses, pero por no desplegar incrementalmente se acabó el año sin ninguno en producción.
- **Continuidad del equipo** — mantener juntos los equipos que funcionan; el "pool de recursos" optimiza lo micro y destruye lo macro. Rotación razonable.
- **Equipos que se reducen** — al ganar capacidad, mantener la carga y reducir personas (Toyota).
- **Análisis de causa raíz** — los 4 pasos (test de sistema, test unitario mínimo, arreglo, por qué se creó y no se detectó) + **5 porqués** de Taiichi Ohno (ejemplo: el saldo podía ser negativo de noche → solo lo sabía la Sra. Crosby → no está en el equipo → mantiene el sistema viejo → nadie más sabe → no era prioridad de dirección → no sabían que 20.000 $ ahorraban 500.000 $). Casi siempre es un problema de personas.
- **Código compartido** — cualquiera mejora cualquier parte. Requiere responsabilidad colectiva, parejas e integración continua; si no, nadie es responsable.
- **Código y tests** — solo código y tests como artefactos permanentes; generar el resto; la historia, por mecanismos sociales. Las decisiones valiosas: qué haremos, qué no haremos y cómo lo haremos.
- **Base de código única** — un solo flujo; ramas de horas. Cliente con 7 bases de código para 7 clientes: insostenible. Mover la variación a configuración o al build.
- **Despliegue diario** — cualquier brecha entre el escritorio y producción es riesgo. Requisitos: pocos defectos al año, build y despliegue automatizados con despliegue gradual y rollback, mucha confianza. Truco: desplegar todo el trabajo interno y poner al final la "clave del arco" (el cambio de interfaz de usuario). "Doce releases suena mejor que una release y once parches."
- **Contrato de alcance negociado** — fijar tiempo, coste y calidad; negociar el alcance. Secuencia de contratos cortos.
- **Pago por uso** — el dinero es el feedback definitivo. Pago por release enfrenta intereses de proveedor y cliente; la suscripción al menos da la tasa de retención.

### Cap. 10. El equipo XP completo
Anécdota: arquitectos, diseñadores de interacción e infraestructura querían cada uno "su fase al principio". Lo que faltaba era sentirse **encordados** juntos subiendo un glaciar.
- **Testers** — ayudan al cliente a escribir tests de sistema antes de implementar ("¿y si el login falla tres veces?"); entrenan a los programadores; trabajan al principio, no al final.
- **Diseñadores de interacción** — eligen metáforas, escriben historias, analizan el uso real; especifican un poco al principio y refinan siempre.
- **Arquitectos** — refactorizaciones a gran escala, tests de sistema que estresan la arquitectura, implementan historias. "Conquista y divide": primero un sistema pequeño, luego partir por las líneas de fractura naturales. Tests como especificación de arquitectura (el procesador de tarjetas: mejoran los tests de estrés hasta romper, luego la arquitectura justo lo necesario).
- **Jefes de proyecto** — facilitan comunicación, son historiadores del equipo, traducen la pared de tarjetas al formato de la organización; presentan personas, no hacen de cuello de botella.
- **Jefes de producto** — escriben y eligen historias y temas, resuelven dudas. Un plan es un ejemplo de lo que podría pasar, no una predicción. Ordenar por negocio; el sistema "entero" desde la primera semana (ejemplo: datos ficticios para probar la edición, la parte más valiosa).
- **Directivos** — aportan valentía, confianza y rendición de cuentas; mantienen los objetivos grandes. Dos métricas: **defectos post-desarrollo** y **tiempo de inversión a retorno**. No manipular el velocímetro. "El murmullo de conversación es señal de salud; el silencio es el sonido del riesgo acumulándose."
- **Redactores técnicos** — feedback temprano ("¿cómo voy a explicar esto?") y relación con usuarios; documentación una semana detrás de las historias, luego la misma semana; medir qué documentación se usa.
- **Usuarios** — ayudan a escribir y elegir historias; hablan en nombre de una comunidad.
- **Programadores** — estiman, dividen en tareas, escriben tests y código, automatizan lo tedioso, mejoran el diseño; necesitan habilidades sociales.
- **RR. HH.** — evaluar: respeto, buen trato con otros, iniciativa, cumplir compromisos. Contratar: entre un solitario brillante y uno competente y social, se elige al social; la mejor entrevista es un día programando en pareja con el equipo.
- **Roles** no rígidos: cada uno aporta lo mejor que tiene; recomendar cambios implica respaldarlos con acción.

### Cap. 11. Teoría de las restricciones
- Ejemplo de la lavadora (45 min), secadora (90) y doblar (15): el cuello de botella es la secadora; otra lavadora solo crea montañas de ropa mojada. El trabajo se acumula delante de la restricción.
- Pasos: encontrar la restricción, que funcione a tope, aumentar su capacidad, descargarla o eliminarla. Siempre habrá otra.
- Modelo **pull** (XP) frente a **push** (cascada): las historias se detallan justo antes de implementarlas; los tests salen de la especificación; la interfaz se diseña según el test; el código según tests e interfaz; el diseño se refina según el código.
- La organización debe recompensar el rendimiento global, no la productividad individual.
- Historia triste repetida: un equipo XP mejora tanto que la restricción pasa a otro departamento, que no quiere el foco, y se disuelve el equipo. De ahí la importancia del patrocinio ejecutivo.

### Cap. 12. Planificación: gestionar el alcance
- El estado del plan compartido refleja el estado de la relación.
- Planificar es como hacer la compra con 100 $: historias = productos, estimaciones = precios, presupuesto = tiempo.
- Velocidad/calidad/precio no funciona: tiempo y coste vienen fijados y solo queda la calidad, cuyo recorte solo traslada el trabajo. La variable olvidada es el **alcance**: permite adaptarse, negociar y poner límite a demandas absurdas.
- 4 pasos a cualquier escala: listar, estimar, fijar presupuesto, acordar lo que cabe **sin cambiar estimaciones ni presupuesto**. "Se reconocen los deseos, pero solo se compromete lo necesario."
- Todo el equipo planifica junto. Ordenar las tarjetas de varias formas en la mesa (riesgo a la izquierda, valor arriba…); si te pierdes, barajar y volver a extender.
- Estimar: horas o días de una pareja para dejarla **lista para desplegar** (tests, implementación, refactor, conversaciones). Si tienes un mes para planificar, haz cuatro iteraciones de una semana.
- Presupuesto: medir las horas productivas reales de programación y dividir entre 2 por trabajar en parejas (ejemplo del libro: 6 programadores con 4 h de programación al día → 12 horas-pareja). Según Beck, las parejas rinden más del doble en código limpio y desplegable, contando el tiempo de depuración.
- 1ª ed.: puntos 1-3; 2ª ed.: Beck prefiere tiempo real. "El tiempo de ayer" (Fowler).
- Ir más lento: buscar distracciones o prácticas abandonadas; si no basta, el cliente elige qué terminar primero. Sin reajuste, se trabaja bajo una mentira.
- Tarjetas en una pared: lo valioso es la interacción, no la herramienta. "No se pueden automatizar las relaciones."

### Cap. 13. Testing: pronto, a menudo y automatizado
- Los defectos destruyen la confianza; sin confianza la gente se dedica a defenderse.
- El nivel aceptable de defectos varía (la web gigante vs. el transbordador espacial).
- **Doble comprobación**: sumar una columna de arriba abajo y de abajo arriba. Test e implementación expresan lo mismo de dos formas. Por eso no se copia el resultado calculado como valor esperado.
- **Aumento del coste del defecto (DCI)**: cuanto antes se encuentra, más barato. XP lo usa al revés: tests en el bucle interno.
- Si el intervalo es de minutos, el que comete el error escribe el test. Dos juegos de tests: los del programador (componentes) y los del cliente (sistema), que se comprueban mutuamente.
- **Tests automáticos rompen el ciclo del estrés**: con tests manuales, más estrés → más errores; con automáticos, más estrés → se ejecutan más tests.
- Beta testing = síntoma de testing débil y mala comunicación con el cliente. Llevar estrés y carga al ciclo de desarrollo y ejecutarlos continuamente.
- Verificación estática: valiosa, mejor si es rápida y se escribe poco a poco.
- Código y test en cualquier orden, pero en XP el test va primero cuando se puede: separa interfaz de implementación, da certeza, mide progreso. Un solo test roto a la vez.

### Cap. 14. Diseñar: el valor del tiempo
- Diseño = "sistema de elementos relacionados de forma beneficiosa" (permacultura). En software el diseño da apalancamiento: replicar elementos cuesta cero.
- La metáfora de la construcción falla: en software deshacer un día de trabajo es trivial. La pregunta no es si diseñar sino **cuándo**. La alternativa a diseñar antes es diseñar **después** (con experiencia): "diseñar siempre".
- Gráficos: a veces cualquier diseño sirve; a veces pensar mucho basta; a veces solo la experiencia lleva a un diseño suficiente. Según valor y coste de cada estrategia.
- Base de datos incremental (Pramod Sadalage): empezar vacía; tablas y columnas con scripts automáticos que migran datos; numerados en secuencia; cada versión del código espera una versión del esquema; despliegues pequeños y frecuentes.
- **Una vez y solo una vez** es la heurística más poderosa. Un cambio conceptual = un cambio de código.
- Objeciones: "no podemos" (se aprende) y "no queremos" (centrarse demasiado en meter una funcionalidad más).
- Bola de barro: "enciende las lámparas por donde caminas"; lista pública de mejoras grandes.
- Escalonar mejoras: RPC → CORBA → cola de mensajes, sistema funcionando en cada etapa; concentrar suposiciones hasta que el cambio quepa en una semana. El diseño está al servicio de la relación de confianza (entrega semanal), no de la comodidad del diseñador.
- Beneficios: desplegar antes, decidir con certeza, no vivir con malas decisiones, mantener el ritmo. Precio: disciplina de diseñar siempre y hacer cambios grandes en pasos pequeños.
- **Simplicidad** (4 criterios, en orden): apropiado para la audiencia, comunicativo, factorizado, mínimo.

### Cap. 15. Escalar XP
Dimensiones: personas, inversión, tamaño de la organización, tiempo, complejidad del problema, complejidad de la solución, consecuencia del fallo.
- **Personas**: (1) partir el problema, (2) soluciones simples, (3) complejas solo si queda algo. ¿Lo resolvería un equipo pequeño? Si no, empezar pequeño y luego "conquistar y dividir" en equipos autónomos que integran a menudo.
- **Inversión**: el problema es cómo la contabilidad trata el software; buscar un aliado en finanzas.
- **Organización**: comunicar en los formatos que esperan (diapositivas, plan trimestral) sin dejar de tener la pared como "la verdad". Anécdota: el plan trimestral rellenado cada viernes con lo realmente hecho resultó el más preciso de la organización.
- **Tiempo**: proyectos largos funcionan gracias a los tests; si se para, documento "Piedra Rosetta".
- **Complejidad del problema**: XP es ideal para especialistas que colaboran (Beck emparejado con un actuario).
- **Complejidad de la solución**: dejar de cavar; ejemplo: build de 24 h manual → 1 h automático; en dos años 70 → 20 ingenieros, −66% tiempo de arreglo, releases de 10 a 2 semanas. Limpiar mientras arreglas.
- **Consecuencia del fallo**: sistemas críticos necesitan más que XP; auditoría temprana y frecuente; las refactorizaciones deben preservar la seguridad; trazabilidad (línea → test → test de sistema → historia → fecha).

### Cap. 16. Entrevista (Brad Jensen, Sabre Airline Solutions)
300 personas, 13 equipos formados en 13 semanas (lo repetiría empezando por un equipo que enseñe al siguiente). XP puro en greenfield; XP embebido en cascada para C++ heredado. Un proyecto sin un solo defecto en dos años; heredados con 1-2 defectos/KLOC frente a 8 de organizaciones CMM-5; +40% productividad. Adopción: 1/3 escépticos, 1/3 se suben rápido, 1/3 esperan; al final 80-90% compra. Riesgos del cliente en el sitio: el control de alcance puede convertirse en desbordamiento de alcance; clientes que ocultan requisitos para bajar estimaciones. Consejo: planificar por funcionalidades, releases trimestrales, iteraciones fijas, cliente sentado con el equipo, espacio abierto.

## Sección 2. Filosofía de XP

### Cap. 17. Historia de la creación
Chrysler, nóminas, 1996: "¿Tenéis tests para no romper nada?" — "Aún no calculamos bien los resultados." Señales de proyecto en apuros: "a dos meses de producción" durante cinco meses; gente que mira quién escucha antes de hablar; cansancio. Se empezó de cero con un equipo más pequeño (Ron Jeffries como primer coach, Martin Fowler). Idea: tomar todo lo valioso de la ingeniería de software y "subir los diales a 10". Primera iteración: imprimir **una nómina real correcta**. "Es la primera estimación en la que de verdad he creído." Lección: **"De extremo a extremo está más lejos de lo que crees"** (los números estaban bien pero no salían bien en los ficheros). Ante el pánico de Beck, Chet Hendrickson: "Cada vez que estimamos sumamos las piezas. ¿Qué es diferente ahora?" Éxito técnico y de negocio; se canceló en 2000 por tecnología (Smalltalk) y financiación.

### Cap. 18. Taylorismo y software
Tres supuestos de Taylor: las cosas suelen ir según el plan; la micro-optimización lleva a la macro; las personas son intercambiables y hay que decirles qué hacer. Herencia social: separar planificación de ejecución (alguien con autoridad estima o cambia la estimación del trabajo de otro; un grupo "élite" de arquitectura dicta) y un departamento de calidad separado (nadie en ingeniería es responsable de la calidad).

### Cap. 19. Sistema de Producción de Toyota
Ir rápido eliminando desperdicio, no esforzándose más. Cualquiera tira de la cuerda y para la línea ante un defecto. Kaizen. No hay departamento de calidad: toda la organización lo es. Las piezas usadas inmediatamente aportan información sobre el paso anterior. El mayor desperdicio es la **sobreproducción**: en software, documentos de requisitos obesos, arquitecturas no usadas, código sin integrar durante meses, documentación que nadie lee. Los requisitos mejoran acortando el camino hasta el despliegue, no con procesos más elaborados.

### Cap. 20. Aplicar XP
Lleva años, no semanas. "Adoptar" es la palabra equivocada: tus problemas siguen siendo tuyos; XP es el contexto para resolverlos. Riesgo de reversión (individual y organizativa: el equipo XP despedido por mostrar "menos compromiso" que el que hacía noches en vela). Empezar por uno mismo y liderar con el ejemplo (el líder técnico que "apoya" los tests pero nunca escribió uno). Patrón: cambio yo, luego ofrezco el fruto. La mejora "continua" es en realidad a saltos con mesetas y a veces caídas: si una práctica empeora las cosas, volver atrás y atacar los prerrequisitos ocultos. Cambios rápidos cuando hay valores alineados y dolor reciente.
- **Coach**: detecta cuellos de comunicación, recuerda hacer lo simple cuando se escucha al miedo ("¿has escrito ya el test?"), modela valores, mantiene el ritmo sostenible y **fomenta la independencia**: se va un poco antes de que creas estar listo.
- **Cuándo no usar XP**: cuando los valores *reales* de la organización (secretismo, aislamiento, complejidad, timidez, falta de respeto) chocan con los de XP.

### Cap. 21. Pureza
"¿Es mi equipo extremo?" no tiene respuesta binaria (la tortilla con queso suizo y pepinillo no es Tex-Mex). ¿Hacéis lo que tiene sentido de forma sostenible? Usar XP como excusa ("no documentamos porque somos extremos") es desprecio por la comunicación. Peor fracasar con XP que tener éxito con cascada. Certificación: mejor el modelo de acreditación por mentores (La Leche League) que los certificados que nadie respalda.

### Cap. 22. Desarrollo multisitio
Los valores sirven igual, con más esfuerzo: feedback más estrecho, más comunicación, cuidar la simplicidad, más respeto por diferencias culturales. Planificar con más frecuencia; la base de código única es todavía más importante. Los trabajos buscan **integridad y responsabilidad**, no solo salarios bajos. Dos futuros: estancamiento proteccionista o eliminación global del desperdicio con un mercado de software en auge.

### Cap. 23. El modo intemporal de programar
Christopher Alexander: los patrones como forma de equilibrar el poder entre diseñadores y quienes habitan el espacio. En software hubo dos desequilibrios: ingeniería como rey ("te daremos lo que necesitas aunque no lo sepas") y negocio como rey (fechas y alcance sin integridad del equipo). Objetivo de XP: **armonía y equilibrio** entre lo técnico y el negocio. Programadores poderosos (estiman, implementan y despliegan rápido y fiable) que ceden las decisiones de negocio a la parte de negocio. Cada estimación manipulada aleja al equipo de su potencial. "Compartir el poder es pragmático, no idealista."

### Cap. 24. Comunidad
Las comunidades dan apoyo, estudio conjunto y rendición de cuentas. Escuchar importa más que hablar; consejo solo si se pide; confidencialidad; el conflicto es semilla de aprendizaje y no se exige unanimidad.

### Cap. 25. Conclusión
La clave de XP es la **integridad**: actuar en armonía con los propios valores. No hay mejora sin mejorarse primero uno mismo. "Piensa en tus valores. Elige conscientemente vivir en armonía con ellos. Escoge una práctica para empezar."

## Prólogo de Erich Gamma (Eclipse) — XP aplicado sin ser "puro"
Tests tempranos y automatizados (21.000 tests para un build verde), diseño incremental con APIs estables, despliegue diario de componentes, comunidad de usuarios como cliente, builds nocturnos y de integración semanal, hitos cada 6 semanas como "latido", plan inicial embrionario publicado y evolucionado. Resultado: menos estrés y fechas cumplidas con precisión.

## Frases para recordar
- "No importa lo que diga el cliente que es el problema: siempre es un problema de personas."
- "¿Qué es lo más simple que podría funcionar?"
- "¿Qué es lo mínimo que podrías hacer que vaya reconociblemente en la buena dirección?"
- "Perfecto es un verbo, no un adjetivo."
- "La calidad no es una variable de control."
- "De extremo a extremo está más lejos de lo que crees."
- "Si los números están mal, arregla los números y comunica las consecuencias."
- "El silencio es el sonido del riesgo acumulándose."
- "Siempre puedes mejorar. Siempre puedes empezar por ti. Siempre puedes empezar hoy."
