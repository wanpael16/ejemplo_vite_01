import ComponenteFuncioanl2 from "./ComponenteFuncioanl2";
import Numero from "./Numero";
import ChildrenComponent from "./ChildrenComponent";

export default function ComponenteFuncional() {
  let nombre = "Andres Pacherrez Elias";
  let numero = 12;
  let paises = [
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
  return (
    <>
      <h1>Hola desde componente funcional</h1>
      <ComponenteFuncioanl2 prop1="manzana" nombre={nombre} paises={paises} />
      <hr />

      {(numero==12)?(
        <Numero numero={numero}/>
      ):(
        <div>no es 12</div>
      )}

      {/* {(numero== 12) && <Numero numero={numero}/>} */}

      <hr />

      <ChildrenComponent otro="más contenido">
        <p className="clase_rojo">contenido desde el children</p>
      </ChildrenComponent>

    </>
  );
}
