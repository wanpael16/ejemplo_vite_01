import { Link, useLoaderData } from "react-router-dom"
import { getCategorias } from "../servicios/ApiRestAxios"

export async function loader(){
    let datos = await getCategorias();
    return datos;
}


export const AxiosCategorias = () => {
    let datos = useLoaderData();
    console.log(datos);
    
  return (
   <>
    <nav arua-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/axios">Axios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Axios Categorias
          </li>
        </ol>
      </nav>
      <hr />
      <h3>  Axios Categorias</h3>
   </>
  )
}
