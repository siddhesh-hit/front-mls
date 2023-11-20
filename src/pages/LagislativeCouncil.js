import React from "react";
import LegislativeC from "../assets/about/_MG_5358 1 (1).jpg";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import partiwise from "../assets/about/biograph- party.jpg";
import member1 from "../assets/member/nilammore.png";
import member2 from "../assets/member/dfadanvis.png";
import member3 from "../assets/member/danve.png";
import councilgraph from "../assets/about/COUNCIL.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
const LegislativeCouncil = () => {
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
              विधान परिषद
              <hr
                style={{
                  width: "30%",
                  border: "none",
                  height: "5px",
                  background: "linear-gradient(to right, green, yellow)",
                  opacity: "1",
                  marginTop: "0",
                  marginBottom: "15px",
                }}
              />
              <div>
                <img
                  src={LegislativeC}
                  alt=" "
                  style={{ width: "100%", padding: "2%" }}
                />
              </div>
            </div>
            <div className="section-info justify-content-end ">
              <p style={{ padding: "2%" }}>
                महाराष्ट्र विधिमंडळाला देशात आगळी-वेगळी अशी प्रतिष्ठा लाभली आहे.
                अनेकविध क्षेत्रांत देशपातळीवर नेतृत्व देणारे नेते या विधिमंडळाने
                राष्ट्राला दिले आहेत. या नेत्यांनी संसदीय लोकशाही आणि सत्तेच्या
                विकेंद्रीकरणाद्वारा सबळ प्रशासनाचा वस्तुपाठ इतरांना घालून दिला
                आहे आणि त्यायोगे अनेक उत्तम परंपरा, संकेत ब आदर्श निर्माण केले
                आहेत. भूतपूर्व मुंबई प्रांताच्या लेजिस्लेटिव्ह कौन्सिलची
                (Council of the Governor of Bombay) पहिली बैठक दिनांक २२
                जानेवारी १८६२ रोजी.महाराष्ट्र विधिमंडळाला देशात आगळी-वेगळी अशी
                प्रतिष्ठा लाभली आहे. अनेकविध क्षेत्रांत देशपातळीवर नेतृत्व
                देणारे नेते या विधिमंडळाने राष्ट्राला दिले आहेत. या नेत्यांनी
                संसदीय लोकशाही आणि सत्तेच्या विकेंद्रीकरणाद्वारा सबळ प्रशासनाचा
                वस्तुपाठ इतरांना घालून दिला आहे आणि त्यायोगे अनेक उत्तम परंपरा,
                संकेत ब आदर्श निर्माण केले आहेत. भूतपूर्व मुंबई प्रांताच्या
                लेजिस्लेटिव्ह कौन्सिलची (Council of the Governor of Bombay)
                पहिली बैठक दिनांक २२ जानेवारी १८६२ रोजी. महाराष्ट्र विधिमंडळाला
                देशात आगळी-वेगळी अशी प्रतिष्ठा लाभली आहे. अनेकविध क्षेत्रांत
                देशपातळीवर नेतृत्व देणारे नेते या विधिमंडळाने राष्ट्राला दिले
                आहेत. या नेत्यांनी संसदीय लोकशाही आणि सत्तेच्या
                विकेंद्रीकरणाद्वारा सबळ प्रशासनाचा वस्तुपाठ इतरांना घालून दिला
                आहे आणि त्यायोगे अनेक उत्तम परंपरा, संकेत ब आदर्श निर्माण केले
                आहेत. भूतपूर्व मुंबई प्रांताच्या लेजिस्लेटिव्ह कौन्सिलची
                (Council of the Governor of Bombay) पहिली बैठक दिनांक २२
                जानेवारी १८६२ रोजी.महाराष्ट्र विधिमंडळाला देशात आगळी-वेगळी अशी
                प्रतिष्ठा लाभली आहे. अनेकविध क्षेत्रांत देशपातळीवर नेतृत्व
                देणारे नेते या विधिमंडळाने राष्ट्राला दिले आहेत. या नेत्यांनी
                संसदीय लोकशाही आणि सत्तेच्या विकेंद्रीकरणाद्वारा सबळ प्रशासनाचा
                वस्तुपाठ इतरांना घालून दिला आहे आणि त्यायोगे अनेक उत्तम परंपरा,
                संकेत ब आदर्श निर्माण केले आहेत. भूतपूर्व मुंबई प्रांताच्या
                लेजिस्लेटिव्ह कौन्सिलची (Council of the Governor of Bombay)
                पहिली बैठक दिनांक २२ जानेवारी १८६२ रोजी
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
                      Legislative Council
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
                className="parishad-block1 text-center p-2 "
              >
                <div className="heading"> महाराष्ट्र विधान परिषद</div>
                <Row className="mb-3 mt-5 justify-content-center">
                  <Col className="lg={6} md={6} sm={12} xs={12}  d-flex flex-column align-items-center">
                    <div className="img-boxing ">
                      <img alt="img" src={member1} style={{ width: "70%" }} />
                      <hr style={{ borderTop: "0" }} />
                      <div className="box-bottom text-center">
                        <div className="nameHead">Dr. Neelam Gorhe</div>
                        <div className="name-info">
                          मा. महाराष्ट्र विधान परिषदेचे अध्यक्ष
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="lg={6} md={6} sm={12} xs={12}  d-flex flex-column align-items-center">
                    <div className="img-boxing ">
                      <img alt="img" src={member1} style={{ width: "70%" }} />
                      <hr style={{ borderTop: "0" }} />
                      <div className="box-bottom">
                        <div className="nameHead">Dr. Neelam Gorhe</div>
                        <div className="name-info">
                          मा. महाराष्ट्र विधान परिषद उपसभापती
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-3 mt-5">
                  <Col className="lg={6} md={6} sm={12} xs={12}  d-flex flex-column align-items-center">
                    <div className="img-boxing ">
                      <img alt="img" src={member2} style={{ width: "70%" }} />
                      <hr style={{ borderTop: "0" }} />
                      <div className="box-bottom">
                        <div className="nameHead">Mr. Devendra Fadnavis</div>
                        <div className="name-info">
                          मा. सभागृह नेते, महाराष्ट्र विधान परिषद
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="lg={6} md={6} sm={12} xs={12}  d-flex flex-column align-items-center">
                    <div className="img-boxing">
                      <img alt="img" src={member3} style={{ width: "70%" }} />
                      <hr style={{ borderTop: "0" }} />
                      <div className="box-bottom">
                        <div className="nameHead">Mr. Ambadas Demons</div>
                        <div className="name-info">
                          मा. विरोधी पक्षनेते, महाराष्ट्र विधान परिषद
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
                    <Link to="#" style={{ color: "black" }}>
                      सदस्यांचे पक्षनिहाय प्रतिनिधीत्व
                    </Link>
                    <img
                      src={partiwise}
                      alt="img"
                      className="mt-3 mb-2"
                      style={{ width: "65%" }}
                    />
                    <div className="d-flex justify-content-start">
                      Political Group
                      <img src={councilgraph} alt="img" className="mb-4 mt-4" />
                    </div>
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
export default LegislativeCouncil;
