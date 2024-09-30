import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom";
const HooksuseNavigation = () => {
    const navigate= useNavigate(); //declaramos la variable para poder usarla.
  return (
    <>
        <nav arua-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/hooks">Hooks</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Use naviagtion</li>
        </ol>
        </nav>
        <hr />
        <h3>Use naviagtion</h3>

        <button onClick={()=>{navigate("/sobre-nosotros")}}> Ir a sobre nostrosos</button>
        <button onClick={()=>{navigate(-1)}}> Ir atràs</button>
    </>
  )
}

export default HooksuseNavigation