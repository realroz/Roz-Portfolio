import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoTerminalOutline } from "react-icons/io5";
import {
  SiVisualstudiocode,
  SiSlack,
  SiUbuntu,
  SiMacos,
  SiMui,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoTerminalOutline />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
    </Row>
  );
}

export default Toolstack;
