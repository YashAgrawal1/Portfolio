import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h6 >
          <strong className="purple">Linux</strong>
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6 >
          <strong className="purple">Visualstudiocode</strong>
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6 >
          <strong className="purple">Postman</strong>
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h6 >
          <strong className="purple">Heroku</strong>
        </h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
