import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import Row from "react-bootstrap/Row";
import aboutimg from "../assets/about/_MG_5358 3.jpg";
import aboutimg2 from "../assets/about/_MG_5358 2 (1).jpg";
import aboutimg3 from "../assets/about/_MG_5358 4.jpg";
import { Container ,Button} from "react-bootstrap";
import homevidhan from "../assets/_MG_5418 1.jpg";
const HomePage = () => {
  let currentSlide = 0;
  const galleryItems = document.querySelectorAll(".gallery-item");

  function showSlide(index) {
    galleryItems.forEach((item, i) => {
      if (i === index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  }

  function nextSlide() {
    if (currentSlide < galleryItems.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  }

  showSlide(currentSlide);
  return (
    <>
      <div>
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
                }}
              >
                विधानमंडळ
                <hr
                  style={{
                    width: "20%",
                    border: "none",
                    height: "5px",
                    opacity: "1",
                    marginTop: "0",
                    marginBottom: "15px",
                    background: "linear-gradient(to right, green, yellow)",
                    opacity: "1",
                  }}
                />
              </div>
              <Row className="justify-content-center mt-3">
                <div className="col-lg-6 text-center mt-2">
                  <img src={aboutimg} alt=" " className="image1" />
                </div>
                <div className="col-lg-6 ">
                  <div className="section-headtop mb-3">प्रास्ताविक</div>
                  <hr
                    style={{
                      width: "20%",
                      border: "none",
                      height: "5px",
                      opacity: "1",
                      marginTop: "0",
                      marginBottom: "15px",
                      background: "linear-gradient(to right, green, yellow)",
                      opacity: "1",
                    }}
                  />
                  <div className="about-info">
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आह.
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.े
                  </div>
                  {/* <div className="mt-3">
                    <a href="#">
                      <b style={{ fontSize: "15px", color: "blue" }}>
                        अधिक वाचा{" "}
                      </b>
                      <i
                        className="fa-solid fa-chevrons-right"
                        style={{ color: " #e11305" }}
                      ></i>
                    </a>
                  </div> */}
                  <Button
                    variant="primary"
                    className="pdf-btn mt-3"
                    style={{
                      width: "25%",
                      backgroundColor: "blue",
                      borderRadius: "5px",
                      fontFamily: "Popins",
                    }}
                  >
                    View PDF <i className="fa fa-eye"></i>
                  </Button>
                </div>
              </Row>
              <hr
                className="mt-5"
                style={{
                  border: "none",
                  height: "1px",
                  backgroundColor: "#000000",
                  opacity: "1",
                  marginTop: "0",
                  marginBottom: "15px",
                }}
              />
              <Row className="justify-content-center mt-5 mb-3">
                <div className="col-lg-6  mt-2">
                  <div className="section-headtop mb-3">प्रागैतिहासिक</div>
                  <div className="about-info">
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आह.
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.े
                  </div>
                  {/* <div className="mt-3">
                    <a href="#">
                      <b style={{ fontSize: "15px", color: "blue" }}>
                        अधिक वाचा{" "}
                      </b>
                      <i
                        className="fa-solid fa-chevrons-right"
                        style={{ color: " #e11305" }}
                      ></i>
                    </a>
                  </div> */}
                  <Button
                    variant="primary"
                    className="pdf-btn mt-3"
                    style={{
                      width: "25%",
                      backgroundColor: "blue",
                      borderRadius: "5px",
                    }}
                  >
                    View PDF <i className="fa fa-eye"></i>
                  </Button>
                </div>
                <div className="col-lg-6 ">
                  <img src={aboutimg2} alt=" " className="image1" />
                </div>
              </Row>
              <hr
                className="mt-5"
                style={{
                  border: "none",
                  height: "1px",
                  marginTop: "0",
                  marginBottom: "15px",
                  backgroundColor: "#000000",
                }}
              />
              <Row className="justify-content-center mt-5">
                <div className="col-lg-6 text-center mt-2">
                  <img src={aboutimg3} alt=" " className="image1" />
                </div>
                <div className="col-lg-6 ">
                  <div className="section-headtop mb-3">
                    विधान परिषद मार्गदर्शक
                  </div>
                  <div className="about-info">
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आह.
                    महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या
                    महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.े
                  </div>
                  {/* <div className="mt-3">
                    <a href="#">
                      <b style={{ fontSize: "15px", color: "blue" }}>
                        अधिक वाचा{" "}
                      </b>
                      <i
                        className="fa-solid fa-chevrons-right"
                        style={{ color: " #e11305" }}
                      ></i>
                    </a>
                  </div> */}
                  <Button
                    variant="primary"
                    className="pdf-btn mt-3"
                    style={{
                      width: "25%",
                      backgroundColor: "blue",
                      borderRadius: "5px",
                    }}
                  >
                    View PDF <i className="fa fa-eye"></i>
                  </Button>
                </div>
              </Row>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default HomePage;
