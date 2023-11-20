import React ,{useState} from "react";
import LegislativeA from "../assets/about/_MG_5345 (3) 1.jpg";
import HeaderEng from "../Components/Common/HeaderEng";
import partiwise from "../assets/about/image 239.jpg";
import PoliticalGrp from "../assets/about/assembly.png";
import FooterEng from "../Components/Common/FooterEng";
import member1 from "../assets/member/rahulnarvekar.png";
import member2 from "../assets/member/narharisir.png";
import member3 from "../assets/member/eknath-shinde.jpeg";
import member4 from "../assets/member/vijay.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

const LegislativeAssemblyEng = () => {
   const [clickedIndex, setClickedIndex] = useState(null);

   const handleColClick = (index) => {
     setClickedIndex(index);
   };
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
              Legislative Assembly
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
                  src={LegislativeA}
                  alt=" "
                  style={{ width: "100%", padding: "2%" }}
                />
              </div>
            </div>
            <div className="section-info justify-content-end ">
              <p style={{ padding: "2%" }}>
                The Maharashtra Legislative Assembly, known as the Vidhan Sabha,
                is the lower house of the state's bicameral legislature. As of
                my last knowledge update in January 2022, it consisted of 288
                directly elected members, known as Members of the Legislative
                Assembly (MLAs), representing various constituencies across the
                state. The Vidhan Sabha holds a pivotal role in the legislative
                process in Maharashtra, as it is the primary house responsible
                for drafting, debating, and passing legislation.
                <br /> The MLAs in the Legislative Assembly are elected by the
                people of Maharashtra through a general election, which is held
                every five years. The party or coalition with the majority of
                seats typically forms the government, and its leader becomes the
                Chief Minister. This house is where major policy decisions and
                budgetary matters are discussed and decided. It plays a vital
                role in shaping the state's governance, making it an essential
                part of the democratic process in Maharashtra. For the most
                current and specific information, please refer to the latest
                official sources, as the composition and structure of the
                Legislative Assembly may have changed since my last update.
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
                    {[...Array(7)].map((_, index) => (
                      <Col
                        key={index}
                        className={`fields-pdf m-3 p-2 ${
                          index === clickedIndex ? "border-blue" : ""
                        }`}
                        onClick={() => handleColClick(index)}
                      >
                        Lrem
                      </Col>
                    ))}
                    
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
                <div className="heading"> Maharashtra Legislative Council</div>
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
      <FooterEng />
    </>
  );
};
export default LegislativeAssemblyEng;
