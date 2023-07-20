import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({propsGrupoTareas, borrarTarea}) => {

  return (
    <ListGroup>
      {
        propsGrupoTareas.map((tarea, index)=><ItemTarea key={index} textoTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)        
      }
      
    </ListGroup>
  );
};

export default ListaTareas;
