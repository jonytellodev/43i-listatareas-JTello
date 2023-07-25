import { Form, Button, FormGroup, FormControl } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState("");
  let tareasLocalStorage = JSON.parse(localStorage.getItem("tareasKey")) || [];
  const [grupoTareas, setGrupoTareas] = useState(tareasLocalStorage);

  // esta version de usefect se ejecuta en montaje y actualizacion de listaTareas

  useEffect(() => {
    localStorage.setItem("tareasKey", JSON.stringify(grupoTareas))
  }, [grupoTareas]);

  // //solo para usar en montaje
  // useEffect(()=>{
  // // la logica que desee ejecutar
  // },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar la tarea en el array grupoTareas
    setGrupoTareas([...grupoTareas, tarea]);
    //limpiar value del input
    setTarea("");
  };

  // crear funcion para borrar tareas
  const borrarTarea = (tareaBorrar) => {
    let filtroGrupotareas = grupoTareas.filter(
      (itemTarea) => itemTarea !== tareaBorrar
    );
    setGrupoTareas(filtroGrupotareas);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3 d-flex" controlId="tarea">
          <FormControl
            type="text"
            placeholder="ingrese una tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            className="me-2"
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </FormGroup>
      </Form>
      <ListaTareas
        propsGrupoTareas={grupoTareas}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </>
  );
};
export default FormularioTareas;
