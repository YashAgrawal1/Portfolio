import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/capstone_literature_survey.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Capston() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "350px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Literature Survey
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.6 : 1.7 } />
          </Document>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={2} scale={width > 786 ? 1.6 : 1.7 } />
          </Document>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={3} scale={width > 786 ? 1.6 : 1.7 } />
          </Document>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={4} scale={width > 786 ? 1.6 : 1.7 } />
          </Document>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={5} scale={width > 786 ? 1.6 : 1.7 } />
          </Document>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={6} scale={width > 786 ? 1.6 : 1.7 } />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default Capston;
