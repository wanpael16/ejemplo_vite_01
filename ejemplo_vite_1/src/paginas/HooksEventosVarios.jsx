import { Link } from "react-router-dom"

const HooksEventosVarios = () => {

    const mover =()=>{
        console.log('se movio');
    }
    const salir =()=>{
        console.log('salimos');
    }
  return (
    <>
          <nav arua-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/hooks">Hooks</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Eventos varios</li>
                </ol>
            </nav>
            <hr />
            <h3>Evento varios</h3>
            <hr />
             <img src="/vite.svg" alt="" onMouseMove={mover} onMouseOut={salir}/>
    </>
  )
}

export default HooksEventosVarios