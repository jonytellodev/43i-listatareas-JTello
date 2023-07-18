import {Form, Button, FormGroup, FormControl} from "react-bootstrap";
import ListaTareas from './ListaTareas';
import {useState} from 'react'

const FormularioTareas = () => {
  const [tarea,setTarea] = useState('');
  const [grupoTareas,setGrupoTareas] = useState([]);
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    //guardar la tarea en el array grupoTareas
    setGrupoTareas([...grupoTareas, tarea]);
    //limpiar value del input
    setTarea('');
  }

    return (
      <>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-3 d-flex" controlId="tarea">
            <FormControl 
            type="text"
            placeholder="ingrese una tarea"
            value={tarea}
            onChange={(e)=> setTarea(e.target.value)}
            className='me-2' />
            <Button
            variant="primary"
            type="submit"
            >Agregar</Button>
          </FormGroup>
        </Form>
        <ListaTareas propsGrupoTareas={grupoTareas}></ListaTareas>
      </>
    );
};
export default FormularioTareas;