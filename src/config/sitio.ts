/**
 * Datos de la web de Clara Rocca.
 *
 * Todo lo que esté vacío ('' o []) simplemente no se muestra en la web:
 * por ejemplo, si no hay email, la sección de contacto no aparece.
 */
export const sitio = {
  nombre: 'Clara Rocca',

  /** Dominio definitivo, p. ej. 'https://clararocca.com'. Activa el sitemap y las URLs canónicas. */
  url: '',

  /** Texto que aparece en Google y al compartir el enlace. */
  descripcion:
    'Clara Rocca, fotógrafa y modelo profesional en Alicante. Bodas, viajes, paisaje, arquitectura y retrato, con más de diez años de experiencia en el sector.',

  /** Frase bajo el nombre en la portada. */
  lema: 'Fotógrafa y modelo en Alicante. Mirar despacio, recordar siempre.',

  /** Texto de la sección «Los dos lados». */
  sobre: [
    'Llevo más de diez años en el sector, delante del objetivo como modelo y, desde hace cinco, también detrás como fotógrafa. Como modelo aprendí lo que se siente al otro lado: los nervios, la luz en la cara, la duda de qué hacer con las manos.',
    'Como fotógrafa uso eso a tu favor. Estudié Diseño Gráfico y me interesan las fotos que transmiten algo: la calma de un paisaje, la textura de una fachada, la última luz del día. Miro sin prisa y dirijo cada sesión sabiendo lo que necesitas para estar cómoda y salir como eres.',
  ],

  contacto: {
    email: 'claradepajr@gmail.com',
    telefono: '',
    instagram: 'clararoccap', // solo el usuario, sin @
    ciudad: 'Alicante',
  },

  /**
   * Otros tipos de sesión que ofrece Clara y que no tienen página propia.
   * Se añaden a las especialidades en el desplegable del formulario.
   * Ejemplo: ['Retrato', 'Moda y marcas']
   */
  servicios: ['Historias personales'] as string[],
};
