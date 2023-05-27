import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Certificatecard";
import Particle from "../Particle";
import ms1 from "../../Assets/Cetificates/ms1.png"
import ms2 from "../../Assets/Cetificates/ms2.png"
import cloud from "../../Assets/Cetificates/Cloud computing.jpg"
import oracle from "../../Assets/Cetificates/Oracle_certificate-1.png"
import matlab from "../../Assets/Cetificates/matlab_Onram_certificate-1.png"
import i1 from "../../Assets/Cetificates/i1.png"
import i2 from "../../Assets/Cetificates/Internship-Certificate2.png"
import i3 from "../../Assets/Cetificates/persistent_internship3.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Course Certificates that I've completed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ms1}
              isBlog={false}
              title="Azure AI Fundamentals"
              description=""
              ghLink={ms1}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ms2}
              isBlog={false}
              title="Azure Data Fundamentals"
              description=""
              ghLink={ms2}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="NPTEL Cloud Computing"
              description=""
              ghLink={cloud}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oracle}
              isBlog={false}
              title="Oracle Cloud"
              description=""
              ghLink={oracle}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matlab}
              isBlog={false}
              title="Matlab Onram"
              description=""
              ghLink={matlab}
            />
          </Col>

        </Row>

        <p style={{ color: "white" }}>
          Here are a few internship Certificates that I've completed.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={i1}
              isBlog={false}
              title="Android Developer Intern"
              description="Comapny Name: Codekul Gurukul of Coders"
              ghLink={i1}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={i2}
              isBlog={false}
              title="Node Js Intern"
              description="Comapny Name: Celebel Technologies"
              ghLink={i2}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={i3}
              isBlog={false}
              title="Martian Intern"
              description="Comapny Name: Persistent Systems"
              ghLink={i3}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
