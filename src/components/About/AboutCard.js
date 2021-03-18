import React from "react";
import Card from "react-bootstrap/Card";
import {Col, Row } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center"}}>
            I have around 5 years experience working in <span className="purple"> web development </span> including 2 years in digital marketing <span className="purple"> (Social media, Digital Design and SEO).</span>
            <br/><br/>
            <Row>
              <Col md={{ span: 10, offset:1}}>I specialize in the following:</Col>
            </Row>
            <Row>
              <Col md={{ span: 10, offset:2}}>
                <ul>
                  <li className="about-activity">
                    <i className="far fa-hand-point-right"></i> Wordpress website development
                  </li>
                  <li className="about-activity">
                    <i className="far fa-hand-point-right"></i> Wireframe design
                  </li>
                  <li className="about-activity">
                    <i className="far fa-hand-point-right"></i> Project Front-end revamping
                  </li>
                  <li className="about-activity">
                    <i className="far fa-hand-point-right"></i> Logo and Brochure design
                  </li>
                  <li className="about-activity">
                    <i className="far fa-hand-point-right"></i> Part-time hire as front-end developer
                  </li>
                </ul> 
              </Col>
            </Row>                       
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
