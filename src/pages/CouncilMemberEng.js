import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeaderEng from "../Components/Common/HeaderEng";
import FooterEng from "../Components/Common/FooterEng";
import member1 from "../assets/member/rahulnarvekar.png";
import ageSection from "../assets/about/Group 18.jpg";
import chart from "../assets/about/Group 19.jpg";
import womensection from "../assets/about/Group 11.jpg";
import womenChart from "../assets/about/Group 20.jpg"
import { Link } from "react-router-dom";
const CouncilMemberEng = () => {
  return (
    <>
      <HeaderEng />
      <section>
        <Container fluid>
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
                color: "#000000",
              }}
            >
              List of Legislative Council Members
              <hr
                style={{
                  width: "50%",
                  border: "none",
                  height: "5px",
                  background: "linear-gradient(to right, green, yellow)",
                  opacity: "1",
                }}
              />
            </div>
            <div className="search-name">
              <form>
                <input
                  type="search"
                  placeholder="Search by name"
                  className="Search-bar"
                />
                <i
                  class="fa fa-search"
                  aria-hidden="true"
                  style={{ color: "grey", marginRight: "10px" }}
                ></i>
              </form>
            </div>
            <div>
              <Row className="d-flex justify-content-center ">
                <Col lg={2} className="col1-member m-3 ">
                  <Col
                    className="col1-head p-2"
                    style={{ backgroundColor: "#CE5D3D", color: "white" }}
                  >
                    Search by
                  </Col>
                  <Col className="col1-filter p-2">
                    Lorens
                    <i
                      className="fa fa-chevron-right"
                      style={{ marginLeft: "65%", color: "#CE5D3D" }}
                    ></i>
                  </Col>
                  <Col className="col1-filter p-2">
                    Lorens
                    <i
                      className="fa fa-chevron-right"
                      style={{ marginLeft: "65%", color: "#CE5D3D" }}
                    ></i>
                  </Col>
                  <Col className="col1-filter p-2">
                    Lorens
                    <i
                      className="fa fa-chevron-right"
                      style={{ marginLeft: "65%", color: "#CE5D3D" }}
                    ></i>
                  </Col>
                  <Col
                    className="col1-head2 p-2"
                    style={{ backgroundColor: "#000088", color: "white" }}
                  >
                    First Time Elected Members
                  </Col>
                  <Col className="col1-filter p-2">
                    Lorens
                    <i
                      className="fa fa-chevron-right"
                      style={{ marginLeft: "65%", color: "#CE5D3D" }}
                    ></i>
                  </Col>
                  <Col className="col1-filter p-2">
                    Lorens
                    <i
                      className="fa fa-chevron-right"
                      style={{ marginLeft: "65%", color: "#CE5D3D" }}
                    ></i>
                  </Col>
                  <Col className="col1-filter p-2">
                    Lorens
                    <i
                      className="fa fa-chevron-right"
                      style={{ marginLeft: "65%", color: "#CE5D3D" }}
                    ></i>
                  </Col>
                  <Col className="col1-filter p-2">
                    Lorens
                    <i
                      className="fa fa-chevron-right"
                      style={{ marginLeft: "65%", color: "#CE5D3D" }}
                    ></i>
                  </Col>
                  <Col
                    className="col1-head2 p-2"
                    style={{ backgroundColor: "#2C6747", color: "white" }}
                  >
                    Women Members
                  </Col>
                  <Col className="col1-filter p-2">
                    Lorens
                    <i
                      className="fa fa-chevron-right"
                      style={{ marginLeft: "65%", color: "#CE5D3D" }}
                    ></i>
                  </Col>
                  <Col className="col1-filter p-2">
                    Lorens
                    <i
                      className="fa fa-chevron-right"
                      style={{ marginLeft: "65%", color: "#CE5D3D" }}
                    ></i>
                  </Col>
                  <Col className="col1-filter p-2">
                    Lorens
                    <i
                      className="fa fa-chevron-right"
                      style={{ marginLeft: "65%", color: "#CE5D3D" }}
                    >
                      {" "}
                    </i>
                  </Col>
                </Col>
                <Col lg={6} className="col2-member m-3">
                  <table className="table-box-col2">
                    <thead className="table-col2 text-center">
                      <tr className="table-head ">
                        <th className="table-head p-1" style={{ width: "1%" }}>
                          Sr.No.
                        </th>
                        <th className="table-head p-1" style={{ width: "35%" }}>
                          Name
                        </th>
                        <th className="table-head p-1">Consultency</th>
                        <th className="table-head p-1" style={{ width: "15%" }}>
                          Party
                        </th>
                        <th className="table-head p-1" style={{ width: "15%" }}>
                          Gender
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center p-2">1.</td>
                        <td className=" p-2">
                          <Row>
                            <Col lg={3}>
                              <Link to="/MemberDetailsEng">
                                <img
                                  src={member1}
                                  className="image"
                                  alt="Member"
                                />
                              </Link>
                            </Col>
                            <Col lg={8} className="p-0 m-0">
                              <Link
                                to="/MemberDetailsEng"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                Arvind Ganpat Sawant
                              </Link>
                            </Col>
                          </Row>
                        </td>
                        <td className=" text-center p-2">row</td>
                        <td className="text-center p-3">row</td>
                        <td className="text-center p-3">row</td>
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
                        width: "max-content",
                        justifyContent: "left",
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

                <Col lg={2} className="col3-member m-3 ">
                  <Col
                    className="col1-head p-3 d-flex text-center"
                    style={{ backgroundColor: "#2C6747", color: "white" }}
                  >
                    Statistical Analysis
                  </Col>
                  <Col className="mt-4 d-flex text-center justify-content-center">
                    <Col>
                      <div style={{ fontWeight: "bold" }}>
                        Age Section of Members
                      </div>
                      <img
                        src={ageSection}
                        alt="img"
                        className="mt-3 pb-4"
                        style={{ width: "65%" }}
                      />
                      <img
                        src={chart}
                        alt="img"
                        className="mt-3 pb-4"
                        style={{ width: "65%" }}
                      />
                    </Col>
                  </Col>
                  <Col className="mt-4 d-flex text-center">
                    <Col>
                      <div style={{ fontWeight: "bold" }}>
                        List of Women Members
                      </div>
                      <img
                        src={womensection}
                        alt="img"
                        className="mt-3 pb-4"
                        style={{ width: "65%" }}
                      />
                      <img
                        src={womenChart}
                        alt="img"
                        className="mt-3 pb-4"
                        style={{ width: "65%" }}
                      />
                    </Col>
                  </Col>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>

      <FooterEng />
    </>
  );
};
export default CouncilMemberEng;
