import { useState } from "react";
import { Link } from "react-router-dom"
import Swal from "sweetalert2";

const FormularioSimple = () => {
    const [nombre, setNombre] = useState('');
    const handleSubmit = (e) =>{
      e.preventDefault();
    //   console.log("el nombre es:" + nombre);
    Swal.fire({
        icon:'success',
        title: 'ok',
        text:`el nombre es: ${nombre}`,
        // html:
    });
      
    }

  return (
    <>
    <nav arua-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Formulario simple
          </li>
        </ol>
      </nav>
      <hr />
      <h3> Formulario simple</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" className="form-control" value={nombre} onChange={(e)=>{
            setNombre(e.target.value)
          }} />
        </div>
        <hr />
        <button className="btn btn-warning">Enviar</button>
      </form>
    </>
  )
}

export default FormularioSimple