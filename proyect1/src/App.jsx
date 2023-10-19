import "./App.jsx";
import { SaludoProps } from "./components/EjconProps";
import { EjemploCJSX, EjemploFuncional, EjemploS } from "./components/Ejemplos";

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
