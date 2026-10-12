import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import datos from '../fotos/fotos.json';

/**
 * Carga todas las fotos de src/fotos/ y las cruza con los datos de fotos.json.
 *
 * fotos.json (opcional por foto):
 * {
 *   "nombre-del-archivo.jpg": {
 *     "alt": "Descripción de la foto para personas con discapacidad visual y Google",
 *     "categoria": "Retrato",
 *     "lado": "detras" | "delante",   // detrás = la hizo Clara · delante = posa Clara
 *     "seleccionada": true,            // la marca con lápiz rojo en la portada
 *     "orden": 1
 *   }
 * }
 */

export type Lado = 'detras' | 'delante';

interface DatosFoto {
  alt?: string;
  categoria?: string;
  lado?: Lado;
  seleccionada?: boolean;
  orden?: number;
}

export interface Foto {
  id: string;
  archivo: string;
  alt: string;
  categoria: string;
  lado: Lado;
  seleccionada: boolean;
  ancho: number;
  alto: number;
  vertical: boolean;
  /** WebP pequeño para miniaturas y la hoja de contactos */
  mini: string;
  srcset: string;
  grande: string;
}

const modulos = import.meta.glob<{ default: ImageMetadata }>(
  '../fotos/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP,avif,tif,tiff}',
  { eager: true },
);

const meta = datos as Record<string, DatosFoto>;
const ANCHOS = [480, 960, 1600, 2400];

let cache: Foto[] | null = null;

export async function cargarFotos(): Promise<Foto[]> {
  if (cache) return cache;

  const lista = await Promise.all(
    Object.entries(modulos).map(async ([ruta, mod], i) => {
      const archivo = ruta.split('/').pop()!;
      const d = meta[archivo] ?? {};
      const img = mod.default;
      const anchos = ANCHOS.filter((w) => w < img.width).concat(img.width).slice(0, 4);

      const [mini, ...variantes] = await Promise.all([
        getImage({ src: img, width: Math.min(640, img.width), format: 'webp', quality: 72 }),
        ...anchos.map((w) => getImage({ src: img, width: w, format: 'webp', quality: 82 })),
      ]);

      return {
        id: `f${i}`,
        archivo,
        alt: d.alt ?? 'Fotografía de Clara Rocca',
        categoria: d.categoria ?? 'Retrato',
        lado: d.lado ?? 'detras',
        seleccionada: d.seleccionada ?? false,
        orden: d.orden ?? 1000 + i,
        ancho: img.width,
        alto: img.height,
        vertical: img.height > img.width,
        mini: mini.src,
        srcset: variantes.map((v, k) => `${v.src} ${anchos[k]}w`).join(', '),
        grande: variantes[variantes.length - 1].src,
      };
    }),
  );

  lista.sort((a, b) => a.orden - b.orden || a.archivo.localeCompare(b.archivo));
  cache = lista.map(({ orden, ...f }, i) => ({ ...f, id: `f${i}` }));
  return cache;
}
