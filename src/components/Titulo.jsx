import { useState } from "react";
import { Button } from "react-bootstrap";

const Titulo = ({ nuevoTitulo }) => {
  const [inicial, setInicial] = useState("nuevo programa");

  const cambiarEstado = () => {
    setInicial("Este es mi nuevo valor");
  };
  return (
    <section className="d-flex flex-column justify-content-center">
      <h1 className="text-center"> {nuevoTitulo}</h1>
      <h2 className="text-center">{inicial}</h2>
      <Button
        variant="primary"
        /*onClick={cambiarEstado}*/ onClick={cambiarEstado}
      >
        Cambiar Estado
      </Button>
    </section>
  );
};

export default Titulo;
