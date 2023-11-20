import React from "react";
import LegislativeA from "../assets/about/_MG_5345 (3) 1.jpg";
import Header from "../Components/Common/Header";
import partiwise from "../assets/about/image 239.jpg";
import PoliticalGrp from "../assets/about/assembly.png";
import profession from "../assets/about/biograph- profession.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import member1 from "../assets/member/rahulnarvekar.png";
import member2 from "../assets/member/narharisir.png";
import member3 from "../assets/member/eknath-shinde.jpeg";
import member4 from "../assets/member/vijay.png";
import { Container } from "react-bootstrap";
import Footer from "../Components/Common/Footer";
const LegislativeAssembly = () => {
  return (
    <>
      <div>
        <Header />
        <section>
          <div
            className="container-fluid justify-content-center "
            style={{ paddingTop: "16%" }}
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
              विधानसभा
              <hr
                style={{
                  width: "30%",
                  border: "none",
                  height: "5px",
                  background: "linear-gradient(to right, green, yellow)",
                  opacity: "1",
                }}
              />
              <div>
                <img
                  src={LegislativeA}
                  alt=" "
                  style={{ width: "100%", padding: "2%" }}
                />
              </div>
            </div>
            <div className="section-info justify-content-end ">
              <p style={{ padding: "2%" }}>
                महाराष्ट्र विधानसभा, ज्याला विधानसभा म्हणून ओळखले जाते, हे
                राज्याच्या द्विसदनीय विधानसभेचे कनिष्ठ सभागृह आहे. जानेवारी 2022
                मधील माझ्या शेवटच्या माहितीनुसार, त्यात 288 थेट निवडून आलेल्या
                सदस्यांचा समावेश होता, ज्यांना विधानसभेचे सदस्य (आमदार) म्हणून
                ओळखले जाते, जे राज्यभरातील विविध मतदारसंघांचे प्रतिनिधित्व
                करतात. विधानसभेची महाराष्ट्रातील विधिमंडळ प्रक्रियेत महत्त्वाची
                भूमिका असते, कारण मसुदा तयार करणे, वादविवाद करणे आणि संमत करणे
                यासाठी हे प्राथमिक सभागृह जबाबदार आहे. विधानसभेतील आमदारांना
                महाराष्ट्रातील जनता दर पाच वर्षांनी होणाऱ्या सार्वत्रिक
                निवडणुकीद्वारे निवडून देते. बहुसंख्य जागा असलेला पक्ष किंवा युती
                सामान्यत: सरकार बनवते आणि त्याचा नेता मुख्यमंत्री बनतो. हे घर
                आहे जेथे प्रमुख धोरणात्मक निर्णय आणि अर्थसंकल्पीय बाबींवर चर्चा
                आणि निर्णय घेतला जातो. महाराष्ट्रातील लोकशाही प्रक्रियेचा एक
                अत्यावश्यक भाग बनवून, राज्याच्या कारभाराला आकार देण्यात ती
                महत्त्वाची भूमिका बजावते. सर्वात वर्तमान आणि विशिष्ट माहितीसाठी,
                कृपया नवीनतम अधिकृत स्त्रोतांचा संदर्भ घ्या, कारण माझ्या
                शेवटच्या अद्यतनानंतर विधानसभेची रचना आणि रचना कदाचित बदलली असेल.
              </p>
            </div>
            {/* <section>
              <Container
                fluid
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Row className="col-lg-11 mb-4 filter-Council ">
                  <Col className="col-lg-4 col1 " style={{ marginRight: "5%" }}>
                    <Col
                      style={{
                        backgroundColor: "#CE5D3D",
                        color: "white",
                        lineHeight: "40px",
                      }}
                    >
                      Legislative Assembly
                    </Col>
                    <Col className="col1-fields p-1">
                      <span>
                        Legislative Assembly
                        <i
                          className="fa fa-chevron-right p-2 "
                          style={{ marginLeft: "25%" }}
                        ></i>
                      </span>
                    </Col>
                    <Col className="col1-fields p-1">
                      Legislative Assembly{" "}
                      <i
                        className="fa fa-chevron-right p-2 "
                        style={{ marginLeft: "25%" }}
                      ></i>
                    </Col>{" "}
                    <Col className="col1-fields p-1">
                      Legislative Assembly{" "}
                      <i
                        className="fa fa-chevron-right p-2 "
                        style={{ marginLeft: "25%" }}
                      ></i>
                    </Col>{" "}
                    <Col className="col1-fields p-1">
                      Legislative Assembly{" "}
                      <i
                        className="fa fa-chevron-right p-2 "
                        style={{ marginLeft: "25%" }}
                      ></i>
                    </Col>{" "}
                    <Col className="col1-fields p-1">
                      Legislative Assembly{" "}
                      <i
                        className="fa fa-chevron-right p-2 "
                        style={{ marginLeft: "25%" }}
                      ></i>
                    </Col>{" "}
                    <Col className="col1-fields p-1">
                      Legislative Assembly{" "}
                      <i
                        className="fa fa-chevron-right p-2 "
                        style={{ marginLeft: "25%" }}
                      ></i>
                    </Col>{" "}
                    <Col className="col1-fields p-1">
                      Legislative Assembly{" "}
                      <i
                        className="fa fa-chevron-right p-2 "
                        style={{ marginLeft: "25%" }}
                      ></i>
                    </Col>{" "}
                    <Col className="col1-fields p-1">
                      Legislative Assembly{" "}
                      <i
                        className="fa fa-chevron-right p-2 "
                        style={{ marginLeft: "25%" }}
                      ></i>
                    </Col>{" "}
                    <Col className="col1-fields p-1">
                      Legislative Assembly{" "}
                      <i
                        className="fa fa-chevron-right p-2 "
                        style={{ marginLeft: "25%" }}
                      ></i>
                    </Col>{" "}
                    <Col className="col1-fields p-1">
                      Legislative Assembly{" "}
                      <i
                        className="fa fa-chevron-right p-2 "
                        style={{ marginLeft: "25%" }}
                      ></i>
                    </Col>{" "}
                    <Col className="col1-fields p-1">
                      Legislative Assembly{" "}
                      <i
                        className="fa fa-chevron-right p-2 "
                        style={{ marginLeft: "25%" }}
                      ></i>
                    </Col>{" "}
                    <Col className="col1-fields p-1">
                      Legislative Assembly{" "}
                      <i
                        className="fa fa-chevron-right p-2 "
                        style={{ marginLeft: "25%" }}
                      ></i>
                    </Col>{" "}
                    <Col className="col1-fields p-1">
                      Legislative Assembly{" "}
                      <i
                        className="fa fa-chevron-right p-2 "
                        style={{ marginLeft: "25%" }}
                      ></i>
                    </Col>
                  </Col>

                  <Col className="col-lg-7 col2">
                    <Col
                      className="col-head"
                      style={{
                        backgroundColor: "#2C6747",
                        lineHeight: "40px",
                        color: "white",
                      }}
                    >
                      Committee on Privileges (Legislative Council / Assembly)
                    </Col>
                    <Col className="fields-pdf m-3 p-2">Lrem</Col>
                    <Col className="fields-pdf m-3 p-2">Lrem</Col>
                    <Col className="fields-pdf m-3 p-2">Lrem</Col>
                    <Col className="fields-pdf m-3 p-2">Lrem</Col>
                    <Col className="fields-pdf m-3 p-2">Lrem</Col>
                    <Col className="fields-pdf m-3 p-2">Lrem</Col>
                    <Col className="fields-pdf m-3 p-2">Lrem</Col>
                  </Col>
                </Row>
              </Container>
            </section> */}
            <Row className="background justify-content-center">
              <Col
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="parishad-block2 text-center "
              >
                <div className="heading"> महाराष्ट्र विधान परिषद</div>
                <Row className="mb-3 mt-5 justify-content-center">
                  <Col className="lg={6} md={6} sm={12} xs={12}  d-flex flex-column align-items-center mb-3">
                    <div className="img-boxing " style={{ width: "30%" }}>
                      <img alt="img" src={member1} style={{ width: "70%" }} />
                      <hr style={{ borderTop: "0" }} />
                      <div className="box-bottom text-center">
                        <div className="nameHead">
                          Mr. Rahul Suresh Narvekar
                        </div>
                        <div className="name-info">
                          Ma. Speaker Maharashtra Assembly
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="lg={6} md={6} sm={12} xs={12}  d-flex flex-column align-items-center mt-3 mb-4">
                    <div className="img-boxing " style={{ width: "30%" }}>
                      <img alt="img" src={member2} style={{ width: "70%" }} />
                      <hr style={{ borderTop: "0" }} />
                      <div className="box-bottom">
                        <div className="nameHead">
                          Mr. Narahari Sitaram Jhirwal
                        </div>
                        <div className="name-info">
                          Ma. Vice President Maharashtra Assembly
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-3 mt-5">
                  <Col className="lg={6} md={6} sm={12} xs={12}  d-flex flex-column align-items-center">
                    <div className="img-boxing ">
                      <img alt="img" src={member3} style={{ width: "70%" }} />
                      <hr style={{ borderTop: "0" }} />
                      <div className="box-bottom">
                        <div className="nameHead">
                          Mr. Eknath Sambhaji Shinde
                        </div>
                        <div className="name-info">
                          Ma. Leader of the House Maharashtra Assembly
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="lg={6} md={6} sm={12} xs={12}  d-flex flex-column align-items-center">
                    <div className="img-boxing">
                      <img alt="img" src={member4} style={{ width: "70%" }} />
                      <hr style={{ borderTop: "0" }} />
                      <div className="box-bottom">
                        <div className="nameHead">Mr. Vijay Vadettiwar</div>
                        <div className="name-info">
                          Ma. Leader of Opposition Maharashtra Assembly
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="lg={6} md={6} sm={12} xs={12}  d-flex flex-column align-items-center mb-5 ">
                <div
                  className="img-boxing text-center justify-content-center"
                  style={{
                    height: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    display: "flex",
                  }}
                >
                  <div className="Bio-head text-center justify-content-center">
                    चरित्रात्मक माहिती
                    <hr
                      style={{
                        width: "100%",
                        border: "none",
                        height: "5px",
                        background: "linear-gradient(to right, green, yellow)",
                        opacity: "1",
                      }}
                    />
                  </div>
                  <div>
                    <a href="#" style={{ color: "black" }}>
                      सदस्यांचे पक्षनिहाय प्रतिनिधीत्व
                    </a>
                    <img
                      src={partiwise}
                      alt="img"
                      className="mt-3 pb-4"
                      style={{ width: "65%" }}
                    />
                    <div style={{ right: "30px" }} className="mt-4">
                      Political Group
                    </div>
                    <img src={PoliticalGrp} alt="img" className="mb-4" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default LegislativeAssembly;
