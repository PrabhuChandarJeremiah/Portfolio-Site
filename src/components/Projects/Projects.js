import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import logos from "../../Assets/Projects/leaf.jpg";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.jpg";
import eeg from "../../Assets/Projects/eeg.gif";
import design from "../../Assets/Projects/design.jpg";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Collaborated with artist Abimanyu Srikanth to create web designs ideas for Korier website.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={design}
              isBlog={false}
              title="WebPage Design"
              description="Bold Colour Theme. Clean Typography. Vibrant Illustrations. All these and more were used to create a modern theme for Korier's website."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Iconography"
              description="Simple Clean 3D embossed Icons. Kohler's tracking, delivery and worldwide courier services were highlighted efficiently using this design."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logos}
              isBlog={false}
              title="Social Media Card"
              description="Striking foreground elements and a slightly dulled down map BG delivers the same bold colour scheme was used to make sure no user scrolls past withour stopping to take a look."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
