import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Chat from "../Chat";


function FooterBottom() {
  return (
    <div id="footer-bottom" className="pt-3 pb-3 d-flex">
      <Container>
        <Row>
          <Col md={6}>
            <span>© Copyright 2021 by Multitel</span>
          </Col>

          <Col md={6}>
            <ul className="footer_menu mb-0">
              <li>
                <a href="#">Site map</a>
              </li>
              <li>
                <a href="#">Suggestions</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#top_header text-center"  >
                  <img src="/assets/images/up-arrow.png" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      { <a href="chat">
        {/* <img className="chaticon"   style={{height:100 ,width:100}}  src="/assets/images/chat.png" /> */}
              < Chat/>
      </a> }
    

    </div>
  );
}

export default FooterBottom;
