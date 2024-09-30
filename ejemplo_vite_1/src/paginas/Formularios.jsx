import { Link } from "react-router-dom"

const Formularios = () => {
  return (
    <>
        <h1>Formularios</h1>
        <ul>
            <li>
                <Link to="/formularios/formulario-simple">Formulario simple</Link>
            </li>
            <li>
                <Link to="/formularios/formulario-useactiondata">Formulario useActionData</Link>
            </li>
        </ul>
    </>
  )
}

export default Formularios