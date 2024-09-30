import { Link } from "react-router-dom"
import {useRef, useState} from "react"
const HooksuseRef = () => {
    const [texto, setTexto] = useState('');
	const inputRef = useRef();
	const colorRef = useRef(null); // puede inicializarse o no.
	const imprimirValor = () =>{
		setTexto(inputRef.current.value); // con "inputRef.current.value" obtenemos los valores del input.
	}
	const cambiarColor= () =>{
		colorRef.current.className="clase_azul"; // con "colorRef.current.className" podemos cambiar la clase.
	}
  return (
    <> 
        <nav arua-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">useRef</li>
            </ol>
        </nav>
        <hr />
        <h3>useRef</h3>

        <input type="text" className="form-control" ref={inputRef} />
        <hr/>
        <button className="btn btn-primary" onClick={imprimirValor}>Mostrar</button>
        <hr/>
        <div className="clase_rojo" ref={colorRef}>
            {texto}
        </div>
        <hr/>
        <button className="btn btn-primary" onClick={cambiarColor}>Cambiae color</button>

        </>
  )
}

export default HooksuseRef