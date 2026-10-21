// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { sitio } from './src/config/sitio.ts';

export default defineConfig({
  site: sitio.url || undefined,
  // En GitHub Pages la web cuelga de /<repo>/; en un dominio propio, de la raíz
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  // CSS dentro del HTML: una petición menos que bloquee el primer pintado
  build: { inlineStylesheets: 'always' },
  integrations: sitio.url ? [sitemap()] : [],
  image: {
    // Las fotos se sirven optimizadas en WebP a varios tamaños
    responsiveStyles: false,
  },
});
