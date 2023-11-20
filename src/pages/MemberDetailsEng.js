import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeaderEng from "../Components/Common/HeaderEng";
import FooterEng from "../Components/Common/FooterEng";
import news1 from "../assets/Link → 1-1-560x379.jpg.jpg";
import VidhanBhavan from "../assets/1006 1.jpg";
import member1 from "../assets/member/rahulnarvekar.png";
import { Link } from "react-router-dom";
const MemberDetailEng = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const switchToProfile = () => {
    setActiveTab("profile");
  };

  const switchToDebate = () => {
    setActiveTab("debate");
  };
  return (
    <>
      <HeaderEng />
      <section>
        <Container fluid className="Page-back">
          <div
            className="container-fluid justify-content-center "
            style={{ paddingTop: "15%" }}
          >
            <Row>
              <Col lg={2} md={2} sm={2} xs={2} className="m-2">
                <Col>
                  <div className="search">
                    <form>
                      <span>
                        <input type="search" placeholder="Search" />
                        <i
                          className="fa fa-search"
                          aria-hidden="true"
                          style={{ color: "black" }}
                        ></i>
                      </span>
                    </form>
                  </div>
                </Col>
                <Col className="col1-member m-2 p-2">
                  <div className="content-container">
                    <Row>
                      <Col lg={3}>
                        <img src={member1} className="image" alt="Member" />
                      </Col>
                      <Col
                        lg={7}
                        className="m-0 p-0"
                        style={{
                          fontSize: "11px",
                          lineHeight: "17px",
                          fontWeight: "600",
                        }}
                      >
                        <span>Bhamre Subhash Ramrao</span>
                      </Col>
                      <Col lg={2}>
                        <i
                          className="fa fa-chevron-right"
                          style={{ color: "#CE5D3D", marginLeft: "40%" }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="col1-member m-2 p-2">
                  <div className="content-container">
                    <Row>
                      <Col lg={3}>
                        <img src={member1} className="image" alt="Member" />
                      </Col>
                      <Col
                        lg={7}
                        className="m-0 p-0"
                        style={{
                          fontSize: "11px",
                          lineHeight: "17px",
                          fontWeight: "600",
                        }}
                      >
                        <span>Bhamre Subhash Ramrao</span>
                      </Col>
                      <Col lg={2}>
                        <i
                          className="fa fa-chevron-right"
                          style={{ color: "#CE5D3D", marginLeft: "40%" }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="col1-member m-2 p-2">
                  <div className="content-container">
                    <Row>
                      <Col lg={3}>
                        <img src={member1} className="image" alt="Member" />
                      </Col>
                      <Col
                        lg={7}
                        className="m-0 p-0"
                        style={{
                          fontSize: "11px",
                          lineHeight: "17px",
                          fontWeight: "600",
                        }}
                      >
                        <span>Bhamre Subhash Ramrao</span>
                      </Col>
                      <Col lg={2}>
                        <i
                          className="fa fa-chevron-right"
                          style={{ color: "#CE5D3D", marginLeft: "40%" }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="col1-member m-2 p-2">
                  <div className="content-container">
                    <Row>
                      <Col lg={3}>
                        <img src={member1} className="image" alt="Member" />
                      </Col>
                      <Col
                        lg={7}
                        className="m-0 p-0"
                        style={{
                          fontSize: "11px",
                          lineHeight: "17px",
                          fontWeight: "600",
                        }}
                      >
                        <span>Bhamre Subhash Ramrao</span>
                      </Col>
                      <Col lg={2}>
                        <i
                          className="fa fa-chevron-right"
                          style={{ color: "#CE5D3D", marginLeft: "40%" }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="col1-member m-2 p-2">
                  <div className="content-container">
                    <Row>
                      <Col lg={3}>
                        <img src={member1} className="image" alt="Member" />
                      </Col>
                      <Col
                        lg={7}
                        className="m-0 p-0"
                        style={{
                          fontSize: "11px",
                          lineHeight: "17px",
                          fontWeight: "600",
                        }}
                      >
                        <span>Bhamre Subhash Ramrao</span>
                      </Col>
                      <Col lg={2}>
                        <i
                          className="fa fa-chevron-right"
                          style={{ color: "#CE5D3D", marginLeft: "40%" }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="col1-member m-2 p-2">
                  <div className="content-container">
                    <Row>
                      <Col lg={3}>
                        <img src={member1} className="image" alt="Member" />
                      </Col>
                      <Col
                        lg={7}
                        className="m-0 p-0"
                        style={{
                          fontSize: "11px",
                          lineHeight: "17px",
                          fontWeight: "600",
                        }}
                      >
                        <span>Bhamre Subhash Ramrao</span>
                      </Col>
                      <Col lg={2}>
                        <i
                          className="fa fa-chevron-right"
                          style={{ color: "#CE5D3D", marginLeft: "40%" }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="col1-member m-2 p-2">
                  <div className="content-container">
                    <Row>
                      <Col lg={3}>
                        <img src={member1} className="image" alt="Member" />
                      </Col>
                      <Col
                        lg={7}
                        className="m-0 p-0"
                        style={{
                          fontSize: "11px",
                          lineHeight: "17px",
                          fontWeight: "600",
                        }}
                      >
                        <span>Bhamre Subhash Ramrao</span>
                      </Col>
                      <Col lg={2}>
                        <i
                          className="fa fa-chevron-right"
                          style={{ color: "#CE5D3D", marginLeft: "40%" }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="col1-member m-2 p-2">
                  <div className="content-container">
                    <Row>
                      <Col lg={3}>
                        <img src={member1} className="image" alt="Member" />
                      </Col>
                      <Col
                        lg={7}
                        className="m-0 p-0"
                        style={{
                          fontSize: "11px",
                          lineHeight: "17px",
                          fontWeight: "600",
                        }}
                      >
                        <span>Bhamre Subhash Ramrao</span>
                      </Col>
                      <Col lg={2}>
                        <i
                          className="fa fa-chevron-right"
                          style={{ color: "#CE5D3D", marginLeft: "40%" }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="col1-member m-2 p-2">
                  <div className="content-container">
                    <Row>
                      <Col lg={3}>
                        <img src={member1} className="image" alt="Member" />
                      </Col>
                      <Col
                        lg={7}
                        className="m-0 p-0"
                        style={{
                          fontSize: "11px",
                          lineHeight: "17px",
                          fontWeight: "600",
                        }}
                      >
                        <span>Bhamre Subhash Ramrao</span>
                      </Col>
                      <Col lg={2}>
                        <i
                          className="fa fa-chevron-right"
                          style={{ color: "#CE5D3D", marginLeft: "40%" }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Col>

              <Col lg={9} md={9} sm={9} xs={9} className="col1-member m-2">
                {/* ... other code ... */}
                <Col
                  className="text-center"
                  style={{
                    backgroundColor: "#E66442",
                    color: "white",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                  }}
                >
                  Member Detail
                </Col>
                <Col className="d-flex justify-content-center">
                  <span className="d-flex justify-content-center">
                    <Button
                      className={`button-detail ${
                        activeTab === "profile" ? "active" : ""
                      }`}
                      style={{
                        backgroundColor: "whitesmoke",
                        width: "max-content",
                        margin: "1%",
                        borderRadius: "10px",
                      }}
                      onClick={switchToProfile}
                    >
                      <b style={{ fontSize: "15px", color: "black" }}>
                        Profile
                      </b>
                    </Button>
                    <Button
                      className={`button-detail ${
                        activeTab === "debate" ? "active" : ""
                      }`}
                      style={{
                        backgroundColor: "whitesmoke",
                        width: "max-content",
                        margin: "2%",
                      }}
                      onClick={switchToDebate}
                    >
                      <b style={{ fontSize: "15px", color: "black" }}>
                        Debates
                      </b>
                    </Button>
                  </span>
                </Col>
                <section
                  id="profile-section"
                  className={
                    activeTab === "profile"
                      ? "tab-content-active"
                      : "tab-content-inactive"
                  }
                >
                  {/* Profile section content */}
                  <Row>
                    <Col lg={4} style={{ padding: "5%", marginTop: "-4%" }}>
                      <div className="sample-heading ">
                        <img
                          src={member1}
                          width="100%"
                          className="profile-image heading "
                        ></img>
                      </div>
                    </Col>
                    <Col lg={4}>
                      Lorem
                      <Col>
                        <Row>
                          <Col>
                            <b>Party Name :</b>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <b>Email Address:</b>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <b>Gender:</b>
                      </Col>
                      <Col>
                        <b>Date of Birth:</b>
                      </Col>
                      <Col>
                        <b>Contact:</b>
                      </Col>
                      <Col>
                        <b>Educational Qualification:</b>
                      </Col>
                      <Col>
                        <b>Permanent Address:</b>
                      </Col>
                      <Col>
                        <b>Marital Status:</b>
                      </Col>
                      <Col>
                        <b>Useful Links:</b>
                      </Col>
                    </Col>
                    <Col lg={4}>
                      <b>Political Journey</b>
                    </Col>
                  </Row>
                </section>
                {/* <section
                  id="debate-section"
                  className={
                    activeTab === "debate"
                      ? "tab-content-active"
                      : "tab-content-inactive"
                  }
                >
                  
                  <Col>
                    <Row>
                      <Col lg={3} style={{ padding: "5%", marginTop: "-4%" }}>
                        <div>
                          <img src={member1} width="100%"></img>
                        </div>
                        <Col style={{ fontSize: "13px" }}>
                          Lorem
                          <Col>
                            <b>Party Name :</b>
                          </Col>
                          <Col>
                            <b>Email Address:</b>
                          </Col>
                          <Col>
                            <b>Contact:</b>
                          </Col>
                          <Col>
                            <b>Gender:</b>
                          </Col>
                          <Col>
                            <b>Useful Links:</b>
                          </Col>
                        </Col>
                      </Col>
                      <Col lg={9} className="m-0">
                        <table className="table-box-col3 ">
                          <thead className="table-col2 text-center">
                            <tr className="table-head ">
                              <th className="table-head w-10">Houses</th>
                              <th className="table-head ">Value</th>
                              <th className="table-head ">Session</th>
                              <th className="table-head ">Kramak</th>
                              <th className="table-head w-20">Date</th>
                              <th className="table-head ">Device</th>
                              <th className="table-head w-20">Sub Device</th>
                              <th className="table-head ">topic</th>
                              <th className="table-head ">Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center p-2">1.</td>
                              <td className=" p-1">row</td>
                              <td className=" p-1">row</td>
                              <td className=" p-2">row</td>
                              <td className=" p-2">row</td>
                              <td className=" p-2">row</td>
                              <td className=" p-2">row</td>
                              <td className=" p-2">row</td>
                              <td className=" p-2">row</td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          className="d-flex justify-content-end"
                          style={{ marginTop: "10px" }}
                        >
                          <Button
                            style={{
                              backgroundColor: "#000088",
                              width: "20%",
                              justifyContent: "center",
                              display: "flex",
                              marginTop: "0",
                            }}
                          >
                            <b style={{ fontSize: "15px", color: "white" }}>
                              Next <i className="fa fa-chevron-right "></i>
                              <i className="fa fa-chevron-right "></i>
                            </b>
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </section> */}
              </Col>
            </Row>
            <div>
              <Container fluid>
                <div className="head-mediascroll mb-3">Media Gallery</div>
                <Row className="news-box p-2 pb-5">
                  <Col>
                    <Col>
                      <img
                        src={VidhanBhavan}
                        alt="img"
                        style={{ width: "100%" }}
                      />
                      <div className="p-2">
                        <div className="media-headline">25 August </div>
                        <div
                          className="media-headline"
                          style={{ fontSize: "13px" }}
                        >
                          PROBATIONERS OF INDIAN RAILWAYS
                        </div>
                      </div>
                    </Col>
                  </Col>
                  <Col>
                    <Col>
                      <img
                        src={VidhanBhavan}
                        alt="img"
                        style={{ width: "100%" }}
                      />
                      <div className="p-2">
                        <div className="media-headline">25 August </div>
                        <div
                          className="media-headline"
                          style={{ fontSize: "13px" }}
                        >
                          PROBATIONERS OF INDIAN RAILWAYS
                        </div>
                      </div>
                    </Col>
                  </Col>
                  <Col>
                    <Col>
                      <img
                        src={VidhanBhavan}
                        alt="img"
                        style={{ width: "100%" }}
                      />
                      <div className="p-2">
                        <div className="media-headline">25 August </div>
                        <div
                          className="media-headline"
                          style={{ fontSize: "13px" }}
                        >
                          PROBATIONERS OF INDIAN RAILWAYS
                        </div>
                      </div>
                    </Col>
                  </Col>
                  <Col>
                    <Col>
                      <img
                        src={VidhanBhavan}
                        alt="img"
                        style={{ width: "100%" }}
                      />
                      <div className="p-2">
                        <div className="media-headline">25 August </div>
                        <div
                          className="media-headline"
                          style={{ fontSize: "13px" }}
                        >
                          PROBATIONERS OF INDIAN RAILWAYS
                        </div>
                      </div>
                    </Col>
                  </Col>
                  <div className="d-flex justify-content-end">
                    <i className="fa fa-arrow-left  m-2 button-scroll p-1"></i>
                    <i className="fa fa-arrow-right m-2 button-scroll p-1"></i>
                  </div>
                </Row>
              </Container>
            </div>
            <div>
              <Container fluid>
                <div className="head-mediascroll mb-3">News</div>
                <Row className="news-box p-2 pb-5">
                  <Col>
                    <Col>
                      <img src={news1} alt="img" style={{ width: "100%" }} />
                      <div className="p-2">
                        <div className="news-headline">
                          LEGISLATIVE ASSEMBLY
                        </div>
                        <div
                          className="news-headline"
                          style={{ fontSize: "12px" }}
                        >
                          Hear disqualification pleas within a week, share time
                          schedule: SC to Maha Speaker
                        </div>
                      </div>
                    </Col>
                  </Col>
                  <Col>
                    <Col>
                      <img src={news1} alt="img" style={{ width: "100%" }} />
                      <div className="p-2">
                        <div className="news-headline">
                          LEGISLATIVE ASSEMBLY
                        </div>
                        <div
                          className="news-headline"
                          style={{ fontSize: "12px" }}
                        >
                          Supreme Court issues notice to Maharashtra speaker on
                          plea to adjudicate disqualification petitions against
                          CM Shinde, others
                        </div>
                      </div>
                    </Col>
                  </Col>
                  <Col>
                    <Col>
                      <img src={news1} alt="img" style={{ width: "100%" }} />
                      <div className="p-2">
                        <div className="news-headline">
                          LEGISLATIVE ASSEMBLY
                        </div>
                        <div
                          className="news-headline"
                          style={{ fontSize: "12px" }}
                        >
                          Hear disqualification pleas within a week, share time
                          schedule: SC to Maha Speaker
                        </div>
                      </div>
                    </Col>
                  </Col>
                  <Col>
                    <Col>
                      <img src={news1} alt="img" style={{ width: "100%" }} />
                      <div className="p-2">
                        <div className="news-headline">
                          LEGISLATIVE ASSEMBLY
                        </div>
                        <div
                          className="news-headline"
                          style={{ fontSize: "12px" }}
                        >
                          Supreme Court issues notice to Maharashtra speaker on
                          plea to adjudicate disqualification petitions against
                          CM Shinde, others
                        </div>
                      </div>
                    </Col>
                  </Col>
                  <div className="d-flex justify-content-center">
                    <i className="fa fa-arrow-left  m-2 button-scroll p-1"></i>
                    <i className="fa fa-arrow-right m-2 button-scroll p-1"></i>
                  </div>
                </Row>
              </Container>
            </div>
          </div>
        </Container>
      </section>
      <FooterEng />
    </>
  );
};
export default MemberDetailEng;
