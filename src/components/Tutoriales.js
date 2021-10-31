import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, ListGroup, Container, Row } from 'react-bootstrap';
import servicios from '../servicios';

const Tutoriales = ({ id, nombre, profesor, fecha }) => {  

  const eliminarTutorial = async () => {
    try {
      await servicios.deleteTutorial(id);
      alert('¡Tutorial Eliminado!')
      window.location.reload()
    }catch(error) {
      console.log(error)
      alert('¡Falló la eliminación del Tutorial!')
    }
  }

  return (
    <Container fluid>
        <Row>
            <Col>
                <ListGroup as="ol">
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">{nombre}</div>
                    {profesor}
                    </div>
                    <div className="ms-4 me-auto">
                    {fecha}
                    </div>
                    <Link to={`/editar/${id}`}>
                        <Button variant="primary">Editar</Button>
                    </Link>
                    <Button onClick={eliminarTutorial} variant="danger" style={{ marginLeft: 16 }}>Borrar</Button>
                </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </Container>
  );
};

export default Tutoriales;
