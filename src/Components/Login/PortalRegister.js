import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const PortalRegisterEng = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };
  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is mandatory";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter valid email address";
    } else {
      newErrors.email = "";
    }

    if (!password) {
      newErrors.password = "Password is mandatory";
    } else if (password.length < 6) {
      newErrors.password = "Password Must be six or more character";
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm(); // Validate the form before submitting
    if (Object.keys(errors).every((key) => errors[key] === "")) {
      // Perform form submission here
      navigate("/Verifyotpeng");
    }
  };

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
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="ई-मेल आयडी"
                  aria-label="ई-मेल आयडी"
                  aria-describedby="basic-addon1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateForm} // Validate on blur
                />
              </InputGroup>
              {errors.email && <p className="error">{errors.email}</p>}
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Control
                  type={passwordType === "password" ? "password" : "text"}
                  placeholder="पासवर्ड"
                  aria-label="पासवर्ड"
                  aria-describedby="basic-addon1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={validateForm} // Validate on blur
                />
                <div className="input-group-btn">
                  <span onClick={togglePassword}>
                    {passwordType === "password" ? (
                      <i className="fa fa-eye-slash"></i>
                    ) : (
                      <i className="fa fa-eye"></i>
                    )}
                  </span>
                </div>
              </InputGroup>
              {errors.password && <p className="error">{errors.password}</p>}
              <div className="Forgot-Pass">पासवर्ड विसरलात?</div>
              <Button variant="primary" onClick={handleSubmit} className="mt-3">
                साइन इन करा
              </Button>
              <div className="horizontal-lines mt-5 mb-3">
                <div className="horizontal-line"></div>
                <div className="text">किंवा</div>
                <div className="horizontal-line"></div>
              </div>
              <div className="text-center mt-5 mb-5">
                <Link to="/phone-login">
                  <button variant="primary" className="phone-login ">
                    <i class="fa fa-phone"></i> फोन नंबरसह साइन इन करा
                  </button>
                </Link>
              </div>

              <a className="new_account">
                खाते नाही?{" "}
                <span>
                  <Link to="/SignupPortal">साइन अप करा</Link>
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PortalRegisterEng;
