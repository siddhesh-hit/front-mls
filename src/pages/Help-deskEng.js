import React from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import HeaderEng from "../Components/Common/HeaderEng";
import FooterEng from "../Components/Common/FooterEng";

const HelpDeskEng = () => {
  return (
    <div className="help-deskpage">
      <HeaderEng />
      <section>
        <Container>
          <div
            className="container-fluid justify-content-center "
            style={{ paddingTop: "20%" }}
          >
            <div
              className="about-head text-center"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                color: "#2C21A4",
              }}
            >
              Help Desk
              <hr
                style={{
                  width: "20%",
                  border: "none",
                  height: "5px",
                  background: "linear-gradient(to right, green, yellow)",
                  opacity: "1",
                }}
              />
            </div>
            <div className="box1 p-4">
              <Row className="m-2">
                <Col style={{ fontSize: "20px" }}>
                  <b>Send Your Query here, our executue will help you</b>
                </Col>
              </Row>
              <Row className="p-2">
                <Col className=" lg={3} md={6} sm={12} xs={12} box1 p-2 m-3">
                  
                    <Form.Control
                      placeholder="Your Full Name"
                      aria-label="Your Full Name"
                      aria-describedby="basic-addon1"
                    />
                  
                </Col>
                <Col className=" lg={3} md={6} sm={12} xs={12} box1 p-2 m-3">
                  
                    <Form.Control
                      placeholder="Your Email-id"
                      aria-label="Your Email-id"
                      aria-describedby="basic-addon1"
                    />
                 
                </Col>
              </Row>
              <Row className="p-2">
                <Col className="lg={3} md={6} sm={12} xs={12} box1  p-2 m-3">
                 
                    <Form.Control
                      placeholder="Your Phone Number"
                      aria-label="Your Phone Number"
                      aria-describedby="basic-addon1"
                    />
                 
                </Col>
                <Col className=" lg={3} md={6} sm={12} xs={12} box1  p-2 m-3">
                  
                    <Form.Control
                      placeholder="Your Address"
                      aria-label=" Your Addres"
                      aria-describedby="basic-addon1"
                    />
                 
                </Col>
              </Row>
              <Row
                className="lg={6} md={6} sm={12} xs={12} box1 p-2 m-3 mb-1"
                style={{ height: "max-content" }}
              >
               
                  <Form.Control
                    placeholder="Enter your message Here..."
                    aria-label="Enter your message Here..."
                    aria-describedby="basic-addon1"
                  />
                
              </Row>
              <Row className="p-2 m-3">
                <Button
                  className="p-2"
                  style={{
                    backgroundColor: "#000088",
                    width: "max-content",
                    marginTop: "3%",
                    left: "2px",
                  }}
                >
                  <a href="#" style={{ fontSize: "14px", color: "white" }}>
                    Submit Message {"  "}
                    <span style={{ marginRight: "20px" }}></span>
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </Button>
              </Row>
            </div>
            <div className="box1 p-4 mt-5">
              <Row>
                <b>Contact Details</b>
              </Row>
              <Row>
                <Col style={{ fontWeight: "500", lineHeight: "30px" }}>
                  Legislature Telephone Number :
                  <a href="tel:022-22027399">022-2202 73 99</a> /
                  <a href="tel:022-22026354">2202 63 54</a>
                </Col>
              </Row>
              <Row>
                <Col style={{ fontWeight: "500", lineHeight: "30px" }}>
                  Fax Number : <a href="tel:022-22024524">022-2202 45 24</a> /
                  <a href="tel:022-22820820">2282 08 20</a>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      <FooterEng />
    </div>
  );
};
export default HelpDeskEng;
