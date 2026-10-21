import type { APIRoute } from 'astro';
import { sitio } from '../config/sitio';

export const GET: APIRoute = () => {
  const lineas = ['User-agent: *', 'Allow: /'];
  if (sitio.url) {
    lineas.push('', `Sitemap: ${new URL('/sitemap-index.xml', sitio.url).href}`);
    lineas.push(`Sitemap: ${new URL('/sitemap-imagenes.xml', sitio.url).href}`);
  }
  return new Response(lineas.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
