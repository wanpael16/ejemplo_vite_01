import { Link, Form } from "react-router-dom";
import Swal from "sweetalert2";
import { atributos, categorias_productos } from "../datos/datos";
import { useState } from "react";

export async function action({ request }) {
  //siempre los action deebn retornar algo, si no la aplicacion se rompe.
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
//   console.log(formData);
  
//Recibir checkbox dinámico.
let arreglo=[];
let mensajeArreglo= "";
atributos.map((atributo,i)=>{
    if (formData.get("Atributo_"+atributo.id )!=null) {
        arreglo[i] =atributo.id;
        mensajeArreglo=mensajeArreglo+ atributo.nombre+","
    }
});

  return Swal.fire({
    icon: "success",
    title: "ok",
    text: `El nombre es ${formData.get("nombre")} | Nombre: ${datos} | Peligroso : ${formData.get('peligroso')} | Atributos: ${JSON.stringify(arreglo)}`,
  });
}

const FormularioUseActionData = () => {
    const [peligroso, setPeligroso] = useState(false);
    const handlePeligroso = () =>{
        setPeligroso(!peligroso);
    }
  return (
    <>
      <nav arua-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Formulario useActionData
          </li>
        </ol>
      </nav>
      <hr />
      <h3> Formulario useActionData</h3>

      <Form method="POST">
        <div className="form-group">
          <label htmlFor="categoria">Categorías</label>
          <select name="categoria" id="categoria" className="form-control">
            <option value="0">Seleccione....</option>
            {categorias_productos.map((categoria, i) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio</label>
          <input
            type="number"
            id="precio"
            name="precio"
            className="form-control"
            placeholder="Precio"
          />
        </div>
        <div className="form-control">
          <label htmlFor="destacado"><strong>Destacado</strong></label>
         <div className="form-check">
            <input type="radio" name="destacado"  value="si" id="destacado1" className="form-check-input" />
            <label htmlFor="destacado1">Sí</label>
         </div>
         <div className="form-check">
            <input type="radio" name="destacado"  value="no" id="destacado2" className="form-check-input" />
            <label htmlFor="destacado2">No</label>
         </div>
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="descripcion">Descripcion</label>
          <textarea
            id="descripcion"
            name="descripcion"
            className="form-control"
            placeholder="Descripcion"></textarea>
        </div>   
        <hr />
        <div className="form-group">
          <label htmlFor="peligroso">Peligroso</label>
          <div className="form-check">
            <input type="checkbox" name="peligroso"  id="peligroso" className="form-check-input" value={peligroso} onChange={handlePeligroso}/>
            <label htmlFor="peligroso">Peligroso</label>
             </div>
        </div>  
        <hr />
        <div className="form-group">
          <label htmlFor="atributos">Atributos</label>
            {atributos.map((atributo)=>(
                <div key={atributo.id} className="form-check">
                <input type="checkbox" name={`atributo_${atributo.id}`}  id={`atributo_${atributo.id}`} className="form-check-input"/>
                <label htmlFor="peligroso">{atributo.nombre}</label>
            </div>
            ))}
        </div>
        <hr />
        <button className="btn btn-warning">Enviar</button>
      </Form>
    </>
  );
};

export default FormularioUseActionData;
