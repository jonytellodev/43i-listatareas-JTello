import { Container } from "react-bootstrap";
import "./App.css";
import FormularioTareas from "./components/FormularioTareas";

function App() {
  return (
    <>
      <Container className="mt-4">
        <h1 className="container-fluid text-center tituloCustom mainPage">
          Lista de Tareas
        </h1>
        <hr className="customHr" />
        <FormularioTareas></FormularioTareas>
      </Container>
      <footer className="text-center bg-white py-3">
        <p>&copy;2023 - JonyTelloDEV - Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
