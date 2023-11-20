import React from "react";
import Row from "react-bootstrap/Row";
import aboutimg from "../assets/about/_MG_5358 3.jpg";
import aboutimg2 from "../assets/about/_MG_5358 2 (1).jpg";
import aboutimg3 from "../assets/about/_MG_5358 4.jpg";
import { Button, Container } from "react-bootstrap";
// import homevidhan from "../assets/_MG_5418 1.jpg";
import HeaderEng from "../Components/Common/HeaderEng";
import FooterEng from "../Components/Common/FooterEng";
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
  const videoElements = document.querySelectorAll("video");
  videoElements.forEach((video) => {
    video.addEventListener("click", toggleVideo);
  });

  function toggleVideo(event) {
    const video = event.target;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  return (
    <>
      <div>
        <HeaderEng />
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
                Vidhan Mandal
                <hr
                  style={{
                    width: "20%",
                    border: "none",
                    height: "5px",
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
                  <div className="section-headtop ">Introductory</div>
                  <hr
                    style={{
                      width: "30%",
                      border: "none",
                      height: "5px",
                      marginTop: "0",
                      marginBottom: "15px",
                      opacity: "1",
                      background: "linear-gradient(to right, green, yellow)",
                    }}
                  />
                  <div className="about-info">
                    The Maharashtra Vidhan Sabha or the Maharashtra Legislative
                    Assembly is the lower house of the legislature of the Indian
                    state of Maharashtra. It is situated in the Nariman Point
                    area of South Mumbai in the capital Mumbai. The Maharashtra
                    Assembly is the lower house of the legislature of the Indian
                    stateAssembly is the lower house of the legislature of the
                    Indian state The Maharashtra Assembly is the lower house of
                    the legislature of the Indian stateAssembly.
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
                      width: "35%",
                      backgroundColor: "blue",
                      borderRadius: "5px",
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
                }}
              />
              <Row className="justify-content-center mt-5 mb-3">
                <div className="col-lg-6  mt-2">
                  <div className="section-headtop">Prehistory</div>
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
                  <div className="about-info">
                    The Maharashtra Vidhan Sabha or the Maharashtra Legislative
                    Assembly is the lower house of the legislature of the Indian
                    state of Maharashtra. It is situated in the Nariman Point
                    area of South Mumbai in the capital Mumbai. The Maharashtra
                    Assembly is the lower house of the legislature of the Indian
                    stateAssembly is the lower house of the legislature of the
                    Indian state The Maharashtra Assembly is the lower house of
                    the legislature of the Indian stateAssembly.
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
                      width: "35%",
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
              <Row className="justify-content-center mt-5 mb-3">
                <div className="col-lg-6 text-center mt-2">
                  <img src={aboutimg3} alt=" " className="image1" />
                </div>
                <div className="col-lg-6 ">
                  <div className="section-headtop">
                    Legislative Council Guide
                  </div>
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
                  <div className="about-info">
                    The Maharashtra Vidhan Sabha or the Maharashtra Legislative
                    Assembly is the lower house of the legislature of the Indian
                    state of Maharashtra. It is situated in the Nariman Point
                    area of South Mumbai in the capital Mumbai. The Maharashtra
                    Assembly is the lower house of the legislature of the Indian
                    stateAssembly is the lower house of the legislature of the
                    Indian state The Maharashtra Assembly is the lower house of
                    the legislature of the Indian stateAssembly.
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
                      width: "35%",
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
        <section>
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
                  marginTop: "0",
                  marginBottom: "15px",
                  background: "linear-gradient(to right, green, #FAD02C)",
                }}
              />
              <Container className="photo-video-container mb-5 ">
                <div class="gallery-container">
                  <a>
                    <i
                      className="fa fa-chevron-left m-3 "
                      onClick={prevSlide}
                    ></i>
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
        </section>
      </div>
      <FooterEng />
    </>
  );
};
export default HomePage;
