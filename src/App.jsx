import "./App";
import { SaludoProps } from "./components/EjconProps.jsx";
import { EjemploCJSX, EjemploFuncional, EjemploS } from "./components/Ejemplos.jsx";

function App() {
  return (
    <>
      <EjemploS />
      <EjemploCJSX />
      <EjemploFuncional />
      <SaludoProps
      nombre= "Magui" 
      />
    </>
  );
}

export default App;
