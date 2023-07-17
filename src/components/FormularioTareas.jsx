import {Form, Button, FormGroup, FormControl} from "react-bootstrap";
import ListaTareas from './ListaTareas';
import {useState} from 'react'

const FormularioTareas = () => {
  const [tarea,setTarea] = useState('');
  const [grupoTareas,setGrupoTareas] = useState([]);
  
    return (
      <>
        <Form>
          <FormGroup className="mb-3 d-flex" controlId="tarea">
            <FormControl 
            type="text"
            placeholder="ingrese una tarea"
            value={tarea}
            onChange={(e)=> setTarea(e.target.value)}
            className='me-2' />
            <Button variant="primary">Agregar</Button>
          </FormGroup>
        </Form>
        <ListaTareas></ListaTareas>
      </>
    );
};
export default FormularioTareas;