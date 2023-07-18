import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({propsGrupoTareas}) => {

  return (
    <ListGroup>
      {
        propsGrupoTareas.map(()=><ItemTarea></ItemTarea>)        
      }
      
    </ListGroup>
  );
};

export default ListaTareas;
