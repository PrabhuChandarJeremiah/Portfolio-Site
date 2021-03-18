import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

var phantom = {
  display: 'block',
  width: '100%',
}

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer sticky">
      <div style={phantom} />
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed & Developed by Prabhu Chandar</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} PC</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/PrabhuChandarJeremiah"
                style={{ color: "white" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:prabhuchandargs@gmail.com"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faEnvelope}/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/prabhu-chandar/"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/prabhusquarepants/"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
