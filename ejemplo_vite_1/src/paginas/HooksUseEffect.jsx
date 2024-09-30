import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

const HooksUseEffect = () => {

    const [arreglo, setArreglo] = useState([])
    const [marcador, setMarcador] = useState(false)

    useEffect(() => {
      
        return ()=>{
            setArreglo([
                {
                    id:1,
                    nombre:"andres",
                    correo: "andres@gmail.com"
                },
                {
                    id:2,
                    nombre:"luis",
                    correo: "luis@gmail.com"
                },
                {
                    id:3,
                    nombre:"junior",
                    correo: "junior@gmail.com"
                }
            ]);
        }
        
    },[marcador])

    let mostrarArreglo =(valor)=>{
        setMarcador(!valor)
    }
    
  return (
   <>
           <nav arua-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/hooks">Hooks</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Use effect</li>
                </ol>
            </nav>
            <hr />
            <h3>UseEffect</h3>

            <button className="btn btn-primary" onClick={()=>mostrarArreglo(marcador)}>mostrar|ocultar</button>

            {marcador ==true && (
            <> 
                <hr />
                <ul>
                    {arreglo.map((arreglo)=>(
                        <li key={arreglo.id}>{arreglo.nombre}<br/>{arreglo.correo}</li>
                    ))}
                </ul> 
            </>
            )}
           
   </>
  )
}

export default HooksUseEffect