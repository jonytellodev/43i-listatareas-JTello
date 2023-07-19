import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({textoTarea}) => {
  return <ListGroup.Item className="d-flex justify-content-between mt-3 bg-">{textoTarea} <Button variant="danger">Borrar</Button></ListGroup.Item>;
};

export default ItemTarea;
