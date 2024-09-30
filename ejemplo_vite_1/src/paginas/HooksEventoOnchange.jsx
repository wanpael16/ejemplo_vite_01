import { useState } from "react"
import { Link } from "react-router-dom"

const HooksEventoOnchange = () => {

    const [nombre, setNombre] = useState('');
    const handleFormulario=()=>{
        console.log(nombre)
    }

  return (
    <>
            <nav arua-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/hooks">Hooks</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Evento Onchange</li>
                </ol>
            </nav>
            <hr />
            <h3>Evento change</h3>
            <p>
            {/* e.target.value-> obtiene los valores de un campo de un formulario asociado a useState */}
         
                <input type="text" value={nombre} className="form-control" onChange={(e)=>setNombre(e.target.value)} placeholder="Nombre:" />
            </p>
            <button className="btn btn-warning" onClick={handleFormulario}><i className="fas fa-edit"></i>Enviar</button>
    </>
  )
}

export default HooksEventoOnchange