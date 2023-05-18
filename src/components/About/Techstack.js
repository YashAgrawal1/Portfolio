import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h6 >
          <strong className="purple">C++</strong>
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6 >
          <strong className="purple">Javascript</strong>
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6 >
          <strong className="purple">Node Js</strong>
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6 >
          <strong className="purple">React Js</strong>
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6 >
          <strong className="purple">MongoDB</strong>
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h6 >
          <strong className="purple">Next.js</strong>
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6 >
          <strong className="purple">Git</strong>
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h6 >
          <strong className="purple">Firebase</strong>
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6 >
          <strong className="purple">Python</strong>
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <h6 >
          <strong className="purple">Pytorch</strong>
        </h6>
      </Col>
    </Row>
  );
}

export default Techstack;
