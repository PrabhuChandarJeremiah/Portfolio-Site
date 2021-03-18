
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/home-main.svg";
import homeBG from "../../Assets/black-texture.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Home2 />
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
              <Col md={{ span: 8, offset:4}}>
              <h1 style={{ paddingBottom: 2, textAlign: "justify"  }} className="heading">
                PRABHU&nbsp;<strong className="main-name">CHANDAR</strong>  
              </h1>
              </Col>
              <Col md={{ span: 8, offset:4}}>
                <div style={{  paddingBottom: 30, textAlign: "justify" }}>
                  <Type />
                </div>
              </Col>
              <Col md={{ span: 8, offset:3}}>
                <div style={{ paddingBottom: 100, textAlign: "justify"  }}>
                  A creative software developer who is
                  passionate about code and art.   <br />
                  I work extensively on   
                <i>
                  <b className="purple"> UI<span className="wave">🖌️</span>UX Design</b>
                </i>
                  &nbsp; and &nbsp;
                <i>
                  <b className="purple">Front-end Web Development.</b>
                </i>
                </div>
              </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;