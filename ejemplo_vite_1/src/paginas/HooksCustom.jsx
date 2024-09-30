import { Link } from "react-router-dom";
import { categorias, productos } from "./../datos/datos";
import { useState } from "react";
import useHooksPersonalizado from "../hooks/useHooksPersonalizado";
const HooksCustom = () => {
  const [categoria, setCategoria] = useState(0);
  const [verduras,setVerduras] = useHooksPersonalizado();
  const [producto, setProducto] = useState(0);
  const handleDesplegar=(valor)=>{
    setCategoria(valor);

    if(valor==0){
        setVerduras([])
    }else{
        setVerduras(productos.filter(prod=>prod.categorias_id===parseInt(valor)))
    }
  }
  return (
    <>
      <nav arua-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Custom Hook
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Custom Hook</h3>
      <div className="form-group">
        <label htmlFor="categoria">Categorías</label>
        <select value={categoria} onChange={(e)=>{handleDesplegar(e.target.value)}} id="categoria" className="form-control">
            <option value="0">Seleccione....</option>
            {categorias.map((cat,i)=>(
             <option key={cat.id} value={cat.id}>{cat.nombre}</option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="producto">Productos</label>
        <select value={producto} onChange={(e)=>{setProducto(e.target.value)}} id="producto" className="form-control">
            <option value="0">Seleccione....</option>
            {verduras.map((verdura,i)=>(
             <option key={verdura.id} value={verdura.id}>{verdura.nombre}</option>
            ))}
        </select>
      </div>
    </>
  );
};

export default HooksCustom;
