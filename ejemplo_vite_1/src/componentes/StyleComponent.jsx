
import {Titulo, Circulo, Caja} from './../styled/Estilos';



export default function StyleComponent() {
  return (
   <>
    <Titulo>Style Component</Titulo>
    <hr />
    <Circulo>Circulo</Circulo>

    <Caja type='text' defaultValue="@Cesar_cz" placeholder='Texto' color_custom="black"/>
   </>
  )
}
