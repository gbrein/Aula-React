import React, { useState, useEffect } from "react";
import { Cardy, Botao } from "../../Components";
import { Row, Container } from "react-bootstrap";

const Perfil = () => {
  const [cor, setCor] = useState("#6A6452");
  const [text, setText] = useState("");
  const changeColor = () => {
    setCor("#" + Math.floor(Math.random() * 16777215).toString(16));
  };

  useEffect(()=> {
    setText("#" + Math.floor(Math.random() * 16777215).toString(16))
  },[cor])

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Cardy cor={cor} />
      </Row>
      <Row>
          <label>{text}</label>
      </Row>
      <Row className="justify-content-md-center">
        <Botao changeColor={changeColor} />
      </Row>
    </Container>
  );
};

export default Perfil;
