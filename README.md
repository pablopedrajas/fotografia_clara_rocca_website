# Clara Rocca — web de fotografía

Web de una sola página para captar clientes. La portada es una hoja de contactos con tiras de película: el cursor funciona como una lupa y las fotos elegidas aparecen marcadas con lápiz graso rojo.

Hecha con [Astro](https://astro.build), sin dependencias en el navegador. Las tipografías (Bodoni Moda, Hanken Grotesk y Doto) se sirven desde la propia web, sin llamar a Google Fonts.

## Añadir o cambiar fotos

1. Copia las fotos (JPG, PNG, WebP o AVIF, a la mayor resolución que tengas) en `src/fotos/`.
2. Describe cada una en `src/fotos/fotos.json`:

```json
{
  "nombre-del-archivo.jpg": {
    "alt": "Retrato en blanco y negro de una mujer junto a una ventana",
    "categoria": "Retrato",
    "lado": "detras",
    "seleccionada": true,
    "orden": 1
  }
}
```

| Campo | Para qué sirve |
| --- | --- |
| `alt` | Descripción de la foto para lectores de pantalla y Google |
| `categoria` | Agrupa las fotos en los filtros de «Trabajo» |
| `lado` | `detras` si la hizo Clara, `delante` si posa Clara. Alimenta el comparador de «Los dos lados» |
| `seleccionada` | La marca con lápiz rojo en la portada |
| `orden` | Posición en la hoja de contactos y en la galería |

Astro genera automáticamente versiones WebP a varios tamaños, así que no hace falta reducir las fotos antes.

## Datos de contacto y textos

Todo está en `src/config/sitio.ts`. Lo que se deje vacío no aparece en la web: sin email, por ejemplo, no se muestra la sección de contacto ni el botón «Reservar sesión».

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Publicación

Vercel detecta Astro sin configuración: importa el repositorio y despliega.
