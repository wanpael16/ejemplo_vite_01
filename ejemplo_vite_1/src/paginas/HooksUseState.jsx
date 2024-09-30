import { useState } from "react"
import { Link } from "react-router-dom"


const HooksUseState = () => {
 const [contador,setContador] = useState(0);

 const handleIncrementar= () =>{
    setContador(contador+1);
 }

 const handleDecrementar= () =>{
    if(contador !==0){
        setContador(contador-1);
    }
   
 }
    return (
        <>
            <nav arua-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/hooks">Hooks</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">UseState</li>
                </ol>
            </nav>
            <hr />
            <h3>UseState</h3>
            <button className="btn btn-info" onClick={()=>handleIncrementar()}><i className="fas fa-plus"></i> Incrementar</button>
            <br />
            <button className="btn btn-warning" onClick={()=>handleDecrementar()}><i className="fas fa-plus"></i> Decrementar</button>
            <hr />
            <p>Contador: {contador}</p>
        </>
      )
}

export default HooksUseState