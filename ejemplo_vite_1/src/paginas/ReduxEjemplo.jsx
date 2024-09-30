import { useSelector,useDispatch } from "react-redux";
import { cambiarChile,cambiarMexico,cambiarVenezuela } from "../redux/features/procedenciaSlice";
import {sumar,restar,multiplicar,dividir,resetear} from "../redux/features/CalculadoraSlice";
import {iniciarSesion} from "../redux/features/parametrosSlice";

// useSelector -> nos permite acceder a cualquiera de los valor que tengamos declarados dentro de nuestro redux.
// useDispatch -> nos permite ejecutar cualquier accion que tengamos dentro de nuestro redux.
const ReduxEjemplo = () => {
  // const pais = useSelector((state)=>state.procedencia.pais);
  const procedencia = useSelector((state)=>state.procedencia);
  const calculadora = useSelector((state)=>state.calculadora);
  const parametros = useSelector((state)=>state.parametros);
  const dispatch = useDispatch();
  return (
    <>
    <div>ReduxEjemplo</div>
    <ul>
      <li>Pais: {procedencia.pais}</li>
      <li>Ciudad: {procedencia.ciudad}</li>
    </ul>
    <button className="btn btn-danger" onClick={()=>dispatch(cambiarMexico())}>Cambiar Mexico</button>
    <hr />
    <h1>Ejemplo Redux 2 calculadora</h1>
      <ul>
        <li>Numero1:{calculadora.numero1}</li>
        <li>Numero2:{calculadora.numero2}</li>
        <li>Resultado:{calculadora.resultado}</li>
      </ul>
      <hr />
      <button className="btn btn-danger" onClick={()=>dispatch(sumar())}>Sumar</button>
      <hr />
      <button className="btn btn-danger" onClick={()=>dispatch(restar())}>Restar</button>
      <hr />
      <button className="btn btn-danger" onClick={()=>dispatch(multiplicar())}>Multiplicar</button>
      <hr />
      <button className="btn btn-danger" onClick={()=>dispatch(dividir())}>Dividir</button>
      <hr />
      <button className="btn btn-danger" onClick={()=>dispatch(resetear())}>Resetear</button>

    <hr />
    <h1>Ejemplo Redux 3 iniciar sesión</h1>
    <ul>
      <li>Nombre: {parametros.nombre}</li>
      <li>Perfil ID: {parametros.perfil_id}</li>
      <li>Perfil: {parametros.perfil}</li>
    </ul>
    <hr />
    <button className="btn btn-primary" onClick={()=>{dispatch(iniciarSesion({
      nombre:"walter pacherrez",perfil_id:4,perfil:"Administrador"
    }))}}>Iniciar sesion</button>
    </>


  )
}

export default ReduxEjemplo