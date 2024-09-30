import { Link, useLoaderData } from "react-router-dom"
import { paises } from "../datos/datos";
export function loader(){
    const country = paises;
    return country;
}

const HooksuseLoaderData = () => {
    const country = useLoaderData();
    console.log(country);
    
  return (
    <>
     <nav arua-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/hooks">Hooks</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Use loader data</li>
                </ol>
            </nav>
            <hr />
            <h3>Use loader data</h3>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Dominio</th>
                    </tr>
                </thead>
            <tbody>
                {country.map((country)=>(
                    <tr key={country.id}>
                        <td>{country.id}</td>
                        <td>{country.nombre}</td>
                        <td>{country.dominio}</td>
                    </tr>
                ))}
            </tbody>
            </table>
    </>
  )
}

export default HooksuseLoaderData