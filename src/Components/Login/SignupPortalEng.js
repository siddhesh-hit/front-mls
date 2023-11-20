import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignupPortalEng = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [Fname, setFname] = useState("");
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
   if (!Fname) {
     newErrors.Fname = "Name is mandatory";
   } else {
     newErrors.Fname = "";
   }
    if (!email) {
      newErrors.email = "Email is mandatory";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter valid email address";
    } else {
      newErrors.email = "";
    }
   if (!phonenumber) {
     newErrors.phonenumber = "Phone Number is mandatory";
   } else if (phonenumber.length !== 10) {
     newErrors.phonenumber = "Please enter a valid 10-digit Phone number";
   } else {
     newErrors.phonenumber = "";
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
          <Col lg={8} md={8} sm={12} xs={12}>
            <div className="login-box">
              <h3 className="mb-4">
                To sign up, please
                <br />
                enter your Email Address
              </h3>
              <Row>
                <Col>
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="name"
                      placeholder="Enter your full name"
                      aria-label="Enter your full name"
                      aria-describedby="basic-addon1"
                      value={Fname}
                      onChange={(e) => setFname(e.target.value)}
                      onBlur={validateForm} // Validate on blur
                    />
                  </InputGroup>
                </Col>
                <Col>
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
                      placeholder="Password"
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
                      placeholder="confirm Password"
                      aria-label="Confirm-Password"
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
                      placeholder="Phone Number"
                      aria-label="Phone Number"
                      aria-describedby="basic-addon1"
                      value={phonenumber}
                      onChange={(e) => setphonenumber(e.target.value)}
                      onBlur={validateForm} // Validate on blur
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
                      placeholder="Gender"
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
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                    </InputGroup.Text>

                    <Form.Control
                      type="date"
                      placeholder="Date of Birth"
                      aria-label="Date of Birth"
                      aria-describedby="basic-addon1"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      // onBlur={validateForm} // Validate on blur
                    />
                  </InputGroup>
                </Col>

                <Col>
                  {" "}
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Select
                      aria-label="User Type Selection"
                      // value={userType}
                      // onChange={(e) => setUserType(e.target.value)}
                      // onBlur={validateForm} // Validate on blur
                    >
                      <option value="1">User Type Selection</option>
                      <option value="2">Researcher</option>
                      <option value="3">Student</option>
                      <option value="4">Public</option>
                    </Form.Select>
                  </InputGroup>
                  {/* {errors.userType && (
                    <p className="error">{errors.userType}</p>
                  )} */}
                </Col>
                <br></br>
                <InputGroup className="mb-4 ">
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
                Already have an Account ?{" "}
                <span>
                  <Link to="/PortalRegisterEng">Sign In</Link>
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignupPortalEng;
