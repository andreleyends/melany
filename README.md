# Nuestro álbum de recuerdos

Página web hecha para Melany: bienvenida para elegir canción, reproductor flotante, línea del tiempo, galería, carta, contador de días juntos y una sorpresa al final.

**Link:** https://andreleyends.github.io/melany/

## Estructura

```
melany/
├── index.html                 Estructura de la página (portada, secciones, carta, mensaje)
├── assets/
│   ├── favicon.svg            Ícono de la pestaña
│   ├── img/                   Fotos optimizadas (NN.jpg)
│   └── music/                 Canciones (MP3, 128 kbps)
├── css/
│   ├── variables.css          Colores, fuentes y sombras
│   ├── base.css               Reset y estilos generales
│   ├── components.css         Polaroid, botón y animaciones
│   └── sections/              Un archivo por sección
│       ├── hero.css           Portada
│       ├── timeline.css       Línea del tiempo
│       ├── gallery.css        Galería y visor de fotos
│       ├── letter.css         Sobre y carta
│       ├── counter.css        Contador
│       ├── welcome.css        Pantalla de bienvenida (elegir canción)
│       ├── player.css         Reproductor flotante tipo isla
│       └── surprise.css       Mensaje secreto y corazones
└── js/
    ├── main.js                Punto de entrada: arma la página
    ├── config.js              Fecha de inicio y ruta de las fotos
    ├── data/
    │   ├── recuerdos.js       Momentos de la línea del tiempo y fotos de la galería
    │   └── canciones.js       Lista de canciones del reproductor
    └── modules/
        ├── welcome.js         Bienvenida: elegir canción para entrar
        ├── player.js          Reproductor flotante (isla)
        ├── timeline.js        Dibuja la línea del tiempo
        ├── gallery.js         Dibuja la galería
        ├── lightbox.js        Visor de fotos (teclado y swipe)
        ├── letter.js          Abre el sobre
        ├── counter.js         Contador en vivo
        ├── surprise.js        Revela el mensaje y la lluvia de corazones
        └── reveal.js          Animación al hacer scroll
```

## Cómo editar

| Quiero cambiar…                     | Archivo                        |
|-------------------------------------|--------------------------------|
| Un recuerdo o agregar uno nuevo     | `js/data/recuerdos.js`         |
| Las fotos de la galería             | `js/data/recuerdos.js` (`GALLERY`) |
| La carta o el mensaje secreto       | `index.html`                   |
| Las canciones                       | `js/data/canciones.js` + MP3 en `assets/music/` |
| La fecha del contador               | `js/config.js`                 |
| Los colores                         | `css/variables.css`            |

Para agregar una foto: guárdala en `assets/img/` con un número (por ejemplo `60.jpg`) y agrega `"60"` en `recuerdos.js`.

## Probar en local

La página usa módulos de JavaScript, así que no funciona abriendo `index.html` con doble clic. Usa un servidor local:

```bash
# Opción 1: Python
python -m http.server 8000
# luego abre http://localhost:8000

# Opción 2: VS Code → extensión "Live Server" → clic derecho en index.html → Open with Live Server
```

## Publicación

GitHub Pages publica automáticamente la rama `main` en cada `git push`.
