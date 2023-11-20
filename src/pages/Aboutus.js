import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import Row from "react-bootstrap/Row";
import aboutimg from "../assets/about/_MG_5358 3.jpg";
import aboutimg2 from "../assets/about/_MG_5358 2 (1).jpg";
import aboutimg3 from "../assets/about/_MG_5358 4.jpg";
import { Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  let currentSlide = 0;
  const galleryItems = document.querySelectorAll(".gallery-item");

  const [lang, setLang] = useState("mr");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

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

  const data = {
    title: {
      marathi: "विधानमंडळ",
      english: "Legislative Assembly",
    },
    marathi: [
      {
        title: "प्रास्ताविक",
        description:
          "महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आह. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.े",
        image: aboutimg,
        documents: "",
      },
      {
        title: "पूर्वइतिहास",
        description:
          "महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आह. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.े",
        image: aboutimg2,
        documents: "",
      },
      {
        title: "विधान परिषद निर्देशिका",
        description:
          "महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आह. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधानसभा हे भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.े",
        image: aboutimg3,
        documents: "",
      },
    ],
    english: [
      {
        title: "Introduction",
        description:
          "The Maharashtra Vidhan Sabha or the Maharashtra Legislative Assembly is the lower house of the legislature of the Indian state of Maharashtra. It is situated in the Nariman Point area of South Mumbai in the capital Mumbai. The Maharashtra Assembly is the lower house of the legislature of the Indian stateAssembly is the lower house of the legislature of the Indian state The Maharashtra Assembly is the lower house of the legislature of the Indian stateAssembly.",
        image: aboutimg,
        documents: "",
      },
      {
        title: "Prehistory",
        description:
          "The Maharashtra Vidhan Sabha or the Maharashtra Legislative Assembly is the lower house of the legislature of the Indian state of Maharashtra. It is situated in the Nariman Point area of South Mumbai in the capital Mumbai. The Maharashtra Assembly is the lower house of the legislature of the Indian stateAssembly is the lower house of the legislature of the Indian state The Maharashtra Assembly is the lower house of the legislature of the Indian stateAssembly.",
        image: aboutimg2,
        documents: "",
      },
      {
        title: "Legislative Council Directory",
        description:
          "The Maharashtra Vidhan Sabha or the Maharashtra Legislative Assembly is the lower house of the legislature of the Indian state of Maharashtra. It is situated in the Nariman Point area of South Mumbai in the capital Mumbai. The Maharashtra Assembly is the lower house of the legislature of the Indian stateAssembly is the lower house of the legislature of the Indian state The Maharashtra Assembly is the lower house of the legislature of the Indian stateAssembly.",
        image: aboutimg3,
        documents: "",
      },
    ],
  };

  useEffect(() => {
    const newLang = queryParams.get("lang");
    if (newLang) {
      setLang(newLang);
    }
  }, [queryParams]);

  // console.log(lang);

  return (
    <>
      <div>
        <Header />
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
                {lang === "mr" ? data.title.marathi : data.title.english}
                <hr
                  style={{
                    width: "20%",
                    border: "none",
                    height: "5px",
                    opacity: "1",
                    marginTop: "0",
                    marginBottom: "15px",
                    background: "linear-gradient(to right, green, yellow)",
                  }}
                />
              </div>
              {data[lang === "mr" ? "marathi" : "english"].map(
                (item, index, array) => (
                  <React.Fragment key={index}>
                    <Row
                      className={`justify-content-center mt-3 ${
                        index % 2 === 1 ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div className="col-lg-6 text-center mt-2">
                        <img src={item.image} alt=" " className="image1" />
                      </div>
                      <div className="col-lg-6 ">
                        <div className="section-headtop mb-3">{item.title}</div>
                        <hr
                          style={{
                            width: "20%",
                            border: "none",
                            height: "5px",
                            opacity: "1",
                            marginTop: "0",
                            marginBottom: "15px",
                            background:
                              "linear-gradient(to right, green, yellow)",
                          }}
                        />
                        <div className="about-info">{item.description}</div>
                        <Button
                          variant="primary"
                          className="pdf-btn mt-3"
                          style={{
                            width: "25%",
                            backgroundColor: "blue",
                            borderRadius: "5px",
                            fontFamily: "Popins",
                          }}
                        >
                          View PDF <i className="fa fa-eye"></i>
                        </Button>
                      </div>
                    </Row>
                    {index !== array.length - 1 && (
                      <hr
                        className="mt-5"
                        style={{
                          border: "none",
                          height: "1px",
                          backgroundColor: "#000000",
                          opacity: "1",
                          marginTop: "0",
                          marginBottom: "15px",
                        }}
                      />
                    )}
                  </React.Fragment>
                )
              )}
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default HomePage;
