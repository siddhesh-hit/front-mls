import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignupPortal = () => {
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
const [image, setImage] = useState(null);

const handleImageChange = (e) => {
  // Handle the image upload logic here
  const selectedImage = e.target.files[0];
  // You can perform additional validations or logic as needed
  setImage(selectedImage);
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
          <Col lg={9} md={8} sm={12} xs={12}>
            <div className="login-box">
              <h3 className="mb-4">
                साइन इन करण्यासाठी, कृपया
                <br />
                तुमचा इमेल पत्ता लिहा
              </h3>
              <Row className="p-2">
                <Col >
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="name"
                      placeholder="तुमचे पूर्ण नाव एंटर करा"
                      aria-label="Enter your full name"
                      aria-describedby="basic-addon1"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      // onBlur={validateForm} // Validate on blur
                    />
                  </InputGroup>
                </Col>
                <Col >
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="ई-मेल आयडी"
                      aria-label="Email-Id"
                      aria-describedby="basic-addon1"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      // onBlur={validateForm} // Validate on blur
                    />
                  </InputGroup>
                  {errors.email && <p className="error">{errors.email}</p>}
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type={passwordType === "password" ? "password" : "text"}
                      placeholder="पासवर्ड"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      // onBlur={validateForm} // Validate on blur
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
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </Col>
                <Col>
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type={passwordType === "password" ? "password" : "text"}
                      placeholder="पक्का पासवर्ड"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      // onBlur={validateForm} // Validate on blur
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
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="tel"
                      placeholder="फोन नंबर"
                      aria-label="Phone Number"
                      aria-describedby="basic-addon1"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      // onBlur={validateForm} // Validate on blur
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-venus-double" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="लिंग"
                      aria-label="Gender"
                      aria-describedby="basic-addon1"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      // onBlur={validateForm} // Validate on blur
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-calender" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="date"
                      placeholder="जन्मतारीख"
                      aria-label="Date of Birth"
                      aria-describedby="basic-addon1"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      // onBlur={validateForm} // Validate on blur
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Profile Picture"
                      aria-label="Gender"
                      aria-describedby="basic-addon1"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      // onBlur={validateForm} // Validate on blur
                    />
                    <Form.Control
                      type="file"
                      id="profilePicture"
                      label="Upload"
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  className="mt-3 w-50 "
                  style={{ borderRadius: "6px" }}
                >
                  Sign Up
                </Button>
              </div>

              <Link className="new_account">
                आधीपासूनच एक खाते आहे?{" "}
                <span>
                  <Link to="/PortalRegisterEng">साइन इन करा</Link>
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignupPortal;
