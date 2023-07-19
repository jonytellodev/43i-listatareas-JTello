import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({propsGrupoTareas}) => {

  return (
    <ListGroup>
      {
        propsGrupoTareas.map((tarea, index)=><ItemTarea key={index}></ItemTarea>)        
      }
      
    </ListGroup>
  );
};

export default ListaTareas;
