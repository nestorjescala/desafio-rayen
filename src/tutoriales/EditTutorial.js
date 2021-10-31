import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import servicios from '../servicios';

const EditTutorial = ({match: { params }}) => {
  const history = useHistory();

  const id = params.id;
  const [nombre, setNombre] = useState('');
  const [profesor, setProfesor] = useState('');
  const [materia, setMateria] = useState('');
  const [fecha, setFecha] = useState('');

  const cargaTutorial = async () => {
    try {
      const resp = await servicios.editTutorial(id);
      const tutorial = resp.data;      
      setNombre(tutorial.nombre);
      setProfesor(tutorial.profesor);
      setMateria(tutorial.materia);
      setFecha(tutorial.fecha);
    }catch(error) {
      alert('Falló al obtener el Tutorial.')
    }
  }

  useEffect(() => {
    cargaTutorial()
  }, []);


  const handleSumbit = async () => {
    try {
      if(!nombre || !profesor || !materia || !fecha) {
        alert('¡Todos los campos son requeridos!');
        return;
      }
      const tutorial = {
        nombre,
        profesor,
        materia,
        fecha
      };
      const resp = await servicios.updateTutorial(id,tutorial);
      console.log(resp.data);
      alert('¡Tutorial actualizado exitosamente!');
      history.replace('/');
    }catch(error) {
      console.log(error);
      alert('¡Actualización fallída!');
    }
  }

  if(!nombre || !profesor || !materia || !fecha) {
    return (
      <Container>
        <Row>
          <Col>
            <p>Cargando...</p>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <Container style={{ padding: 16 }}>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Nombre del Tutorial</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre"
                onChange={e => setNombre(e.target.value)}
                value={nombre}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Profesor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el profesor"
                onChange={e => setProfesor(e.target.value)}
                value={profesor}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Materia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la materia"
                onChange={e => setMateria(e.target.value)}
                value={materia}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la fecha"
                onChange={e => setFecha(e.target.value)}
                value={fecha}
              />
            </Form.Group>
            <br/>
            <Form.Group>
              <Button
                variant="primary"
                onClick={handleSumbit}
              >
                Editar
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditTutorial;
