import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Phonelogin = () => {

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
                साइन इन करण्यासाठी, कृपया
                <br />
                तुमचा इमेल पत्ता लिहा
              </h3>
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Control
                  type="tel"
                  placeholder=" फोन नंबर"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <Button variant="primary">OTP मिळवा</Button>
              <div className="horizontal-lines mt-5 mb-3">
                <div className="horizontal-line"></div>
                <div className="text">OR</div>
                <div className="horizontal-line"></div>
              </div>
              <div className="text-center mt-5 mb-5">
                <Link to="/PortalRegisterEng">
                  <button variant="primary" className="phone-login ">
                    <i className="fa fa-envelope" aria-hidden="true"></i>ईमेल
                    आयडीने साइन इन करा
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

export default Phonelogin;
// import React, { Component } from "react";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";

// class Phonelogin extends Component {
//   componentDidMount() {
//     loadCaptchaEnginge(8);
//   }

//   doSubmit = () => {
//     let user_captcha = document.getElementById("user_captcha_input").value;

//     if (validateCaptcha(user_captcha) === true) {
//       alert("Captcha Matched");
//       loadCaptchaEnginge(6);
//       document.getElementById("user_captcha_input").value = "";
//     } else {
//       alert("Captcha Does Not Match");
//       document.getElementById("user_captcha_input").value = "";
//     }
//   };

//   render() {
//     return (
//       <div>
//         <div className="container">
//           <div className="form-group">
//             <div className="col mt-3">
//               <LoadCanvasTemplate reloadColor="red" />
//             </div>

//             <div className="col mt-3">
//               <div>
//                 <input
//                   placeholder="Enter Captcha Value"
//                   id="user_captcha_input"
//                   name="user_captcha_input"
//                   type="text"
//                 ></input>
//               </div>
//             </div>

//             <div className="col mt-3">
//               <div>
//                 <button class="btn btn-primary" onClick={() => this.doSubmit()}>
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Phonelogin;

