import { useParams } from "react-router-dom"

// useParams:permite recibir los parametros que vienen a travez de la url
const RutasPath = () => {

    const {id,slug} = useParams();

  return (
    <>
        <h2>Ejemplo parametros path</h2>
        <ul>
            <li>ID:{id}</li>
            <li>Slug: {slug}</li>
        </ul>
    </>
  )
}

export default RutasPath