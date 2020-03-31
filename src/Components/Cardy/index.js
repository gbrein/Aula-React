import React from "react";
import { Card } from "react-bootstrap";

export const Cardy = props => {
  console.log(props.cor);
  return (
    <Card style={{ backgroundColor:props.cor, width: "18rem" }}>
      <Card.Img variant="top" src="/logo512.png" />
      <Card.Body>
        <Card.Title>{props.textoExemplo}</Card.Title>
        <Card.Text>Exemplo de conteudo</Card.Text>
      </Card.Body>
    </Card>
  );
};
