import polloAlaPlancha from "../Images/Menu-images/CacaoFood/Platos/image1.jpg";
import pescadoPlancha from "../Images/Menu-images/CacaoFood/Platos/image2.jpg";
import polloNaranja from "../Images/Menu-images/CacaoFood/Platos/image4.jpg";
import polloChampiñones from "../Images/Menu-images/CacaoFood/Platos/image5.jpg";
import terneraAsada from "../Images/Menu-images/CacaoFood/Platos/terneraAsada.jpg";
import resSalsaTomate from "../Images/Menu-images/CacaoFood/Platos/resSalsaTomate.jpg";
import resAsada from "../Images/Menu-images/CacaoFood/Platos/image6.jpg";

import purePapas from "../Images/Menu-images/CacaoFood/Ensaladas/image 8pure.jpg";
import verdurasSalteadas from "../Images/Menu-images/CacaoFood/Ensaladas/image8.jpg";
//import purePapas2 from "../Images/Menu-images/CacaoFood/image12.jpg";
import ensaladaClásica from "../Images/Menu-images/CacaoFood/Ensaladas/image8.jpg";
import ensaladaCesar from "../Images/Menu-images/CacaoFood/Ensaladas/image9.jpg";
import ensaladaGriega from "../Images/Menu-images/CacaoFood/Ensaladas/image 8griega.jpg";

import tortaLimón from "../Images/Menu-images/CacaoFood/Postres/image 9postres.jpg";
import tortaBanana from "../Images/Menu-images/CacaoFood/Postres/image 8postres.jpg";
import tortaFrutosRojosAlmendras from "../Images/Menu-images/CacaoFood/Postres/image 12postres.jpg";
import tortaZanahoria from "../Images/Menu-images/CacaoFood/Postres/image 11postres.jpg";
import tortaNaranjaCoco from "../Images/Menu-images/CacaoFood/Postres/image 10postres.jpg";

import cremaColiflor from "../Images/Menu-images/CacaoFood/Cremas/image 10cremas.jpg";
import cremaEspinaca from "../Images/Menu-images/CacaoFood/Cremas/image 11cremas.jpg";
import cremaCalabaza from "../Images/Menu-images/CacaoFood/Cremas/image 12cremas.jpg";
import cremaBrocoli from "../Images/Menu-images/CacaoFood/Cremas/image 8cremas.jpg";
import cremaZanahoria from "../Images/Menu-images/CacaoFood/Cremas/image 9cremas.jpg";

import naranjada from "../Images/Menu-images/CacaoFood/Jugos/image 10jugos.jpg";
import jugoLuloMaracuya from "../Images/Menu-images/CacaoFood/Jugos/image 11jugos.jpg";
import jugoGuanabana from "../Images/Menu-images/CacaoFood/Jugos/image 16jugos.jpg";
import jugoFresa from "../Images/Menu-images/CacaoFood/Jugos/image 17jugos.jpg";
import jugoMora from "../Images/Menu-images/CacaoFood/Jugos/image 18jugos.jpg";
import jugoMandarina from "../Images/Menu-images/CacaoFood/Jugos/image 8jugos.jpg";
import limonada from "../Images/Menu-images/CacaoFood/Jugos/image 9jugos.jpg";

const dataMenu = [
  {
    id: 1,
    name: "Verduras Salteadas",
    description:
      "Este plato saludable resalta los sabores naturales de las verduras, manteniendo su textura crujiente.Puede servirse como guarnición o como plato principal.",
    price: 3000,
    image: verdurasSalteadas,
    classification: "ensalada",
    destacados: false,
  },
  {
    id: 2,
    name: "Ensalada César",
    description:
      "La ensalada César es una clásica mezcla de lechuga romana, crotons, queso parmesano y aderezo César. Es famosa por su sabor distintivo y texturas variadas.",
    price: 3000,
    image: ensaladaCesar,
    classification: "ensalada",
    destacados: false,
  },
  {
    id: 3,
    name: "Puré de Papas",
    description:
      "Es perfecto para complementar platos de carnes, aves o pescado, y su sabor sencillo y delicioso lo convierte en un favorito en muchas mesas.",
    price: 3000,
    image: purePapas,
    classification: "ensalada",
    destacados: false,
  },
  {
    id: 4,
    name: "Ensalada Griega",
    description:
      "La ensalada griega es una fresca y sabrosa combinación de ingredientes mediterráneos. Destacada por su equilibrio de sabores y colores.",
    price: 3000,
    image: ensaladaGriega,
    classification: "ensalada",
    destacados: false,
  },
  {
    id: 5,
    name: "Ensalada Clásica",
    description:
      "El pollo a la plancha con ensalada mixta es una deliciosa opción de comida saludable y nutritiva. Este plato combina la jugosidad y el sabor del pollo a la plancha con una refrescante ensalada de vegetales variados.",
    price: 3000,
    image: ensaladaClásica,
    classification: "ensalada",
    destacados: false,
  },
  // {
  //   id: 6,
  //   name: "Ensalada de la Casa",
  //   description:
  //     "El pollo a la plancha con ensalada mixta es una deliciosa opción de comida saludable y nutritiva. Este plato combina la jugosidad y el sabor del pollo a la plancha con una refrescante ensalada de vegetales variados.",
  //   price: 3000,
  //   image: { chickenImage },
  //   classification: "ensalada",
  // },
  {
    id: 7,
    name: "Torta de Zanahorias",
    description:
      "Nuestra torta de zanahoria es una delicia esponjosa y saludable. Con su mezcla perfecta de zanahorias ralladas, nueces y especias, cada bocado te brinda una explosión de sabores naturales.",
    price: 3000,
    image: tortaZanahoria,
    classification: "postres",
    destacados: false,
  },
  {
    id: 8,
    name: "Torta de Frutos rojos y Almendras",
    description:
      "Esta torta es una exquisitez saludable. Cada bocado combina la dulzura de los frutos rojos con la textura crujiente de las almendras.",
    price: 3000,
    image: tortaFrutosRojosAlmendras,
    classification: "postres",
    destacados: true,
  },
  {
    id: 9,
    name: "Torta de Banana",
    description:
      "Su suave textura y sabor naturalmente dulce conquistaran en cada bocado. Disfruta de este postre nutritivo que combina la bondad de las bananas con un toque de esponjosidad.",
    price: 3000,
    image: tortaBanana,
    classification: "postres",
    destacados: false,
  },
  {
    id: 10,
    name: "Torta de Limón",
    description:
      "Nuestra torta de limón es una explosión refrescante de sabores, donde cada bocado te transporta a un paraíso cítrico y ligero.",
    price: 3000,
    image: tortaLimón,
    classification: "postres",
    destacados: false,
  },
  {
    id: 11,
    name: "Torta de Naranjas y Coco",
    description:
      "Esta torta te transporta a playas exóticas con su sabor refrescante y textura suave. Disfruta de este postre saludable que te hará sentir como si estuvieras en un paraíso culinario.",
    price: 3000,
    image: tortaNaranjaCoco,
    classification: "postres",
    destacados: false,
  },
  {
    id: 12,
    name: "Crema de Zanahoria",
    description:
      "Disfruta de esta opción ligera y deliciosa, cuya textura suave y sabor delicado se convierte en una explosión de nutrientes",
    price: 3000,
    image: cremaZanahoria,
    classification: "cremas",
    destacados: false,
  },
  {
    id: 13,
    name: "Crema de Coliflor",
    description:
      "Incorpora más vegetales a tu dieta con esta opción cremosa y nutritiva. Es un plato saludable y confortante que te nutrirá y satisfará.",
    price: 3000,
    image: cremaColiflor,
    classification: "cremas",
    destacados: false,
  },
  {
    id: 14,
    name: "Crema de Espinacas",
    description:
      "Sumérgete en la deliciosa suavidad de nuestra crema de espinacas. Cada cucharada te envolverá en un sabor verde y confortante, lleno de nutrientes y frescura.",
    price: 3000,
    image: cremaEspinaca,
    classification: "cremas",
    destacados: false,
  },
  {
    id: 15,
    name: "Crema de Calabaza",
    description:
      "Nuestra crema de calabaza es una explosión de sabor y confort. Con su textura suave y su sabor reconfortante, esta crema te envolverá en un abrazo cálido y nutritivo.",
    price: 3000,
    image: cremaCalabaza,
    classification: "cremas",
    destacados: false,
  },
  {
    id: 16,
    name: "Crema de Brocoli",
    description:
      "Disfruta de esta opción nutritiva y deliciosa que te brinda una dosis de verduras en cada bocado, con la delicadeza de brocoli fresco.",
    price: 3000,
    image: cremaBrocoli,
    classification: "cremas",
    destacados: true,
  },
  {
    id: 17,
    name: "Limonada",
    description:
      "Refrescante y revitalizante. Disfruta de esta bebida saludable y llena de vitamina C que te hidrata y revitalizará.",
    price: 3000,
    image: limonada,
    classification: "bebidas",
    destacados: false,
  },
  {
    id: 18,
    name: "Naranjada",
    description:
      "El jugo fresco de naranjas recién exprimidas te brinda una sensación naturalmente dulce y refrescante. Disfruta dfe esta bebida llena de vitamina C que te revitalizará en cada sorbo.",
    price: 3000,
    image: naranjada,
    classification: "bebidas",
    destacados: false,
  },
  {
    id: 19,
    name: "Jugo de Mandarina",
    description:
      "Esta bebida saludable te hidrata y revitaliza, transportándote en cada sorbo a un oasis de dulzura natural y vitamina C.",
    price: 3000,
    image: jugoMandarina,
    classification: "bebidas",
    destacados: false,
  },
  {
    id: 20,
    name: "Jugo Guanabana",
    description:
      "Esta bebida saludable te brinda un festín de antioxidantes y vitaminas, con su sabor dulce y refrescante.",
    price: 3000,
    image: jugoGuanabana,
    classification: "bebidas",
    destacados: false,
  },
  {
    id: 21,
    name: "Jugo de Fresa",
    description:
      "Esta bebida saludable que te brinda una explosión de sabor y beneficios antioxidantes, donde cada sorbo te deleitará con la intensidad y dulzura de las fresas maduras.",
    price: 3000,
    image: jugoFresa,
    classification: "bebidas",
    destacados: false,
  },
  {
    id: 22,
    name: "Jugo de Mora",
    description:
      "Nuestro jugo de mora es una sinfonia de sabores intensos y antioxidantes. Cada sorbo te sumerge en la dulzura y frescura de las moras silvestres.",
    price: 3000,
    image: jugoMora,
    classification: "bebidas",
    destacados: false,
  },
  {
    id: 23,
    name: "Jugo de Lulo y Maracuya",
    description:
      "Este delicioso jugo natural te transporta a un paraíso tropical con un equilibrio perfecto de sabores y tropicales.",
    price: 3000,
    image: jugoLuloMaracuya,
    classification: "bebidas",
    destacados: false,
  },

  {
    id: 24,
    name: "Pollo a la Plancha",
    description:
      "Nuestro pollo a la plancha es una opción saludable y deliciosa. Jugoso, tierno y cocinado a la perfección , se sirve con una exquisita combinación de hierbas frescas y especias.",
    price: 3000,
    image: polloAlaPlancha,
    classification: "platos",
    destacados: false,
  },
  {
    id: 25,
    name: "Pescado a la Plancha",
    description:
      "Nuestro pescado a la plancha es una elección fresca y nutritiva. Cocinado a la perfección, cada bocado es jugoso y lleno de sabor.",
    price: 3000,
    image: pescadoPlancha,
    classification: "platos",
    destacados: false,
  },
  {
    id: 26,
    name: "Pollo a la Naranja",
    description:
      "Nuestro pollo a la naranja es una explosión de sabores frescos y cítricos. El pollo jugosos se mezcla perfectamente con la dulzura y acidez de la naranja, creando un plato saludable y delicioso.",
    price: 3000,
    image: polloNaranja,
    classification: "platos",
    destacados: false,
  },
  {
    id: 27,
    name: "Res Asada",
    description:
      "Disfruta de cada bocado de nuestra res asada, que te transportará a la perfección de los sabores. Es una carne tierna, jugosa y llena de sabor, perfecta para una comida saludable y satisfactoria.",
    price: 3000,
    image: resAsada,
    classification: "platos",
    destacados: false,
  },
  {
    id: 28,
    name: "Pollo en Salsa de champiñones",
    description:
      "El pollo en salsa de champiñones es una combinación irresistible de tierna carne de pollo y una deliciosa salsa cremosa. Los champiñones frescos añaden un toque natural y sabroso.",
    price: 3000,
    image: polloChampiñones,
    classification: "platos",
    destacados: false,
  },
  {
    id: 29,
    name: "Ternera Asada",
    description:
      "Un plato saludable y lleno de sabor que te hará disfrutar de una experiencia gastronómica única. Su carne jugosa y tierna se complementa con una deliciosa capa dorada y crujiente.",
    price: 3000,
    image: terneraAsada,
    classification: "platos",
    destacados: false,
  },
  {
    id: 30,
    name: "Res con Salsa de tomate",
    description:
      "El jugoso y tierno filete de res se complementa perfectamente con la salsa de tomate llena de sabores naturales y frescos. Disfruta de este plato reconfortante y saludable.",
    price: 3000,
    image: resSalsaTomate,
    classification: "platos",
    destacados: true,
  },
];

export default dataMenu;
