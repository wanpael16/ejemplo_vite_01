import { Link } from "react-router-dom"

const HooksEventoClick = () => {

    const handlePresioname =()=>{
        alert("hola");
    }

    const presionameConPrametro=(nombre)=>
    {
        console.log("tu nombres es: "+ nombre);
        
    }

  return (
    <>
        <nav arua-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Evento</li>
            </ol>
        </nav>
        <hr />
        <h3>Click</h3>
        <button className="btn btn-danger" onClick={handlePresioname}><i className="fas fa-hand-point-up"></i>Click</button>
        <hr />
        <button className="btn btn-primary" onClick={()=>handlePresioname()}><i className="fas fa-hand-point-up"></i>click con funcion de flecha</button>
        <hr />
        <button className="btn btn-warning" onClick={()=>presionameConPrametro("Andres")}><i className="fas fa-hand-point-up"></i>click con funcion de flecha</button>
    </>
  )
}

export default HooksEventoClick