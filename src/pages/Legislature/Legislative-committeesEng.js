import React from "react";
// import LegislativeA from "../assets/about/_MG_5345 (3) 1.jpg";
import HeaderEng from "../../Components/Common/HeaderEng";
import Footer from "../../Components/Common/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LegislativeComitte from "../../assets/Legislature/image 246.jpg"
const LegislativeCommitteeEng = () => {
  return (
    <>
      <div>
        <HeaderEng />
        <section>
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
              <div>
                <img
                  src={LegislativeComitte}
                  alt=" "
                  style={{ width: "100%", padding: "2%" }}
                />
              </div>
            </div>
            <div className="section-info justify-content-end ">
              <p className="mb-3" style={{ padding: "2%" }}>
                The Maharashtra Vidhan Parishad or Maharashtra Legislative
                Council is the upper house of the bicameral legislature of
                Maharashtra state in western. The Maharashtra Vidhan Parishad or
                Maharashtra Legislative Council is the upper house of the
                bicameral legislature of Maharashtra state in western. The
                Maharashtra Vidhan Parishad or Maharashtra Legislative Council
                is the upper house of the bicameral legislature of Maharashtra
                state in western.<br></br> The Maharashtra Vidhan Parishad or
                Maharashtra Legislative Council is the upper house of the
                bicameral legislature of Maharashtra state in western. The
                Maharashtra Vidhan Parishad or Maharashtra Legislative Council
                is the upper house of the bicameral legislature of Maharashtra
                state in western.The Maharashtra Vidhan Parishad or Maharashtra
                Legislative Council is the upper house of the bicameral
                legislature of Maharashtra state in western.
                <br /> The Maharashtra Vidhan Parishad or Maharashtra
                Legislative Council is the upper house of the bicameral
                legislature of Maharashtra state in western. The Maharashtra
                Vidhan Parishad or Maharashtra Legislative Council is the upper
                house of the bicameral legislature of Maharashtra state in
                western. The Maharashtra Vidhan Parishad or Maharashtra
                Legislative Council is the upper house of the bicameral
                legislature of Maharashtra state in western. The Maharashtra
                Vidhan Parishad or Maharashtra Legislative Council is the upper
                house of the bicameral legislature of Maharashtra state in
                western. The Maharashtra Vidhan Parishad or Maharashtra
                Legislative Council is the upper house of the bicameral
                legislature of Maharashtra state in western. The Maharashtra
                Vidhan Parishad or Maharashtra Legislative Council is the upper
                house of the bicameral legislature of Maharashtra state in
                western. The Maharashtra Vidhan Parishad or Maharashtra
                Legislative Council is the upper house of the bicameral
                legislature of Maharashtra state in western. The Maharashtra
                Vidhan Parishad or Maharashtra Legislative Council is the upper
                house of the bicameral legislature of Maharashtra state in
                western. The Maharashtra Vidhan Parishad or Maharashtra
                Legislative Council is the upper house of the bicameral
                legislature of Maharashtra state in western.
              </p>
            </div>
            <section className="bg-council mb-5 mt-5">
              <div>
                <div
                  className="about-head text-center"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  Structure
                  <hr
                    style={{
                      width: "20%",
                      border: "none",
                      height: "5px",
                      background: "linear-gradient(to right, green, yellow)",
                      opacity: "1",
                    }}
                  />
                  <div className="title-head mt-3"> Council of Ministers</div>
                </div>
                {/* <div className="title-head">Council of Ministers</div> */}
                <Row className="justify-content-center">
                  <Col
                  // lg={11}
                  // md={9}
                  // sm={12}
                  // xs={12}
                  // className="parishad-block1 text-center "
                  >
                    <Row className="mb-5 mt-5 justify-content-center">
                      <Col className="lg={6} md={6} sm={12} xs={12}  d-flex flex-column align-items-center">
                        <div className="img-boxing ">
                          <img alt="img" />
                          <hr style={{ borderTop: "0" }} />
                          <div className="box-bottom text-center">
                            <div className="nameHead">
                              Mr. Eknath Sambhaji Shinde{" "}
                            </div>
                            <div className="name-info mt-2">
                              Chief Minister of Maharashtra
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col className="lg={6} md={6} sm={12} xs={12}  d-flex flex-column align-items-center mt-5">
                        <div className="img-boxing ">
                          <img alt="img" />
                          <hr style={{ borderTop: "0" }} />
                          <div className="box-bottom text-center">
                            <div className="nameHead">Mr.Devendra Fadnavis</div>
                            <div className="name-info mt-2  ">
                              Deputy Chief Minister of Maharashtra
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col className="lg={6} md={6} sm={12} xs={12}  d-flex flex-column align-items-center">
                        <div className="img-boxing ">
                          <img alt="img" />
                          <hr style={{ borderTop: "0" }} />
                          <div className="box-bottom text-center">
                            <div className="nameHead">
                              Mr. Ajit Anantrao Pawar
                            </div>
                            <div className="name-info mt-2">
                              Deputy Chief Minister of Maharashtra
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default LegislativeCommitteeEng  ;
