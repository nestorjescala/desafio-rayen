import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import servicios from '../servicios';

const AddTutorial = () => {
  const history = useHistory();
  const [nombre, setNombre] = useState('');
  const [profesor, setProfesor] = useState('');
  const [materia, setMateria] = useState('');
  const [fecha, setFecha] = useState('');

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
      const resp = await servicios.addTutorial(tutorial);
      console.log(resp);
      alert('¡Tutorial actualizado exitosamente!');
      history.replace('/');
    }catch(error) {
      console.log(error);
      alert('¡Carga fallída!');
    }
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
                type="date"
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
                Agregar
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTutorial;
