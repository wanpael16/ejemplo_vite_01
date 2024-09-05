import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import parse from 'html-react-parser';

function App() {
  const ejemplo = `<h1>Titulo desde JSX</h1>`;
  const ejemplo2 = `<h1 className="clase_azul">Titulo desde JSX</h1>`;

  return (
    <>
      <h2 className="clase_rojo">hola mundo </h2>
      <div
        className="clase_azul"
        dangerouslySetInnerHTML={{ __html: ejemplo }}
      ></div>
        <hr />
      {parse(ejemplo2)}

    </>
  );
}

export default App;
