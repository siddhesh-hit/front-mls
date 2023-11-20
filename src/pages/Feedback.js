import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import { Container } from "react-bootstrap";
import { useState } from "react";

const Feedback = () => {  
  const [isVisible, setIsVisible] = useState(false);
 const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <Header />
      <section>
        <Container>
          <div style={{ paddingTop: "20%" }}>
            <div className="container-fluid justify-content-center ">
              <section>
                <div className="container block-faq pb-3 pt-5 mb-2">
                  <div className="col-lg-11">
                    <div className="section-faq-head d-flex justify-content-center">
                      सतत विचारले जाणारे प्रश्न
                    </div>
                    <div className="block1">
                      <a href="" style={{ textDecoration: "none" }}>
                        <span>
                          कॅगला त्याची भूमिका पार पाडण्यासाठी कोणते अधिकार आहेत?{" "}
                          <i
                            className="fa fa-plus d-flex justify-content-end "
                            style={{ marginTop: "-2%" }}
                          ></i>
                          {/* <i
                            className="fa fa-minus d-flex justify-content-end hidden"
                            style={{ marginTop: "-2%" }}
                          ></i> */}
                        </span>
                      </a>
                    </div>
                    <div className="block1">
                      <a
                        href="#"
                        style={{ textDecoration: "none" }}
                        onClick={toggleVisibility}
                      >
                        <span>
                          सहभागाच्या पद्धती काय आहेत?
                          <i
                            className={`fa ${
                              isVisible ? "fa-minus" : "fa-plus"
                            } d-flex justify-content-end`}
                            style={{ marginTop: "-2%" }}
                          ></i>
                        </span>
                      </a>
                      <div
                        className={`block-ans ${
                          isVisible ? "visible" : "hidden"
                        }`}
                      >
                        मुद्रण आणि टाइपसेटिंग उद्योगाचा फक्त डमी मजकूर आहे,
                        मुद्रण आणि टाइपसेटिंग उद्योगाचा फक्त डमी मजकूर आहे
                        मुद्रण आणि टाइपसेटिंग उद्योगाचा फक्त डमी मजकूर आहेमुद्रण
                        आणि टाइपसेटिंग उद्योगाचा फक्त डमी मजकूर आहे.
                      </div>
                    </div>
                    <div className="block1">
                      <a href="#" style={{ textDecoration: "none" }}>
                        <span>
                          कॅगला त्याची भूमिका पार पाडण्यासाठी कोणते अधिकार आहेत?
                          <i
                            className="fa fa-plus d-flex justify-content-end "
                            style={{ marginTop: "-2%" }}
                          ></i>
                        </span>
                      </a>
                    </div>
                    <div className="block1">
                      <a href="#" style={{ textDecoration: "none" }}>
                        <span>
                          {" "}
                          सहभागाच्या पद्धती काय आहेत?
                          <i
                            className="fa fa-plus d-flex justify-content-end "
                            style={{ marginTop: "-2%" }}
                          ></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};
export default Feedback;
