import { sitio } from '../config/sitio';
import { especialidades } from '../config/especialidades';

/** Identificadores estables para enlazar los datos estructurados entre páginas */
export const idNegocio = sitio.url ? `${sitio.url}/#negocio` : '#negocio';
export const idPersona = sitio.url ? `${sitio.url}/#clara` : '#clara';

/**
 * Datos de negocio local para Google (fotógrafa en una ciudad concreta).
 * Solo incluye lo que está en sitio.ts: nada inventado.
 */
export function negocio() {
  const { email, telefono, instagram, ciudad } = sitio.contacto;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'LocalBusiness'],
        '@id': idNegocio,
        name: `${sitio.nombre} Fotografía`,
        description: sitio.descripcion,
        ...(sitio.url && { url: `${sitio.url}/`, image: `${sitio.url}/og.jpg` }),
        ...(email && { email }),
        ...(telefono && { telephone: telefono }),
        ...(ciudad && {
          address: { '@type': 'PostalAddress', addressLocality: ciudad, addressRegion: ciudad, addressCountry: 'ES' },
          areaServed: { '@type': 'City', name: ciudad },
        }),
        ...(instagram && { sameAs: [`https://www.instagram.com/${instagram}/`] }),
        founder: { '@id': idPersona },
        knowsAbout: especialidades.map((e) => e.busqueda),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Sesiones de fotografía',
          itemListElement: especialidades.map((e) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: e.busqueda,
              ...(sitio.url && { url: `${sitio.url}/${e.slug}/` }),
            },
          })),
        },
      },
      {
        '@type': 'Person',
        '@id': idPersona,
        name: sitio.nombre,
        jobTitle: ['Fotógrafa', 'Modelo'],
        worksFor: { '@id': idNegocio },
        ...(instagram && { sameAs: [`https://www.instagram.com/${instagram}/`] }),
      },
      ...(sitio.url
        ? [{ '@type': 'WebSite', '@id': `${sitio.url}/#web`, url: `${sitio.url}/`, name: sitio.nombre, inLanguage: 'es-ES', publisher: { '@id': idNegocio } }]
        : []),
    ],
  };
}
