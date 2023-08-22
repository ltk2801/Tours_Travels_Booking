import React from "react";
import "./aboutSection.css";

import { Container, Row, Col } from "reactstrap";

const About = ({ title }) => {
  return (
    <section className="about__section">
      <Container>
        <Row>
          <Col lg="12">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
