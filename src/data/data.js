const products = [{
    id: "Msm123",
    name: "Pantalon de vestir",
    description: "Diseñado para gusto y comodidad de las mujeres oficinistas, que requieren dar un toque de elegancia a su look y así generar un plus a su estilo",
    price: 400,
    stock: 10,
    image: "/img/Pantalon-dama-vestir.png",
    category: "pantalones",
  },
  {
    id: "Msm124",
    name: "Pantalon SweatyRocks",
    description: "Pantalón de estilo semiformal, ideal para cualquier época del año, te dotará de magnetismo, elegancia y confort.",
    price: 420,
    stock: 4,
    image: "/img/pantalon-SweatyRocks.png",
    category: "pantalones",
  },
  {
    id: "Msm125",
    name: "Pantalon WDIRARA",
    description: "Pantalón ideal para cualquier ocasión desde un fin de semana casual, la oficina, vacaciones, fiestas o el uso diario, siente la comodidad y la elegancia",
    price: 720,
    stock: 5,
    image: "/img/pantalon-WDIRARA.png",
    category: "pantalones",
  },
  {
    id: "Msm126",
    name: "Pantalon Seasum",
    description: "Despierta la sensualidad que hay en ti, licras diseñadas para que luzcas una figura sexy, con comodidad al mismo tiempo, ideal para salidas nocturnas. Excelente relación calidad – precio",
    price: 620,
    stock: 17,
    image: "/img/Pantalon-Seasum.png",
    category: "pantalones",
  },
  {
    id: "Msm127",
    name: "Remera Topways",
    description: "Libera a la mujer sensual que vive en ti, dale rienda suelta a tu estilo y marca la diferencia, combina esta camiseta con cualquier otra prenda y marca tendencia.",
    price: 800,
    stock: 2,
    image: "/img/remera-Topways.png",
    category: "remeras",
  },
  {
    id: "Msm128",
    name: "Remera MIHOLL",
    description: "Camiseta estilo informal, cuello redondo, manga larga abombada de encaje estilo raglán, tejida, lisa, holgada",
    price: 820,
    stock: 6,
    image: "/img/camiseta-MIHOLL.png",
    category: "remeras",
  },
  {
    id: "Msm129",
    name: "Remera AUTOMET",
    description: "La camiseta de moda para mujer se puede usar tanto en casa como al aire libre. Trajes de trabajo de negocios. Túnica holgada para mujer.",
    price: 980,
    stock: 4,
    image: "/img/remera-AUTOMET.png",
    category: "remeras",
  },

  {
    id: "Msm130",
    name: "Saco Coco",
    description: "Adecuado para llevarlo durante todo el año, para mantener el estilo de buen gusto; este cárdigan ligero es esencial para tu armario",
    price: 1200,
    stock: 2,
    image: "/img/saco-coco.png",
    category: "sacos",
  },

  {
    id: "Msm131",
    name: "Saco Minefree",
    description: "Esta cálida y acogedora chaqueta con botón es imprescindible para la temporada. Ideal para uso diario informal. Tallas grandes disponibles.",
    price: 1500,
    stock: 3,
    image: "/img/saco-Minefree.png",
    category: "sacos",
  },


]

//Obtener productos
const getProducts = () => {
  return new Promise((resolve, reject) => {
    //Simulamos un retraso de red
    setTimeout( ()=>{
      resolve(products)
    }, 1000 )
  })
}

export { getProducts }