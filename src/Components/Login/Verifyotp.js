import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { Button, Form, InputGroup } from "react-bootstrap";
import RegisterEng from "./RegisterEng";
import { Link } from "react-router-dom";

const Verifyotp = () => {
  // Get the email from the query parameter
  //   const urlParams = new URLSearchParams("/Register");
  //   const email = urlParams.get('email');

  //  const emailField = document.getElementById('email');
  //   if (emailField) {
  //     emailField.value = email;
  //   }

 function moveToNext(currentInput) {
   // Ensure that only numbers are entered
   currentInput.value = currentInput.value.replace(/\D/g, "");

   // Move to the next input field
   if (currentInput.value && currentInput.nextElementSibling) {
     currentInput.nextElementSibling.focus();
   }
 }
   const otpInputs = document.querySelectorAll(".otp-input");
   otpInputs.forEach(function (input) {
     input.addEventListener("input", function () {
       this.value = this.value.replace(/\D/g, "");
     });
   });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid loginboxpage">
      <img src={logo} alt="logo" className="loginbg" />
      <div className="container">
        <Row className="justify-content-center">
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="login-box">
              <h3 className="mb-3">
                साइन इन करण्यासाठी, कृपया
                <br />
                तुमचा इमेल पत्ता लिहा
              </h3>
              <h6 className="mb-4">कृपया आम्ही पाठवलेला कोड टाइप करा</h6>

              <div className="otp-box ">
                <input
                  type="text"
                  class="otp-input"
                  maxlength="1"
                //   oninput={moveToNext(this, 2)}
                />
                <input
                  type="text"
                  class="otp-input"
                  maxlength="1"
                //   oninput={moveToNext(this, 2)}
                />
                <input
                  type="text"
                  class="otp-input"
                  maxlength="1"
                //   oninput={moveToNext(this, 2)}
                />
                <input type="text" class="otp-input" maxlength="1" />
              </div>

              <div className="code-text mt-4">
                <h6>
                  <div className="code-again">कोड पुन्हा पाठवा (" ")</div>
                  <br />
                  <Link
                    to="#"
                    className="code-link"
                    style={{ marginTop: "-5px" }}
                  >
                    लिंक पुन्हा पाठवा
                  </Link>
                </h6>
              </div>

              <Button variant="primary" onClick={handleSubmit} className="mt-4">
                सुरू
              </Button>
              <Link className="new_account">
                खाते नाही?{" "}
                <span>
                  <Link to="#">साइन अप करा</Link>
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Verifyotp;
