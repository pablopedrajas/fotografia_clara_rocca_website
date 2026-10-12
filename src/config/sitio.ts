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
    'Clara Rocca, fotógrafa y modelo profesional con más de diez años de experiencia a los dos lados de la cámara.',

  /** Frase bajo el nombre en la portada. */
  lema: 'Fotógrafa y modelo. Más de diez años a los dos lados de la cámara.',

  /** Texto de la sección «Los dos lados». */
  sobre: [
    'Llevo más de diez años trabajando delante y detrás del objetivo. Como modelo aprendí lo que se siente al otro lado: los nervios, la luz en la cara, la duda de qué hacer con las manos.',
    'Como fotógrafa uso eso a tu favor. Dirijo cada sesión sabiendo exactamente lo que necesitas para estar cómoda y salir como eres.',
  ],

  contacto: {
    email: '',
    telefono: '',
    instagram: '', // solo el usuario, sin @
    ciudad: '',
  },

  /**
   * Tipos de sesión que ofrece Clara. Se muestran en el formulario de contacto.
   * Ejemplo: ['Retrato', 'Book de modelo', 'Moda y marcas']
   */
  servicios: [] as string[],
};
