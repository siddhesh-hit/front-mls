import React from "react";
import LegislativeC from "../assets/about/_MG_5358 1 (1).jpg";
import HeaderEng from "../Components/Common/HeaderEng";
import partiwise from "../assets/about/biograph- party.jpg";
import councilgraph from "../assets/about/COUNCIL.jpg"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import member1 from "../assets/member/nilammore.png";
import member2 from "../assets/member/dfadanvis.png";
import member3 from "../assets/member/danve.png";
import { Container } from "react-bootstrap";
import FooterEng from "../Components/Common/FooterEng";
const LegislativeCouncilEng = () => {
  return (
    <>
      <div>
        <HeaderEng />
        <section>
          <div
            className="container-fluid justify-content-center "
            style={{ paddingTop: "15%" }}
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
              Legislative Council
              <hr
                style={{
                  width: "30%",
                  border: "none",
                  height: "5px",
                  marginTop: "0",
                  marginBottom: "15px",
                  background: "linear-gradient(to right, green, yellow)",
                  opacity: "1",
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
                The Maharashtra Legislative Council, also known as the Vidhan
                Parishad, is the upper house of the state's bicameral
                legislature. Unlike the Legislative Assembly (Vidhan Sabha),
                which consists of directly elected members, the Legislative
                Council has a mix of members who are elected and nominated. Some
                members are elected by graduates, teachers, and local authority
                members, while others are nominated by the Governor. As of my
                last knowledge update in January 2022, the Legislative Council
                had 78 seats. This house plays a crucial role in reviewing and
                revising legislation proposed by the Legislative Assembly,
                contributing to the legislative process in Maharashtra. Please
                verify the current composition and structure of the Legislative
                Council from official sources, as it may have changed since my
                last update.
                <br /> The Vidhan Parishad had 78 seats as of my last update,
                and its primary functions included reviewing and revising
                legislation proposed by the Legislative Assembly, contributing
                to the legislative process, and providing valuable insights and
                expertise in shaping public policy. The upper house served as a
                forum for in-depth discussions, offering a more comprehensive
                and deliberative approach to lawmaking. Please note that the
                composition and structure of the Legislative Council may have
                changed since my last update, and I recommend verifying the
                latest information from official sources.
              </p>
            </div>

            <Row className="backround d-flex justify-content-center">
              <Col
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="parishad-block1 text-center "
              >
                <div className="heading"> Maharashtra Legislative Council</div>
                <Row className="mb-3 mt-5 justify-content-center">
                  <Col className="lg={6} md={6} sm={12} xs={12}  d-flex flex-column align-items-center">
                    <div className="img-boxing ">
                      <img alt="img" src={member1} style={{ width: "70%" }} />
                      <hr style={{ borderTop: "0" }} />
                      <div className="box-bottom text-center">
                        <div className="nameHead">Dr. Neelam Gorhe </div>
                        <div className="name-info">
                          Hon. Chairman Maharashtra Legislative Council
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
                          Hon. Deputy Chairman Maharashtra Legislative Council
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
                          Hon. Deputy Chairman Maharashtra Legislative Council
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
                          Hon. Leader of the House, Maharashtra Legislative
                          Council
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
                    Biographical Information
                    <hr
                      style={{
                        width: "100%",
                        border: "none",
                        height: "5px",
                        marginTop: "0",
                        marginBottom: "15px",
                        background: "linear-gradient(to right, green, yellow)",
                        opacity: "1",
                      }}
                    />
                  </div>
                  <div>
                    <a href="#" style={{ color: "black" }}>
                      Party-wise Representation of Members
                    </a>
                  </div>
                  <img
                    src={partiwise}
                    alt="img"
                    className="mt-3 pb-4"
                    style={{ width: "65%" }}
                  />
                  <div className="mt-4">Political Group</div>
                  <img src={councilgraph} alt="img" className="mb-4" />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
      <FooterEng />
    </>
  );
};
export default LegislativeCouncilEng;
