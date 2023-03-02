import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const Bebida = ({ item }) => {
  const { handleModalClick, handleBebidaIdClick } = useBebidas();
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={item.strDrinkThumb}
          alt={`Imagen de ${item.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{item.strDrink}</Card.Title>
          <Button
            onClick={() => {
              handleModalClick();
              handleBebidaIdClick(item.idDrink)
            }}
            className="w-100 text-uppercase mt-2"
            variant="warning"
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
