

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Basicos from './componentes/Basicos';
import ComponenteDeClase from './componentes/ComponenteDeClase';
import ComponenteFuncional from "./componentes/ComponenteFuncional";
import StyleComponent from "./componentes/StyleComponent";



function App() {
 
  return (
    <>
    {/* este es un componente que le inyectamos a otro componente */}
    <StyleComponent/>
    </>
  );
}

export default App;
