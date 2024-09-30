import { Link, useLocation} from "react-router-dom"
const HooksuseLocation = () => {
    const location = useLocation(); //declaramos la variable para poder usarla.
    console.log(location);
    
  return (
   <>
        <nav arua-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">useLocation</li>
            </ol>
        </nav>
        <hr />
        <h3>useLocation</h3>

        <p>{location.pathname}</p>	
   </>
  )
}

export default HooksuseLocation