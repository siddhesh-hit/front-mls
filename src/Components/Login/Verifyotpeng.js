import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Verifyotpeng = () => {
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
  // Function to validate OTP
  function validateOTP() {
    const otp1 = document.getElementById("otp1").value;
    const otp2 = document.getElementById("otp2").value;
    const otp3 = document.getElementById("otp3").value;
    const otp4 = document.getElementById("otp4").value;
    const otpValue = otp1 + otp2 + otp3 + otp4;

    // Replace '1234' with your expected OTP
    if (otpValue === "1234") {
      alert("OTP is valid. You can continue.");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  }

  
  function updateResendCountdown() {
    const countdown = document.getElementById("resendCountdown");
    let seconds = 60;

    const countdownInterval = setInterval(() => {
      seconds--;
      countdown.textContent = seconds;

      if (seconds <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("resendLink").style.display = "inline";
        document.getElementById("resendCountdownText").style.display = "none";

        // After the first countdown finishes, initiate the next cycle
        setTimeout(() => {
          document.getElementById("resendLink").style.display = "none";
          document.getElementById("resendCountdownText").style.display =
            "inline";
          updateResendCountdown(); // Recursive call for the next cycle
        }, 1000);
      }
    }, 1000);
  }

  const continueButton = document.querySelector("button");
  continueButton.addEventListener("click", validateOTP);

  const resendLink = document.getElementById("resendLink");
  resendLink.addEventListener("click", () => {
    resendLink.style.display = "none";
    document.getElementById("resendCountdownText").style.display = "inline";
    updateResendCountdown();
  });

  return (
    <div className="container-fluid loginboxpage">
      <img src={logo} alt="logo" className="loginbg" />
      <div className="container">
        <Row className="justify-content-center">
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="login-box">
              <h3 className="mb-3">
                To sign in, please
                <br />
                enter your Email Address
              </h3>
              {/* <h6 className="mb-4">Please type the code we sent to</h6> */}

              <div className="otp-box ">
                <input
                  type="text"
                  class="otp-input"
                  maxlength="1"
                  id="otp1"
                  //   oninput={moveToNext(this, 2)}
                />
                <input
                  type="text"
                  class="otp-input"
                  maxlength="1"
                  id="otp2"
                  //   oninput={moveToNext(this, 2)}
                />
                <input
                  type="text"
                  class="otp-input"
                  maxlength="1"
                  id="otp3"
                  //   oninput={moveToNext(this, 2)}
                />
                <input type="text" class="otp-input" maxlength="1" id="otp4" />
              </div>

              <div className="code-text mt-4">
                <h6>
                  <div className="code-again" id="resendCountdownText">
                    Resend code (<span id="resendCountdown">60</span>)
                  </div>
                  <br />
                  <Link
                    to="#"
                    id="resendLink"
                    className="code-link"
                    style={{ marginTop: "-5px" }}
                  >
                    Resend Link
                  </Link>
                </h6>
              </div>

              <Button variant="primary" onClick={handleSubmit} className="mt-4">
                Continue
              </Button>
              <Link className="new_account">
                Don’t have an Account ?{" "}
                <span>
                  <Link href="#">Sign up</Link>
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Verifyotpeng;
