/**
 * Especialidades de Clara. Cada una genera su propia página (/bodas/, /bautizos/…)
 * pensada para posicionar en Google por esa búsqueda concreta.
 *
 * Para que una foto aparezca en la página de una especialidad, ponle en
 * src/fotos/fotos.json una "categoria" que esté en el campo `categorias` de aquí.
 *
 * Si en sitio.ts se rellena la ciudad, se añade sola a los títulos
 * («Fotógrafa de bodas en …»), que es lo que más pesa en el SEO local.
 */

export interface Paso {
  titulo: string;
  texto: string;
}

export interface Pregunta {
  pregunta: string;
  respuesta: string;
}

export interface Especialidad {
  slug: string;
  /** Nombre corto: menú, filtros y formulario */
  nombre: string;
  /** Lo que se busca en Google, sin la ciudad: «Fotógrafa de bodas» */
  busqueda: string;
  /** Categorías de fotos de fotos.json que se muestran en la página */
  categorias: string[];
  /** Foto que se marca con lápiz en su tira y sirve de miniatura en la portada (nombre de archivo) */
  portada?: string;
  /** Frase de la lista de especialidades de la portada */
  resumen: string;
  /** Meta description, máx. ~155 caracteres (la ciudad se añade si existe) */
  descripcion: string;
  entradilla: string;
  parrafos: string[];
  /** Cómo transcurre el encargo, en orden */
  pasos: Paso[];
  preguntas: Pregunta[];
}

export const especialidades: Especialidad[] = [
  {
    slug: 'bodas',
    nombre: 'Bodas',
    busqueda: 'Fotógrafa de bodas',
    categorias: ['Bodas'],
    portada: 'boda-beso-arco.jpg',
    resumen: 'Vuestro día contado de principio a fin, sin poses forzadas.',
    descripcion:
      'Fotógrafa de bodas en la playa y en la ciudad. Mira una boda real entera, de los preparativos a la foto de familia, y pide disponibilidad para tu fecha.',
    entradilla:
      'La mayoría de las parejas nunca se han puesto delante de una cámara profesional. Clara sí: es modelo profesional y sabe cómo haceros olvidar que está ahí.',
    parrafos: [
      'Una boda pasa deprisa. Clara la cuenta entera: los botones del vestido, los nervios de la espera, la llegada, los votos, los abrazos y la última foto de familia. Trabaja con discreción durante los momentos importantes y dirige con calma cuando toca hacer los retratos de pareja.',
      'Más abajo tienes una boda real en la playa contada así, con la hoja de contactos completa del día: 230 fotos editadas, en el orden en que se hicieron, para que veas lo que de verdad recibe una pareja y no solo cinco fotos escogidas.',
      'Su experiencia como modelo se nota en esos minutos de retrato: os dice dónde mirar, qué hacer con las manos y cómo colocaros para que la luz os favorezca, sin que parezca una sesión de estudio.',
    ],
    pasos: [
      { titulo: 'Os conocéis', texto: 'Habláis de la fecha, los lugares, el horario y las fotos que no pueden faltar, para que el día no haya sorpresas.' },
      { titulo: 'El día de la boda', texto: 'Clara acompaña el día de principio a fin, se adelanta a los momentos y reserva unos minutos tranquilos para vuestros retratos.' },
      { titulo: 'La entrega', texto: 'Clara selecciona y edita una a una las fotos para que el reportaje cuente la historia completa de vuestro día.' },
    ],
    preguntas: [
      {
        pregunta: '¿Y si no nos gusta posar?',
        respuesta:
          'Es lo más habitual y no es un problema. Clara ha estado al otro lado de la cámara y sabe guiaros con indicaciones sencillas. La mayor parte del reportaje se hace sin que tengáis que posar.',
      },
      {
        pregunta: '¿Hace bodas en la playa?',
        respuesta:
          'Sí. En esta página puedes ver una boda celebrada en una cala, contada de principio a fin: los preparativos, la ceremonia frente al mar y los retratos de pareja en la orilla.',
      },
      {
        pregunta: '¿Las fotos se entregan en color o en blanco y negro?',
        respuesta:
          'Clara edita el reportaje en color y, cuando una foto lo pide, prepara también su versión en blanco y negro. Más arriba tienes un ejemplo para comparar las dos.',
      },
      {
        pregunta: '¿Puedo ver una boda completa y no solo una selección?',
        respuesta:
          'Sí. La hoja de contactos de esta página muestra las 230 fotos editadas de una misma boda, en orden. Las marcadas en rojo son las que se ven en grande en el apartado «momento a momento».',
      },
      {
        pregunta: '¿Cómo reservamos la fecha?',
        respuesta:
          'Escribid a Clara con la fecha y el lugar de la boda. Os responderá con su disponibilidad y el presupuesto.',
      },
    ],
  },
  {
    slug: 'viajes',
    nombre: 'Viajes y paisajes',
    busqueda: 'Fotografía de viajes y turismo',
    categorias: ['Paisaje', 'Arquitectura', 'Retrato'],
    portada: 'cala-aguas-turquesas.jpg',
    resumen: 'Destinos, alojamientos y personas en el lugar que quieren recordar.',
    descripcion:
      'Fotografía de viajes y turismo de Clara Rocca: imágenes de destinos, hoteles y alojamientos, y sesiones de fotos para quien quiere volver de su viaje con buenas fotos suyas.',
    entradilla:
      'Clara fotografía los lugares como los recuerda quien los visita: la luz de una tarde en Salzburgo, el agua de una cala o una calle estrecha de Toledo.',
    parrafos: [
      'Trabaja con dos tipos de encargo. Por un lado, negocios que viven de que la gente quiera ir: hoteles, casas rurales, apartamentos turísticos, restaurantes con vistas, oficinas de turismo y marcas de viaje que necesitan fotos que den ganas de reservar.',
      'Por otro, personas que viajan y quieren volver con fotos suyas en el destino, más allá del selfie. Su experiencia como modelo hace que estas sesiones sean naturales: elige el sitio y la hora, y te dice cómo colocarte para que el lugar y tú salgáis bien a la vez.',
    ],
    pasos: [
      { titulo: 'Contáis el encargo', texto: 'El lugar, las fechas y para qué vais a usar las fotos: la web de un alojamiento, una campaña o el recuerdo de un viaje.' },
      { titulo: 'La sesión', texto: 'Clara planifica los sitios y la luz del día para cada foto, y aprovecha lo que el lugar ofrece en ese momento.' },
      { titulo: 'La entrega', texto: 'Recibís las fotos seleccionadas y editadas, listas para usarlas donde las necesitéis.' },
    ],
    preguntas: [
      {
        pregunta: '¿Hacéis fotos para hoteles y alojamientos?',
        respuesta:
          'Sí. Clara fotografía espacios, entorno y detalles pensando en lo que el viajero busca al comparar dónde dormir. Cuéntale qué tipo de alojamiento tienes y dónde vas a publicar las fotos.',
      },
      {
        pregunta: '¿Puede hacerme una sesión durante mi viaje?',
        respuesta:
          'Escríbele con el destino y las fechas. Te responderá con su disponibilidad y el presupuesto.',
      },
    ],
  },
  {
    slug: 'bautizos',
    nombre: 'Bautizos',
    busqueda: 'Fotógrafa de bautizos',
    categorias: ['Bautizos'],
    resumen: 'La ceremonia y la familia, con la discreción que pide el momento.',
    descripcion:
      'Clara Rocca, fotógrafa de bautizos. Reportajes discretos de la ceremonia y la celebración, con retratos de familia naturales.',
    entradilla:
      'Un bautizo reúne a toda la familia en torno al bebé. Clara fotografía la ceremonia sin interrumpirla y aprovecha la celebración para los retratos de familia.',
    parrafos: [
      'Durante la ceremonia trabaja en silencio, respetando el lugar y el ritmo del oficio. Los gestos pequeños, como las manos de los padrinos o la cara de los abuelos, son los que más se recuerdan después.',
      'En la celebración organiza los retratos de familia de forma rápida y ordenada, para que nadie pase el día esperando y el bebé no se canse.',
    ],
    pasos: [
      { titulo: 'Preparáis el día', texto: 'Contáis a Clara el lugar, el horario y qué familiares no pueden faltar en las fotos.' },
      { titulo: 'La ceremonia y la celebración', texto: 'Clara fotografía la ceremonia con discreción y después los retratos de familia y la fiesta.' },
      { titulo: 'La entrega', texto: 'Recibís las fotos seleccionadas y editadas, listas para guardar e imprimir.' },
    ],
    preguntas: [
      {
        pregunta: '¿Molestará durante la ceremonia?',
        respuesta:
          'No. Clara trabaja de forma discreta, se coloca donde no estorba y respeta las indicaciones de cada iglesia o lugar de celebración.',
      },
      {
        pregunta: '¿Cómo la reservo?',
        respuesta: 'Escribe a Clara con la fecha y el lugar del bautizo y te responderá con disponibilidad y presupuesto.',
      },
    ],
  },
  {
    slug: 'comuniones',
    nombre: 'Comuniones',
    busqueda: 'Fotógrafa de comuniones',
    categorias: ['Comuniones'],
    resumen: 'Retratos con los que los niños se reconocen, sin sesiones eternas.',
    descripcion:
      'Clara Rocca, fotógrafa de comuniones. Sesiones cortas y divertidas en las que los niños se sienten cómodos y salen como son.',
    entradilla:
      'Para un niño, una sesión de fotos larga se hace eterna. Clara las plantea cortas y como un juego, para que salga como es y no con la sonrisa forzada.',
    parrafos: [
      'Antes de empezar dedica unos minutos a que el niño o la niña coja confianza. Después alterna retratos más cuidados con momentos libres, que suelen ser las fotos que la familia acaba enmarcando.',
      'Puede hacerse una sesión antes del día, el reportaje del día de la comunión o las dos cosas. Clara os ayuda a elegir lo que mejor encaja con vuestra familia.',
    ],
    pasos: [
      { titulo: 'Elegís el tipo de sesión', texto: 'Sesión previa, reportaje del día o ambas. Habláis con Clara del lugar y del estilo que os gusta.' },
      { titulo: 'La sesión', texto: 'Corta, con pausas y con juego, adaptada a la edad y al carácter del niño o la niña.' },
      { titulo: 'La entrega', texto: 'Recibís las fotos seleccionadas y editadas, listas para imprimir o para el recordatorio.' },
    ],
    preguntas: [
      {
        pregunta: '¿Y si mi hijo es muy tímido?',
        respuesta:
          'Es muy habitual. Clara empieza sin cámara, juega y conversa hasta que el niño se suelta. Las sesiones van a su ritmo.',
      },
      {
        pregunta: '¿Cómo reservo la sesión?',
        respuesta: 'Escribe a Clara con la fecha de la comunión y te responderá con disponibilidad y presupuesto.',
      },
    ],
  },
  {
    slug: 'modelo-para-marcas',
    nombre: 'Modelo para marcas',
    busqueda: 'Modelo para marcas',
    categorias: ['Modelo', 'Gastronomía'],
    portada: 'modelo-campana-moda-cuclillas.jpg',
    resumen: 'Campañas de moda, producto y redes, delante o detrás de la cámara.',
    descripcion:
      'Clara Rocca, modelo con más de diez años en el sector y fotógrafa, para campañas de moda, catálogos, producto y contenido de marca.',
    entradilla:
      'Más de diez años posando para marcas. Clara sabe lo que necesita una campaña porque la ha vivido desde los dos lados de la cámara.',
    parrafos: [
      'Como modelo, Clara trabaja en campañas de moda, catálogos y contenido para redes. Llega a la sesión sabiendo moverse, cambiar de pose entre disparo y disparo y sacar partido a la ropa o al producto, que es lo que hace que una jornada de estudio rinda.',
      'Como fotógrafa, hace sesiones para marcas y negocios: producto, gastronomía, espacios y retratos del equipo. Estudió Diseño Gráfico, así que piensa cada foto según dónde se va a usar: la web, una ficha de producto, un cartel o una publicación en Instagram.',
      'Puedes contar con ella para una cosa o para la otra. Cuéntale qué quieres comunicar y te propondrá cómo enfocarlo.',
    ],
    pasos: [
      { titulo: 'Le cuentas el proyecto', texto: 'Qué marca o producto es, dónde se van a usar las fotos y en qué fechas.' },
      { titulo: 'Propuesta', texto: 'Clara te responde con disponibilidad, enfoque y presupuesto, ya sea como modelo o como fotógrafa.' },
      { titulo: 'La sesión', texto: 'En estudio o en exteriores. Si posa, trabaja con la dirección de tu equipo; si fotografía, dirige ella la sesión.' },
      { titulo: 'Las fotos', texto: 'Si la sesión la fotografía ella, recibes las fotos editadas y adaptadas a los formatos que vayas a usar.' },
    ],
    preguntas: [
      {
        pregunta: '¿Clara trabaja como modelo para marcas?',
        respuesta:
          'Sí. Lleva más de diez años en el sector como modelo, sobre todo en moda. Escríbele con la fecha, el tipo de campaña y el uso que tendrán las fotos.',
      },
      {
        pregunta: '¿También hace fotos de producto o para restaurantes?',
        respuesta: 'Sí. Hace sesiones para marcas y negocios: producto, platos, espacios y retratos para la web o las redes sociales.',
      },
      {
        pregunta: '¿Cómo pido presupuesto?',
        respuesta:
          'Escribe a Clara contando qué marca es, si necesitas modelo o fotógrafa y para cuándo. Te responderá con disponibilidad y presupuesto.',
      },
    ],
  },
  {
    slug: 'book-de-modelo',
    nombre: 'Book de modelo',
    busqueda: 'Book de modelo',
    categorias: ['Book de modelo', 'Modelo'],
    portada: 'modelo-campana-moda-raqueta.jpg',
    resumen: 'Un book hecho por alguien que también trabaja como modelo.',
    descripcion:
      'Book de fotos para modelos con Clara Rocca, fotógrafa y modelo profesional con más de diez años de experiencia en el sector.',
    entradilla:
      'Clara también trabaja como modelo. Sabe qué fotos tiene que tener un book y cómo moverse delante de la cámara para conseguirlas.',
    parrafos: [
      'Un book necesita variedad: retratos limpios, cuerpo entero, distintos planos y estilos. Clara planifica la sesión para cubrir todo lo necesario sin repetir fotos parecidas.',
      'Si estás empezando, te enseña a posar durante la propia sesión: dónde poner el peso, cómo colocar las manos y cómo cambiar de expresión entre disparo y disparo. Es la parte que más agradecen quienes nunca han trabajado con un fotógrafo.',
    ],
    pasos: [
      { titulo: 'Preparáis la sesión', texto: 'Habláis de para qué es el book, qué estilos quieres mostrar y qué ropa llevar.' },
      { titulo: 'La sesión', texto: 'Clara te dirige foto a foto y te enseña a posar mientras trabajáis.' },
      { titulo: 'La entrega', texto: 'Recibes las fotos seleccionadas y editadas, listas para enviar a agencias o para tus redes.' },
    ],
    preguntas: [
      {
        pregunta: '¿Necesito experiencia como modelo?',
        respuesta:
          'No. Muchas personas hacen su primer book con Clara precisamente porque, al ser modelo, sabe enseñar a posar desde cero.',
      },
      {
        pregunta: '¿Cómo reservo la sesión?',
        respuesta: 'Escribe a Clara contándole para qué necesitas el book y te responderá con disponibilidad y presupuesto.',
      },
    ],
  },
];
