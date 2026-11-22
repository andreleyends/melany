// ==========================================================
// Contenido del álbum
// Para agregar un recuerdo: copia un bloque { ... }, cambia
// la fecha, el título, el texto y los números de foto.
// Las fotos van en assets/img con nombre NN.jpg.
// ==========================================================

/**
 * Momentos de la línea del tiempo, en orden.
 * featured: true → se muestra destacado en el centro.
 * dividerBefore → texto pequeño que aparece justo antes.
 */
export const MOMENTS = [
  {
    date: "8 de agosto",
    title: "La noche de las risas",
    text: "Entre música, brindis y frío, apoyaste tu cabeza en mi hombro y algo dentro de mí supo que esto iba en serio.",
    photos: ["00", "01", "03"],
  },
  {
    date: "26 de agosto",
    title: "Entre rosas y amigos",
    text: "Selfies torpes, rosas de fondo y yo sin poder dejar de mirarte.",
    photos: ["04", "06"],
  },
  {
    date: "29 de agosto",
    title: "Noches que no quería que terminen",
    text: "De esas noches en las que el tiempo pasa volando y uno solo quiere cinco minutitos más.",
    photos: ["07"],
  },
  {
    date: "8 de septiembre",
    title: "Brillitos en la cara",
    text: "Me llenaste de brillos y yo me dejé, porque contigo hasta lo más loco se siente bonito.",
    photos: ["08", "10"],
  },
  {
    date: "12 de septiembre",
    title: "Nuestra tarde de cine",
    text: "Pasamos toda la tarde en el cine. En plena salida me llamó mi mamá porque no tenía permiso para salir… pero igual me escapé, porque valía la pena cada minuto a tu lado.",
    photos: ["11", "12"],
  },
  {
    date: "16 de septiembre",
    title: "Caminando de noche",
    text: "Calles iluminadas, tu mano en la mía y la sensación de que algo grande estaba por pasar.",
    photos: ["14", "15"],
  },
  {
    featured: true,
    dividerBefore: "y entonces llegó el día…",
    date: "20 de septiembre de 2026",
    title: "El día que empezó lo nuestro",
    text: "Te quedaste dormida en el camino, subimos entre montañas y piedras antiguas, con el sol encima y el corazón a mil. Ese día dejamos de ser tú y yo para ser nosotros.",
    photos: ["16", "18", "20", "44", "28", "45"],
  },
  {
    date: "22 de septiembre",
    title: "Llegó Molly",
    text: "Dos días después de ser novios, la familia creció: se incorporó Molly, nuestra gatita. Chiquita, curiosa y la más consentida de los tres.",
    photos: ["47", "48"],
  },
  {
    date: "10 de octubre",
    title: "La ciudad a nuestros pies",
    text: "Las luces de la ciudad allá abajo y tú en mis brazos. No necesitaba nada más.",
    photos: ["51", "52", "50"],
  },
  {
    date: "31 de octubre",
    title: "Halloween juntos",
    text: "Pintados, disfrazados y riéndonos de todo. Hasta disfrazada eres la más linda.",
    photos: ["54"],
  },
  {
    date: "8 de noviembre",
    title: "Café entre estrellas",
    text: "Un café rodeados de cielos pintados, aunque la obra de arte más bonita estaba sentada frente a mí.",
    photos: ["55", "58"],
  },
  {
    date: "15 de noviembre",
    title: "Y seguimos sumando",
    text: "Cada día contigo es una página nueva para este álbum.",
    photos: ["59"],
  },
];

/** Fotos de la galería completa, en orden. */
export const GALLERY = [
  "00", "01", "03", "04", "06", "07", "08", "10", "11", "12",
  "14", "15", "16", "17", "18", "19", "20", "22", "24", "25",
  "27", "28", "29", "32", "33", "34", "35", "39", "40", "44",
  "45", "47", "48", "49", "50", "51", "52", "54", "55", "56",
  "58", "59",
];
