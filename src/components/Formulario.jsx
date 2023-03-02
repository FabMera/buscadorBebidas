import React, { useState } from "react";
import { Button, Col, Form, Row,Alert } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";
import useCategorias from "../hooks/useCategorias";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({ nombre: "", categoria: "" });
  const [alerta,setAlerta] = useState('')
  const { categorias } = useCategorias();
  const {consultarBebida} = useBebidas();

  const handleSubmit = e =>{
    e.preventDefault()
    if(Object.values(busqueda).includes('')){
        setAlerta('Todos los campos son obligatorios')
        return
    }
    setAlerta('')
    consultarBebida(busqueda)
  }
  return (
    <Form onSubmit={handleSubmit}>
    {alerta && <Alert variant="danger">{alerta}</Alert>}
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
          </Form.Group>
          <Form.Control
            type="text"
            placeholder="Tequila,Vodka,etc.."
            name="nombre"
            value={busqueda.nombre}
            onChange={(e) =>
              setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
            }
            id="nombre"
          />
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="categoria">Nombre Bebida</Form.Label>

            <Form.Select
              id="categoria"
              name="categoria"
              value={busqueda.categoria}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>-- Selecciona Categoria --</option>
              {categorias.map((cat) => (
                <option key={cat.strCategory} value={cat.strCategory}>
                  {cat.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button variant="danger" className="text-uppercase w-100 mt-3 mb-3" type="submit">
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
