import {Form, Button, FormGroup, FormControl} from "react-bootstrap";
import ListaTareas from './ListaTareas';

const FormularioTareas = () => {
    return (
      <>
        <Form>
          <FormGroup className="mb-3 d-flex" controlId="tarea">
            <FormControl type="text" placeholder="ingrese una tarea" className='me-2' />
            <Button variant="primary">Agregar</Button>
          </FormGroup>
        </Form>
        <ListaTareas></ListaTareas>
      </>
    );
};
export default FormularioTareas;