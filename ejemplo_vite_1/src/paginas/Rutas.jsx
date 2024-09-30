import { NavLink, Link } from "react-router-dom";

const Rutas = () => {
    let id=12;
    let slug= "lo-que-sea";
  return (
    <>
      <h1>Rutas</h1>

      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <Link to='/sobre-nosotros'>Sobre Nosotros</Link>
        </li>
        <li>
          <Link to='/rutas/path/1/hola-mundo'>Parámetros path estatico</Link>
        </li>
        <li>
          <Link to={`/rutas/path/${id}/${slug}`}>Parámetros path dinamico</Link>
        </li>
        <li>
          <Link to={`/rutas/query-string?id=${id}&slug=${slug}`}>Parámetros query string</Link>
        </li>
      </ul>
    </>
  );
};

export default Rutas;
