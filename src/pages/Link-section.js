import React, { useState } from "react";
import HeaderEng from "../Components/Common/HeaderEng";
import { Container } from "react-bootstrap";
import FooterEng from "../Components/Common/FooterEng";
const LinkSection = () => {
  return (
    <>
      <div>
        <HeaderEng />
        <section>
          <Container className="mb-5">
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
                  color: "blue",
                }}
              >
                All Link
              </div>
              <div>
                <button className=" col-lg-1 link-Btn">
                  <a>http://mls.org.in/</a>
                </button>
                <button className=" col-lg-1 link-Btn">
                  <a>https://gr.maharashtra.gov.in</a>
                </button>
                <button className="col-lg-1 link-Btn">
                  <a>https://gr.maharashtra.gov.in</a>
                </button>
                <button className="col-lg-1 link-Btn">
                  <a>https://gr.maharashtra.gov.in</a>
                </button>
                <br />
                <button className="col-lg-2 link-Btn">
                  <a>https://directorate.marathi.gov.in</a>
                </button>
                <button className="col-lg-2 link-Btn">
                  <a>https://eci.gov.in/</a>
                </button>
                <button className="col-lg-2 link-Btn">
                  <a>https://main.sci.govin/</a>
                </button>
                <button className="col-lg-2 link-Btn">
                  <a>https://beams.mahakosh.gov.in</a>
                </button>
                <br></br>
                <button className="col-lg-2 link-Btn">
                  <a>https://directorate.marathi.gov.in</a>
                </button>
                <button className="col-lg-2 link-Btn">
                  <a>https://eci.gov.in/n</a>
                </button>
                <button className="col-lg-2 link-Btn">
                  <a>https://main.sci.govin/</a>
                </button>
                <button className="col-lg-2 link-Btn">
                  <a>https://beams.mahakosh.gov.in</a>
                </button>
                <br />
                <button className="col-lg-2 link-Btn">
                  <a>https://directorate.marathi.gov.in</a>
                </button>
                <button className="col-lg-2 link-Btn">
                  <a>https://beams.mahakosh.gov.in</a>
                </button>
                <button className="col-lg-2 link-Btn">
                  <a>https://beams.mahakosh.gov.in</a>
                </button>
                <button className="col-lg-2 link-Btn">
                  <a>https://beams.mahakosh.gov.in</a>
                </button>
              </div>
            </div>
          </Container>
        </section>

        <FooterEng/>
      </div>
    </>
  );
};

export default LinkSection;
