import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import ProductCard from '../components/atoms/ProductCard';
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";

function NetworkEquipments() {
  return (
    <LandingPage>
      <ServiceBanner title="Network Equipments" />

      <section id="deserve">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <p className="mb-2 mt-4">Have a look on</p>
              <h2 className="mb-3">Our Network Equipments</h2>
              <div className="broadband_services my-5">
                  <ProductCard />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="tv_services" className="mb-4">
        <Container>
          <Row>
          <Col md={2}></Col>
          <Col md={8} style={{color: "white", textAlign:"center"}}>
            <b><h2>We Deliver The Best Networking Equipments</h2></b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus beatae aliquid asperiores harum suscipit. Necessitatibus, est itaque</p>
            <Button variant="outline-secondary" style={{backgroundColor: "white", color: "#0076B5"}}>Browse Router</Button>
          </Col>
          </Row>
          <Col md={2}></Col>
        </Container>
      </section>
    </LandingPage>
  )
}

export default NetworkEquipments