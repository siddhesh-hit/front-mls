import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";

const HelpDesk = () => {
  return (
    <div className="help-deskpage" style={{ overflow: "hidden" }}>
      <Header />
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
              मदत कक्ष
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
                  <b>
                    तुमची क्वेरी येथे पाठवा, आमचे कार्यकारी तुम्हाला मदत करतील
                  </b>
                </Col>
              </Row>
              <Row className="p-2">
                <Col className=" lg={3} md={6} sm={12} xs={12} box1 p-2 m-3">

                    <Form.Control
                      placeholder="तुमचे पुर्ण नाव"
                      aria-label="तुमचे पुर्ण नाव"
                      aria-describedby="basic-addon1"
                    />
                 
                </Col>
                <Col className=" lg={3} md={6} sm={12} xs={12} box1 p-2 m-3">
                  
                    <Form.Control
                      placeholder="तुमचा ईमेल पत्ता"
                      aria-label="तुमचा ईमेल पत्ता"
                      aria-describedby="basic-addon1"
                    />
               
                </Col>
              </Row>
              <Row className="p-2">
                <Col className="lg={3} md={6} sm={12} xs={12} box1  p-2 m-3">
                 
                    <Form.Control
                      placeholder="तुझा दूरध्वनी क्रमांक"
                      aria-label="तुझा दूरध्वनी क्रमांक"
                      aria-describedby="basic-addon1"
                    />
                 
                </Col>
                <Col className=" lg={3} md={6} sm={12} xs={12} box1  p-2 m-3">
                  
                    <Form.Control
                      placeholder="तुमचा पत्ता"
                      aria-label="तुमचा पत्ता"
                      aria-describedby="basic-addon1"
                    />
                 
                </Col>
              </Row>
              <Row
                className="lg={6} md={6} sm={12} xs={12} box1 p-2 m-3 mb-1"
                style={{ height: "max-content" }}
              >
                
                  <Form.Control
                    placeholder="तुमचा संदेश येथे प्रविष्ट करा..."
                    aria-label="तुमचा संदेश येथे प्रविष्ट करा..."
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
                    संदेश सबमिट करा {"  "}
                    <span style={{ marginRight: "20px" }}></span>
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </Button>
              </Row>
            </div>
            <div className="box1 p-4 mt-5">
              <Row>
                <b>संपर्काची माहिती</b>
              </Row>
              <Row>
                <Col style={{ fontWeight: "500", lineHeight: "30px" }}>
                  विधानमंडळ दूरध्वनी क्रमांक :
                  <a href="tel:०२२-२२०२ ७३ ९९">०२२-२२०२ ७३ ९९</a> /
                  <a href="tel:२२०२ ६३ ५४">२२०२ ६३ ५४</a>
                </Col>
              </Row>
              <Row>
                <Col style={{ fontWeight: "500", lineHeight: "30px" }}>
                  फॅक्स क्रमांक :{" "}
                  <a href="tel:०२२-२२०२ ४५ २४">०२२-२२०२ ४५ २४</a> /
                  <a href="tel:२२८२ ०८ २०">२२८२ ०८ २०</a>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      
      <Footer />
    </div>
  );
};
export default HelpDesk;
