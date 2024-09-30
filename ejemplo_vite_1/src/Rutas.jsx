import { BrowserRouter,Routes, Route } from "react-router-dom"
import { Home } from "./paginas/Home"
import { SobreNosotros } from "./paginas/SobreNosotros"
import Error404 from "./paginas/Error404"


// BrowserRouter -> Contenedor de nuestras rutas
// Routes -> inicializador de las rutas
// Route -> rutas

export default function Rutas() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre-nosotros" element={<SobreNosotros/>} />
                <Route path="*" element={<Error404/>} />
            </Routes>
        
        </BrowserRouter>
    </>
  )
}
