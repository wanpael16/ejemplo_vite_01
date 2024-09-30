const categorias = [
  {
    id: 1,
    nombre: "Frutas",
  },
  {
    id: 2,
    nombre: "Verduras",
  },
];

const productos = [
  {
    id: 1,
    categorias_id: 1,
    nombre: "Manzana",
    precio: 1000,
  },
  {
    id: 2,
    categorias_id: 1,
    nombre: "Uvas",
    precio: 123,
  },
  {
    id: 3,
    categorias_id: 1,
    nombre: "Duraznos",
    precio: 245,
  },
  {
    id: 4,
    categorias_id: 2,
    nombre: "Papas",
    precio: 790,
  },
  {
    id: 5,
    categorias_id: 2,
    nombre: "Lechuga",
    precio: 1200,
  },
  {
    id: 6,
    categorias_id: 2,
    nombre: "Repollo",
    precio: 1800,
  },
  {
    id: 7,
    categorias_id: 2,
    nombre: "Pimentón",
    precio: 840,
  },
  {
    id: 8,
    categorias_id: 1,
    nombre: "Limón",
    precio: 1120,
  },
  {
    id: 9,
    categorias_id: 2,
    nombre: "Repollo",
    precio: 345,
  },
];

const paises = [
  {
    id: 1,
    nombre: "Peru",
    dominio: "pe",
  },
  {
    id: 2,
    nombre: "Chile",
    dominio: "cl",
  },
  {
    id: 3,
    nombre: "Bolivia",
    dominio: "bo",
  },
  {
    id: 4,
    nombre: "Argentina",
    dominio: "ar",
  },
];

const categorias_productos = [
  {
    id: 1,
    nombre: "Abarrotes",
  },
  {
    id: 2,
    nombre: "Láteos",
  },
  {
    id: 3,
    nombre: "Carnes",
  },
  {
    id: 4,
    nombre: "Licores",
  },
  {
    id: 5,
    nombre: "Perfumeria",
  },
];

const atributos = [
    {
      id: 1,
      nombre: "Perecible",
    },
    {
      id: 2,
      nombre: "Armable",
    },
    {
      id: 3,
      nombre: "Frágil",
    },
    {
      id: 4,
      nombre: "Multiuso",
    },
    {
      id: 5,
      nombre: "Edición limitada",
    },
  ];

  
export { productos };
export { categorias_productos };
export { atributos };
export { categorias };
export { paises };
