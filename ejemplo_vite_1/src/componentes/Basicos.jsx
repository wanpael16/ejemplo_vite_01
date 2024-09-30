import {
  formatearFecha,
  formatearNumero,
  acortarTexto,
} from "./../helpers/helpers";

function Basicos() {
  let fecha = new Date();
  let cantidad = 36545;
  let texto =
    "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).";
  const edad = 18;
  const numero = 112;
  let paises = [
    {
      nombre: "Peru",
      dominio: "pe",
    },
    {
      nombre: "Chile",
      dominio: "cl",
    },
    {
      nombre: "Bolivia",
      dominio: "bo",
    },
    {
      nombre: "Argentina",
      dominio: "ar",
    },
  ];
  return (
    <>
      <h1>Renderizado condicional</h1>

      {edad >= 18 && (
        <>
          La persona es mayor de edad. <hr />
        </>
      )}

      <hr />
      {edad >= 18 ? (
        <>
          La persona es mayor de edad. <hr />
        </>
      ) : (
        <>
          La persona no es mayor de edad. <hr />
        </>
      )}


      <h1>Renderizado switch case</h1>
      {(() => {
        switch (numero) {
          case 12:
            return <div>el numero es 12</div>;
            break;

          default:
            return (
              <div>no coincide con lo que esta guardado en la variable</div>
            );
            break;
        }
      })()}

   
      <hr />
      <h1>Ejmplos de Loop</h1>
      <h3>Loop normal con es6</h3>

      <ul>
        {[...Array(11)].map((x, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <h3>Inline if</h3>

      <ul>
        {(function (rows, i, len) {
          while (++i <= len) {
            rows.push(<li key={i}>{i}</li>);
          }
          return rows;
        })([], 0, 10)}
      </ul>
      <h3>Con Es2012 syntax y Array methods</h3>

      <h3>ciclo for sencillo</h3>

      {(() => {
        let rows = [];
        for (let i = 1; i <= 10; i++) {
          rows.push(<li key={i}>{i}</li>);
        }

        return rows;
      })()}
      <hr />

      <h1>Recorrer elementos con map</h1>
      <ul>
        {paises.map((pais, i) => (
          <li key={pais.dominio}>
            {i} - {pais.nombre} (Eldominio es: {pais.dominio})
          </li>
        ))}
      </ul>

      <hr />

      <h1>Helpers personalizados</h1>
      <ul>
        <li>Fehca: {formatearFecha(fecha)} </li>
        <li>Cantidad: {`USD${formatearNumero(cantidad)}`}</li>
        <li>Texto: {acortarTexto(texto, 0, 30)}...</li>
      </ul>
    </>
  );
}

export default Basicos;
