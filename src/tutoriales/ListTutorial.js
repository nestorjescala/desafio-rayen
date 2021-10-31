import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import servicios from '../servicios';
import Tutoriales from '../components/Tutoriales';

const ListTutorial = () => {

  const [tutoriales, setTutoriales] = useState(null)

  const [filtro, setFiltro] = useState(null)

  const obtenerTutoriales = async () => {
    try {
      const resp = await servicios.getAllTutoriales()
      setTutoriales(resp.data)
    }catch (error) {
      alert('Falló la obtención de tutoriales!')      
    }
  }

  const filtrarTutoriales = async (filtro) => {
    try {
      const resp = await servicios.filterTutoriales(filtro)
      setTutoriales(resp.data)
    }catch (error) {
      alert('Falló el filtro de tutoriales!')      
    }
  }

  useEffect(() => {
    obtenerTutoriales()
    filtrarTutoriales(filtro)
  }, [filtro])

  if(!tutoriales) {
    return (
      <Container>
        <Col>
          <p>Cargando...</p>
        </Col>
      </Container>
    )
  }

  return (
    <Container style={{ padding : 16 }}>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <Form.Control type="buscador" onChange={e => setFiltro(e.target.value)} placeholder="Inserte parametro para filtrar" />
        </Col>
        </Row>
        <br/>
        <Row className="justify-content-md-center">
        <Col xs={6}>
        <Form.Select>
          <option>Seleccione Orden</option>
          <option>Titulo</option>
          <option>Fecha</option>
        </Form.Select>
        </Col>
      </Row>
      <br/>
      <Row>
        {tutoriales.map(tutorial => (
          <Tutoriales
            key={tutorial.id}
            id={tutorial.id}            
            nombre={tutorial.nombre}
            profesor={tutorial.profesor}            
            materia={tutorial.materia}
            fecha={tutorial.fecha}
          />
        ))}
      </Row>
      <br/>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          <Button variant="danger">Eliminar Todo</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ListTutorial;
