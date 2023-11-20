import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const PhoneloginEng = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   validateForm(); // Validate the form before submitting
  //   if (Object.keys(errors).every((key) => errors[key] === "")) {
  //     // Perform form submission here
  //     navigate("/Verifyotpeng");
  //   }
  // };

  return (
    <div className="container-fluid loginboxpage">
      <img src={logo} alt="logo" className="loginbg" />
      <div className="container">
        <Row className="justify-content-center">
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="login-box">
              <h3 className="mb-4">
                To sign in, please
                <br />
                enter your Phone Numebr
              </h3>
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Control
                  type="tel"
                  placeholder="Phone Number"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <Button variant="primary">Get OTP</Button>
              <div className="horizontal-lines mt-5 mb-3">
                <div className="horizontal-line"></div>
                <div className="text">OR</div>
                <div className="horizontal-line"></div>
              </div>
              <div className="text-center mt-5 mb-5">
                <Link to="/PortalRegisterEng">
                  <button variant="primary" className="phone-login ">
                    <i className="fa fa-envelope" aria-hidden="true"></i>Sign in
                    With Email id
                  </button>
                </Link>
              </div>

              <a className="new_account">
                Don’t have an Account ?{" "}
                <span>
                  <a href="#">Sign up</a>
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PhoneloginEng;
