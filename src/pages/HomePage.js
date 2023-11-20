import React from "react";
import { useState, useEffect } from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import VidhanParishad from "../assets/_MG_5358 1.jpg";
import VidhanSabha from "../assets/_MG_5358 2.jpg";
import VidhanBhavan from "../assets/1006 1.jpg";
import homevidhan from "../assets/_MG_5418 1.jpg";
import news1 from "../assets/Link → 1-1-560x379.jpg.jpg";
import news2 from "../assets/Link → 2-1-560x379.jpg.jpg";
import news3 from "../assets/Link → 3-1-560x379.jpg.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Container, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
      setCurrentSlide(currentSlide - 1);
    }
  }

  function nextSlide() {
    if (currentSlide < galleryItems.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  useEffect(() => {
    showSlide(currentSlide);
  }, [currentSlide]);
  return (
    <>
      <Header />
      <section className="Page-home justify-content-center ">
        <Container style={{ paddingTop: "15%" }}>
          <Row>
            <Col
              lg={3}
              md={3}
              sm={12}
              xs={12}
              className=" leftside-block d-flex  justify-content-center align-items-center p-2"
              style={{
                marginBottom: "5%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="block-infoleft ">
                <div className="text-center">
                  <img src={VidhanParishad} alt="" />
                </div>
                <div className="text-block">
                  <b>विधान परिषद</b>
                  <hr
                    style={{
                      width: "50%",
                      border: "none",
                      height: "3px",
                      opacity: "1",
                      background: "linear-gradient(to right, green, yellow)",
                    }}
                  />
                  <div className="info" style={{ color: "black" }}>
                    महाराष्ट्र विधिमंडळाला देशात आगळी-वेगळी अशी प्रतिष्ठा लाभली
                    आहे. अनेकविध क्षेत्रांत देशपातळीवर नेतृत्व देणारे नेते या
                    विधिमंडळान राष्ट्राला दिले आहेत. या नेत्यांनी संसदीय लोकशाही
                    आणि सत्तेच्या विकेंद्रीकरणाद्वारा सबळ प्रशासनाचा वस्तुपाठ
                    इतरांना घालून दिला आहे आणि त्यायोग अनेक उत्तम परंपरा, संकेत
                    ब आदर्श निर्माण केले आहेत. भूतपूर्व मुंबई प्रांताच्या
                    लेजिस्लेटिव्ह कौन्सिलची (Council of the Governor of Bombay)
                    पहिली बैठक दिनांक २२ जानेवारी १८६२ रोजी
                    <div style={{ marginTop: "3%", textDecoration: "none" }}>
                      <Link href="#" style={{ textDecoration: "none" }}>
                        <b style={{ fontSize: "15px", color: "blue" }}>
                          अधिक वाचा <i className="fa fa-chevron-right "></i>
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
              className=" justify-content-center p-4 "
            >
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block "
                    src={VidhanBhavan}
                    alt="First slide"
                    style={{ marginTop: "5%", borderRadius: "10px" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block "
                    src={VidhanBhavan}
                    alt="Second slide"
                    style={{ marginTop: "5%", borderRadius: "10px" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block "
                    src={VidhanBhavan}
                    alt="Third slide"
                    style={{ marginTop: "5%", borderRadius: "10px" }}
                  />
                </Carousel.Item>
                {/* Add more Carousel.Items as needed */}
              </Carousel>
            </Col>
            <Col
              lg={3}
              md={3}
              sm={12}
              xs={12}
              className="rightside-block d-flex justify-content-center align-items-center"
              style={{ marginBottom: "5%" }}
            >
              <div
                className="block-inforight"
                style={{ justifyContent: "end" }}
              >
                <div className="text-center">
                  <img src={VidhanSabha} alt="" className="center" />
                </div>
                <div className="text-block">
                  <b>विधानसभा</b>
                  <hr
                    style={{
                      width: "50%",
                      border: "none",
                      height: "3px",
                      opacity: "1",
                      background: "linear-gradient(to right, green, #FAD02C)",
                    }}
                  />
                  <div className="info">
                    महाराष्ट्र विधिमंडळाला देशात आगळी-वेगळी अशी प्रतिष्ठा लाभली
                    आहे. अनेकविध क्षेत्रांत देशपातळीवर नेतृत्व देणारे नेते या
                    विधिमंडळान राष्ट्राला दिले आहेत. या नेत्यांनी संसदीय लोकशाही
                    आणि सत्तेच्या विकेंद्रीकरणाद्वारा सबळ प्रशासनाचा वस्तुपाठ
                    इतरांना घालून दिला आहे आणि त्यायोग अनेक उत्तम परंपरा, संकेत
                    ब आदर्श निर्माण केले आहेत. भूतपूर्व मुंबई प्रांताच्या
                    लेजिस्लेटिव्ह कौन्सिलची (Council of the Governor of Bombay)
                    पहिली बैठक दिनांक २२ जानेवारी १८६२ रोजी
                    <div style={{ marginTop: "3%" }}>
                      <Link to="#" style={{ textDecoration: "none" }}>
                        <b style={{ fontSize: "15px", color: "blue" }}>
                          अधिक वाचा <i className="fa fa-chevron-right "></i>
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
        <div className="container">
          <Row>
            <Col
              lg={5}
              md={6}
              sm={12}
              xs={12}
              className=" d-flex justify-content-center"
            >
              <img src={homevidhan} alt="" style={{ width: "100%" }} />
            </Col>

            <Col
              lg={7}
              md={6}
              sm={12}
              xs={12}
              className=" d-flex justify-content-center align-items-center"
            >
              <div className="topic-info text-center">
                <div className="section-title d-flex justify-content-center align-items-center">
                  <b>
                    विधानमंडळ
                    <hr
                      className=" d-flex justify-content-center align-items-center"
                      style={{
                        width: "100%",
                        border: "none",
                        height: "3px",
                        opacity: "1",
                        background: "linear-gradient(to right, green, #FAD02C)",
                      }}
                    />
                  </b>
                </div>
                <div className="info">
                  महाराष्ट्र विधिमंडळाला देशात आगळी-वेगळी अशी प्रतिष्ठा लाभली
                  आहे. अनेकविध क्षेत्रांत देशपातळीवर नेतृत्व देणारे नेते या
                  विधिमंडळान राष्ट्राला दिले आहेत. या नेत्यांनी संसदीय लोकशाही
                  आणि सत्तेच्या विकेंद्रीकरणाद्वारा सबळ प्रशासनाचा वस्तुपाठ
                  इतरांना घालून दिला आहे आणि त्यायोग अनेक उत्तम परंपरा, संकेत ब
                  आदर्श निर्माण केले आहेत. भूतपूर्व मुंबई प्रांताच्या
                  लेजिस्लेटिव्ह कौन्सिलची (Council of the Governor of Bombay)
                  पहिली बैठक दिनांक २२ जानेवारी १८६२ रोजी महाराष्ट्र विधिमंडळाला
                  देशात आगळी-वेगळी अशी प्रतिष्ठा लाभली आहे. अनेकविध क्षेत्रांत
                  देशपातळीवर नेतृत्व देणारे नेते या विधिमंडळान राष्ट्राला दिले
                  आहेत. या नेत्यांनी संसदीय लोकशाही आणि सत्तेच्या
                  विकेंद्रीकरणाद्वारा सबळ प्रशासनाचा वस्तुपाठ इतरांना घालून दिला
                  आहे आणि त्यायोग अनेक उत्तम परंपरा, संकेत ब आदर्श निर्माण केले
                  आहेत. भूतपूर्व मुंबई प्रांताच्या लेजिस्लेटिव्ह कौन्सिलची
                  (Council of the Governor of Bombay) पहिली बैठक दिनांक २२
                  जानेवारी १८६२ रोजी
                </div>
                <Button
                  style={{
                    backgroundColor: "#000088",
                    width: "max-content",
                    padding: "4px",
                    marginTop: "10%",
                    borderRadius: "5px",
                  }}
                >
                  <Link to="/Aboutus" style={{ textDecoration: "none" }}>
                    <b
                      style={{
                        fontSize: "15px",
                        color: "white",
                        fontFamily: "Popins",
                      }}
                    >
                      अधिक वाचा <i className="fa fa-chevron-right "></i>
                      <i className="fa fa-chevron-right "></i>
                    </b>
                  </Link>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
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
            Photo and video gallery
          </div>
          <hr
            style={{
              width: "20%",
              border: "none",
              height: "3px",
              opacity: "1",
              background: "linear-gradient(to right, green, #FAD02C)",
            }}
          />
          <Container className="photo-video-container mb-5 ">
            <div class="gallery-container">
              <a>
                <i className="fa fa-chevron-left m-3 " onClick={prevSlide}></i>
              </a>
              <a>
                <i class="fa fa-chevron-right m-3 " onClick={nextSlide}></i>
              </a>

              <div class="gallery">
                <div class="media">
                  <img src="photo1.jpg" alt="Photo 1" />
                </div>
                <div class="media">
                  <img src="photo2.jpg" alt="Photo 2" />
                </div>
                <div class="media">
                  <a>
                    <video controls>
                      <source src="video.mp4" type="video/mp4" />
                      <i class="fal fa-search"></i>
                    </video>
                  </a>
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

      <section>
        <Container>
          <div className="row">
            <div className="col-lg-3">
              <div className="head-news">ताज्या बातम्या</div>
              <hr
                style={{
                  width: "50%",
                  border: "1px",
                  height: "3px",
                  opacity: "1",
                  background: "linear-gradient(to right,#008000, #FAD02C)",
                }}
              />
              <div
                style={{ color: "#62718D", fontFamily: "Popins ,sans-serif" }}
              >
                The Update about recent activities for needed peoples.
              </div>
              <div>
                <Button
                  className="Button-Morenews"
                  style={{
                    width: "max-content",
                    backgroundColor: "white",
                    border: "1px solid #0067DA",
                    color: "#0067DA",
                    fontSize: "14px",
                  }}
                >
                  <Link style={{ textDecoration: "none" }}>
                    More News <i className="fa fa-chevron-right "></i>
                    <i className="fa fa-chevron-right "></i>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-cntent-center">
              <div className="news-box">
                <img src={news1} alt="img" style={{ width: "100%" }} />

                <div className="date-box">July 24, 2020</div>
                <div style={{ padding: "3%" }}>
                  <div style={{ color: "#62718D", fontSize: "18px" }}>
                    सिटी न्यूज, समुदायामध्ये
                    <span>
                      <i class="fa-regular fa-message"></i>
                    </span>
                    <div>Comment off</div>
                  </div>

                  <div style={{ padding: "2%" }}>
                    नव्या संसद भवनाप्रमाणे नवीन विधीमंडळ उभं राहणार; विधानसभा
                    अध्यक्ष प्रस्ताव देणार
                  </div>

                  <div style={{ marginTop: "3%" }}>
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <b style={{ fontSize: "15px", color: "blue" }}>
                        अधिक वाचा <i className="fa fa-chevron-right "></i>
                        <i className="fa fa-chevron-right "></i>
                      </b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-cntent-center">
              <div className="news-box">
                <img src={news2} alt="img" style={{ width: "100%" }} />

                <div className="date-box">July 24, 2020</div>
                <div style={{ padding: "3%" }}>
                  <div style={{ color: "#62718D", fontSize: "18px" }}>
                    सिटी न्यूज, समुदायामध्ये
                    <span>
                      <i class="fa-regular fa-message"></i>
                    </span>
                    <div>Comment off</div>
                  </div>

                  <div style={{ padding: "2%" }}>
                    नव्या संसद भवनाप्रमाणे नवीन विधीमंडळ उभं राहणार; विधानसभा
                    अध्यक्ष प्रस्ताव देणार
                  </div>

                  <div style={{ marginTop: "3%" }}>
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <b style={{ fontSize: "15px", color: "blue" }}>
                        अधिक वाचा <i className="fa fa-chevron-right "></i>
                        <i className="fa fa-chevron-right "></i>
                      </b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="news-box">
                <img src={news3} alt="img" style={{ width: "100%" }} />

                <div className="date-box">July 24, 2020</div>
                <div style={{ padding: "3%" }}>
                  <div style={{ color: "#62718D", fontSize: "18px" }}>
                    सिटी न्यूज, समुदायामध्ये
                    <span>
                      <i class="fa-regular fa-message"></i>
                    </span>
                    <div>Comment off</div>
                  </div>

                  <div style={{ padding: "2%" }}>
                    नव्या संसद भवनाप्रमाणे नवीन विधीमंडळ उभं राहणार; विधानसभा
                    अध्यक्ष प्रस्ताव देणार
                  </div>

                  <div style={{ marginTop: "3%" }}>
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <b style={{ fontSize: "15px", color: "blue" }}>
                        अधिक वाचा <i className="fa fa-chevron-right "></i>
                        <i className="fa fa-chevron-right "></i>
                      </b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <div className="container block-faq pb-3 pt-5 mb-2">
          <div className="col-lg-11">
            <div className="section-faq-head d-flex justify-cntent-center">
              सतत विचारले जाणारे प्रश्न
            </div>
            <div className="block1">
              <Link to="" style={{ textDecoration: "none" }}>
                कॅगला त्याची भूमिका पार पाडण्यासाठी कोणते अधिकार आहेत?
              </Link>
            </div>
            <div className="block1">
              <Link to="#" style={{ textDecoration: "none" }}>
                सहभागाच्या पद्धती काय आहेत?
              </Link>
              <div className="block-ans">
                मुद्रण आणि टाइपसेटिंग उद्योगाचा फक्त डमी मजकूर आहे, मुद्रण आणि
                टाइपसेटिंग उद्योगाचा फक्त डमी मजकूर आहे मुद्रण आणि टाइपसेटिंग
                उद्योगाचा फक्त डमी मजकूर आहेमुद्रण आणि टाइपसेटिंग उद्योगाचा फक्त
                डमी मजकूर आहे.
              </div>
            </div>
            <div className="block1">
              <Link to="#" style={{ textDecoration: "none" }}>
                कॅगला त्याची भूमिका पार पाडण्यासाठी कोणते अधिकार आहेत?
              </Link>
            </div>
            <div className="block1">
              <Link to="#" style={{ textDecoration: "none" }}>
                सहभागाच्या पद्धती काय आहेत?
              </Link>
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

      <Footer />
    </>
  );
};
export default HomePage;
