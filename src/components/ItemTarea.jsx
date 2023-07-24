import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({ textoTarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between mt-3 bg-">
      {textoTarea}{" "}
      <Button variant="danger" onClick={() => borrarTarea(textoTarea)}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
