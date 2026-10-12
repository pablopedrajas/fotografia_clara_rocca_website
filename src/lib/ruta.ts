/** Ruta interna con el prefijo de la web (en GitHub Pages la web vive en /fotografia_clara_rocca_website/). */
export const ruta = (p: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + p;
