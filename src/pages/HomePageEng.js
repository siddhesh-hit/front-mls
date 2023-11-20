import React  from "react";
  
import HeaderEng from "../Components/Common/HeaderEng";
import FooterEng from "../Components/Common/FooterEng";
import VidhanParishad from "../assets/_MG_5358 1.jpg";
import VidhanSabha from "../assets/_MG_5358 2.jpg";
import VidhanBhavan from "../assets/1006 1.jpg";
import homevidhan from "../assets/_MG_5418 1.jpg";
import news1 from "../assets/Link → 1-1-560x379.jpg.jpg";
import news2 from "../assets/Link → 2-1-560x379.jpg.jpg";
import news3 from "../assets/Link → 3-1-560x379.jpg.png";
import { Button, Col, Container, Row,Carousel } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePageEng = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const galleryItems = document.querySelectorAll(".gallery-item");

    

    function prevSlide() {
        setCurrentSlide(currentSlide - 1);
    }

    function nextSlide() {
        setCurrentSlide(currentSlide + 1);
    }

  return (
    <>
      <div>
        <HeaderEng />
        <section className="Page-home justify-content-center ">
          <Container style={{ paddingTop: "15%" }}>
            <Row>
              <Col
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className=" leftside-block d-flex  justify-content-center align-items-center"
                style={{
                  height: "max-content",
                }}
              >
                <div className="block-infoleft ">
                  <div className="text-center">
                    <img
                      src={VidhanParishad}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="text-block">
                    <b>Vidhan Parishad</b>
                    <hr
                      style={{
                        width: "50%",
                        border: "none",
                        height: "3px",
                        opacity: "1",
                        marginTop: "0",
                        marginBottom: "15px",
                        background: "linear-gradient(to right, green, yellow)",
                      }}
                    />
                    <div className="info" style={{ color: "black" }}>
                      The Maharashtra Legislative Council, also known as the
                      Vidhan Parishad, is the upper house of the state's
                      bicameral legislature. Unlike the Legislative Assembly
                      (Vidhan Sabha), which consists of directly elected
                      members, the Legislative Council has a mix of members who
                      are elected and nominated.
                      <div style={{ marginTop: "3%", textDecoration: "none" }}>
                        <Link href="#" style={{ textDecoration: "none" }}>
                          <b style={{ fontSize: "15px", color: "blue" }}>
                            Read More <i className="fa fa-chevron-right "></i>
                            <i className="fa fa-chevron-right "></i>
                          </b>
                          <i
                            className="fa-
                                solid fa-chevrons-right"
                            style={{ color: " #e11305" }}
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className=" justify-content-center"
              >
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block "
                      src={VidhanBhavan}
                      alt="First slide"
                      style={{ marginTop: "5%" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block "
                      src={VidhanBhavan}
                      alt="Second slide"
                      style={{ marginTop: "5%" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block "
                      src={VidhanBhavan}
                      alt="Third slide"
                      style={{ marginTop: "5%" }}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className="rightside-block d-flex justify-content-center align-items-center"
                style={{
                  height: "max-content",
                }}
              >
                <div
                  className="block-inforight"
                  style={{ justifyContent: "end" }}
                >
                  <div className="text-center">
                    <img
                      src={VidhanSabha}
                      alt=""
                      className="center"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="text-block">
                    <b>Vidhan Sabha</b>
                    <hr
                      style={{
                        width: "50%",
                        border: "none",
                        height: "3px",
                        opacity: "1",
                        marginTop: "0",
                        marginBottom: "15px",
                        background: "linear-gradient(to right, green, #FAD02C)",
                      }}
                    />
                    <div className="info">
                      The Maharashtra Legislative Assembly, known as the Vidhan
                      Sabha, is the lower house of the state's bicameral
                      legislature. As of my last knowledge update in January
                      2022, it consisted of 288 directly elected members, known
                      as Members of the Legislative Assembly (MLAs),
                      representing various constituencies across the state.
                      <div style={{ marginTop: "3%" }}>
                        <Link to="#" style={{ textDecoration: "none" }}>
                          <b style={{ fontSize: "15px", color: "blue" }}>
                            Read More <i className="fa fa-chevron-right "></i>
                            <i className="fa fa-chevron-right "></i>
                          </b>
                          <i
                            className="fa-solid fa-chevrons-right"
                            style={{ color: " #e11305" }}
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col
                lg={5}
                md={6}
                sm={12}
                xs={12}
                className=" d-flex justify-content-center "
              >
                <img src={homevidhan} alt="" style={{ width: "100%" }} />
              </Col>

              <Col lg={7} md={6} sm={12} xs={12}>
                <div className="topic-info ">
                  <div className="section-title  d-flex justify-content-center align-items-center">
                    <b>
                      Vidhan Mandal
                      <hr
                        style={{
                          width: "100%",
                          border: "none",
                          height: "3px",
                          background:
                            "linear-gradient(to right, green, #FAD02C)",
                          opacity: "1",
                        }}
                      />
                    </b>
                  </div>
                  <div
                    className="info-about p-0 d-flex justify-content-left"
                    style={{ fontSize: "14px" }}
                  >
                    The Maharashtra Vidhan Sabha or the Maharashtra Legislative
                    Assembly is the lower house of the legislature of the Indian
                    state of Maharashtra. It is situated in the Nariman Point
                    area of South Mumbai in the capital Mumbai. The Maharashtra
                    Assembly is the lower house of the legislature of the Indian
                    stateAssembly is the lower house of the legislature of the
                    Indian state <br />
                    The Maharashtra Vidhan Sabha or the Maharashtra Legislative
                    Assembly is the lower house of the legislature of the Indian
                    state of Maharashtra. It is situated in the Nariman Point
                    area of South Mumbai in the capital Mumbai. The Maharashtra
                    Assembly is the lower house of the legislature of the Indian
                    stateAssembly is the lower house of the legislature of the
                    Indian state
                  </div>
                  <div className="tewxt-center  d-flex justify-content-center align-items-center">
                    <Link
                      class="btn btn-primary"
                      to="/AboutusEng"
                      style={{
                        backgroundColor: "#000088",
                        marginTop: "5%",
                        width: "30%",
                        textDecoration: "none",
                      }}
                    >
                      Read More
                      <i className="fa fa-chevron-right m-1"></i>{" "}
                      <i className="fa fa-chevron-right "></i>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <div
            className="photo-galleryhome  mt-5 mb-5"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div className="section-head text-center mt-3">
              Photos and Video Gallery
            </div>
            <hr
              style={{
                width: "20%",
                border: "none",
                height: "3px",
                opacity: "1",
                marginTop: "0",
                marginBottom: "15px",
                background: "linear-gradient(to right, green, #FAD02C)",
              }}
            />
            <Container className="photo-video-container mb-5 ">
              <div class="gallery-container">
                <a>
                  <i
                    className="fa fa-chevron-left m-3 justify-content-start"
                    onClick={prevSlide}
                  ></i>
                </a>
                <a>
                  <i
                    class="fa fa-chevron-right m-3 justify-content-end"
                    onClick={nextSlide}
                  ></i>
                </a>

                <div class="gallery">
                  <div class="media">
                    <img src="photo1.jpg" alt="Photo 1" />
                  </div>
                  <div class="media">
                    <img src="photo2.jpg" alt="Photo 2" />
                  </div>
                  <div class="media">
                    <Link>
                      <video controls>
                        <source src="video.mp4" type="video/mp4" />
                        <i class="fal fa-search"></i>
                      </video>
                    </Link>
                  </div>
                  <div class="media">
                    <img src="photo1.jpg" alt="Photo 1" />
                  </div>
                  <div class="media">
                    <img src="photo1.jpg" alt="Photo 1" />
                  </div>
                  <div class="media">
                    <img src="photo1.jpg" alt="Photo 1" />
                  </div>
                  <div class="media">
                    <video controls>
                      <source src="video.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div class="media">
                    <video controls>
                      <source src="video.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div class="media">
                    <img src="photo1.jpg" alt="Photo 1" />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>

        <section className="mt-4">
          <Container>
            <Row>
              <Col className="lg={3} md={3} sm={12} xs={12}">
                <div className="head-news">Latest Update</div>
                <hr
                  style={{
                    width: "50%",
                    border: "1px",
                    height: "3px",
                    opacity: "1",
                    marginTop: "0",
                    marginBottom: "15px",
                    background: "linear-gradient(to right,#008000, #FAD02C)",
                  }}
                />
                <div style={{ color: "#62718D" }}>
                  The Update about recent activities for needed peoples.
                </div>
                <div>
                  <Button
                    className="Button-Morenews"
                    style={{
                      width: "max-content",
                      backgroundColor: "#000088",
                      color: "white",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      borderRadius: "5px",
                    }}
                  >
                    <Link style={{ textDecoration: "none", color: "white" }}>
                      More News <i className="fa fa-chevron-right "></i>
                      <i className="fa fa-chevron-right "></i>
                    </Link>
                  </Button>
                </div>
              </Col>
              <Col className="lg={3} md={3} sm={12} xs={12} d-flex justify-cntent-center">
                <div className="news-box">
                  <img src={news1} alt="img" style={{ width: "100%" }} />

                  <div className="date-box">July 24, 2020</div>
                  <div style={{ padding: "3%" }}>
                    <div style={{ color: "#62718D", fontSize: "18px" }}>
                      <span>
                        In City News‚ Community
                        <i
                          class="fa fa-light fa-message"
                          style={{ color: " #6a768a" }}
                        ></i>
                      </span>
                      <div>Comment off</div>
                    </div>

                    <div style={{ padding: "2%" }}>
                      The new legislature will stand like a new parliament
                      building; Assembly Speaker will propose
                    </div>

                    <div style={{ marginTop: "3%" }}>
                      <Link to="#" style={{ textDecoration: "none" }}>
                        <b style={{ fontSize: "15px", color: "blue" }}>
                          Continue Reading
                          <i className="fa fa-chevron-right "></i>
                          <i className="fa fa-chevron-right "></i>
                        </b>
                        <i
                          className="fa-solid fa-chevrons-right"
                          style={{ color: " #e11305" }}
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="lg={3} md={3} sm={12} xs={12} d-flex justify-cntent-center">
                <div className="news-box">
                  <img src={news2} alt="img" style={{ width: "100%" }} />

                  <div className="date-box">July 24, 2020</div>
                  <div style={{ padding: "3%" }}>
                    <div style={{ color: "#62718D", fontSize: "18px" }}>
                      In Development
                      <span>
                        <i class="fa-regular fa-message"></i>
                      </span>
                      <div>Comment off</div>
                    </div>

                    <div style={{ padding: "2%" }}>
                      The new legislature will stand like a new parliament
                      building; Assembly Speaker will propose
                    </div>

                    <div style={{ marginTop: "3%" }}>
                      <Link to="#" style={{ textDecoration: "none" }}>
                        <b style={{ fontSize: "15px", color: "blue" }}>
                          Continue Reading
                          <i className="fa fa-chevron-right "></i>
                          <i className="fa fa-chevron-right "></i>
                        </b>
                        <i
                          className="fa-solid fa-chevrons-right"
                          style={{ color: " #e11305" }}
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="lg={3} md={3} sm={12} xs={12}">
                <div className="news-box">
                  <img src={news3} alt="img" style={{ width: "100%" }} />

                  <div className="date-box">July 24, 2020</div>
                  <div style={{ padding: "3%" }}>
                    <div style={{ color: "#62718D", fontSize: "18px" }}>
                      In Development
                      <span>
                        <i class="fa-regular fa-message"></i>
                      </span>
                      <div>Comment off</div>
                    </div>

                    <div style={{ padding: "2%" }}>
                      The new legislature will stand like a new parliament
                      building; Assembly Speaker will propose
                    </div>

                    <div style={{ marginTop: "3%" }}>
                      <Link to="#" style={{ textDecoration: "none" }}>
                        <b style={{ fontSize: "15px", color: "blue" }}>
                          Continue Reading
                          <i className="fa fa-chevron-right "></i>
                          <i className="fa fa-chevron-right "></i>
                        </b>
                        <i
                          className="fa-solid fa-chevrons-right"
                          style={{ color: " #e11305" }}
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <div
            className="container block-faq"
            style={{
              paddingTop: "2%",
              paddingBottom: "2%",
              marginBottom: "1%",
            }}
          >
            <div>
              <div className="section-faq-head d-flex justify-cntent-center">
                Frequently Asked Questions
              </div>
              <div className="block1">
                <div>
                  <Link to="" style={{ textDecoration: "none" }}>
                    What powers does the CAG have to perform his role?
                  </Link>
                </div>
              </div>
              <div className="block1" style={{ textDecoration: "none" }}>
                <div>
                  <Link to="" style={{ textDecoration: "none" }}>
                    What are the modes of participation?
                  </Link>
                </div>
                <div className="block-ans">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry
                </div>
              </div>
              <div className="block1">
                <div>
                  <Link href="" style={{ textDecoration: "none" }}>
                    What powers does the CAG have to perform his role?
                  </Link>
                </div>
              </div>
              <div className="block1">
                <div>
                  <Link to="" style={{ textDecoration: "none" }}>
                    What are the modes of participation?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Link section */}

        <section>
          <div className="block-link container mb-1 mt-5 pt-3 ">
            <div className="container-fluid justify-content-center">
              <div>
                <button className=" col-lg-2 link-Btn">
                  <Link style={{ textDecoration: "none", color: "white" }}>
                    http://mls.org.in/
                  </Link>
                </button>
                <button className=" col-lg-2 link-Btn">
                  <Link style={{ textDecoration: "none", color: "white" }}>
                    https://gr.maharashtra.gov.in
                  </Link>
                </button>
                <button className="col-lg-2 link-Btn">
                  <Link style={{ textDecoration: "none", color: "white" }}>
                    https://gr.maharashtra.gov.in
                  </Link>
                </button>
                <button className="col-lg-2 link-Btn">
                  <Link style={{ textDecoration: "none", color: "white" }}>
                    https://gr.maharashtra.gov.in
                  </Link>
                </button>
                <br />
                <div className="text-center">
                  <button className="col-lg-2 link-Btn">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "white",
                        width: "max-content",
                      }}
                    >
                      https://directorate.marathi.gov.in
                    </Link>
                  </button>
                  <button className="col-lg-2 link-Btn">
                    <Link style={{ textDecoration: "none", color: "white" }}>
                      https://eci.gov.in/
                    </Link>
                  </button>
                  <button className="col-lg-2 link-Btn">
                    <Link style={{ textDecoration: "none", color: "white" }}>
                      https://main.sci.govin/
                    </Link>
                  </button>
                </div>
                <br />
                <div className="mt-3 text-center mb-3">
                  <Link to="/Link-section " style={{ textDecoration: "none" }}>
                    <b style={{ fontSize: "15px", color: "blue" }}>View More</b>
                    <i
                      className="fa fa-chevron-right "
                      style={{ color: "blue" }}
                    ></i>
                    <i
                      className="fa fa-chevron-right "
                      style={{ color: "blue" }}
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterEng />
    </>
  );
};
export default HomePageEng;
