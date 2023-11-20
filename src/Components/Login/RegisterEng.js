import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import facebooklogo from "../../assets/facebooklogo.png";
import googlelogo from "../../assets/googlelogo.png";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";

const RegisterEng = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("1");

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

    if (userType === "1") {
      newErrors.userType = "User Type Selection";
    } else {
      newErrors.userType = "";
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
                To sign in, please
                <br />
                enter your Email Address
              </h3>
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Email-Id"
                  aria-label="Email-Id"
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
                  placeholder="Password"
                  aria-label="Password"
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
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Select
                  aria-label="User Type Selection"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  onBlur={validateForm} // Validate on blur
                >
                  <option value="1">User Type Selection</option>
                  <option value="2">One</option>
                  <option value="3">Two</option>
                  <option value="4">Three</option>
                </Form.Select>
              </InputGroup>
              {errors.userType && <p className="error">{errors.userType}</p>}
              <Button variant="primary" onClick={handleSubmit}>
                Sign In
              </Button>
              <a className="new_account">
                Don’t have an Account ?{" "}
                <span>
                  <a href="#">Sign up</a>
                </span>
              </a>

              <div className="submit-otp">
                {/* <button className="login-type">
                  <img src={googlelogo} />
                </button>
                <button className="login-type" style={{ marginTop: "-27px " }}>
                  <img src={facebooklogo} />
                </button> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RegisterEng;
