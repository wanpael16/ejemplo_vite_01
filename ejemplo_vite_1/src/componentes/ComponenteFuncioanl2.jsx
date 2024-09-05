import Pais from "./Pais";

export default function ComponenteFuncioanl2({ prop1, nombre, paises }) {
  return (
    <>
      <h3>Contenido desde el componente 2 </h3>
      <ul>
        <li>Prop1: {prop1}</li>
        <li>Nombre: {nombre}</li>
        <li>
          <ul>
            {paises.map((pais) => (
              <li key={pais.dominio}>{pais.nombre}</li>
            ))}
          </ul>
        </li>
      </ul>
      <hr />
      <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Dominio</th>
                    <th>Nombre</th>
                </tr>
            </thead>
        <tbody>

          {paises.map((pais) => (
            <Pais key={pais.id} pais={pais} />
          ))}
        </tbody>
      </table>
    </>
  );
}
