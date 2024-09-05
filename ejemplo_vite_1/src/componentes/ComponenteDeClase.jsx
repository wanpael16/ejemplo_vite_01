import React from "react";

export default class componenteDeClase extends React.Component
{

    constructor(props)
    {
        console.log("El componente aun no esta montado");
        super();
        this.state={
            contador:0,
            nombre:"juan"
        }
    }

    componentDidMount(){
        console.log("El componente ya se encuentra en el DOM");

        this.setState({
            contador: this.state.contador+ 1
        });
    }

    componentWillUnmount(){
        console.log("El componente ha sido eliminado del DOM");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("El estado o las props del componente han cambiado");
    }

    render(){
        console.log("El componente se dibuja en el dom");
        return(
            <>
            <h1>Hola de componente de clase</h1>
            <p>Contador = {this.state.contador}</p>
            </>
        )
    }
    
}