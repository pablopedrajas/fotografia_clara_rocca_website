import type { APIRoute } from 'astro';
import { sitio } from '../config/sitio';
import { especialidades } from '../config/especialidades';
import { cargarFotos } from '../lib/fotos';

/** Sitemap de imágenes: ayuda a que las fotos de Clara aparezcan en Google Imágenes. */
const escapar = (t: string) =>
  t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async () => {
  if (!sitio.url) return new Response('', { status: 404 });
  const fotos = await cargarFotos();
  const abs = (p: string) => new URL(p, sitio.url).href;

  const paginas = [
    { loc: abs('/portfolio/'), fotos },
    ...especialidades.map((e) => ({ loc: abs(`/${e.slug}/`), fotos: fotos.filter((f) => e.categorias.includes(f.categoria)) })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${paginas
  .map(
    (p) => `  <url>
    <loc>${p.loc}</loc>
${p.fotos.map((f) => `    <image:image><image:loc>${escapar(abs(f.grande))}</image:loc></image:image>`).join('\n')}
  </url>`,
  )
  .join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
