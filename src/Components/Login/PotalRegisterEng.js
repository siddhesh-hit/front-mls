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
//  componentDidMount() {
//   this.loadReCaptchaScript();
//   }

//   loadReCaptchaScript() {
//     const script = document.createElement('script');
//     script.src = 'https://www.google.com/recaptcha/api.js';
//     script.async = true;
//     script.defer = true;

//     // Add your reCAPTCHA site key to the URL
//     script.src += `?render=explicit&hl=en&onload=onReCaptchaScriptLoad`;

//     document.body.appendChild(script);

//     // Define a callback function to execute when the script loads
//     window.onReCaptchaScriptLoad = () => {
//       // Render the reCAPTCHA widget in a specific element with an ID (e.g., 'recaptcha-widget')
//       window.grecaptcha.render('recaptcha-widget', {
//         sitekey: 'YOUR_RECAPTCHA_SITE_KEY', // Replace with your reCAPTCHA site key
//         callback: this.onReCaptchaVerified,
//       });
//     };
//   }

//   onReCaptchaVerified = (response) => {
//     // Handle the reCAPTCHA verification here
//     console.log('reCAPTCHA Response:', response);
//   };
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
              {/* <div>
                <div id="recaptcha-widget"></div>
                <button
                  onClick={() => {
                    // Explicitly trigger the reCAPTCHA verification
                    window.grecaptcha.execute();
                  }}
                >
                  Verify with reCAPTCHA
                </button>
              </div> */}
              <div className="Forgot-Pass">Forgot Password?</div>
              <Button variant="primary" onClick={handleSubmit} className="mt-3">
                Sign In
              </Button>
              <div className="horizontal-lines mt-5 mb-3">
                <div className="horizontal-line"></div>
                <div className="text">OR</div>
                <div className="horizontal-line"></div>
              </div>
              <div className="text-center mt-5 mb-5">
                <Link to="/phone-login">
                  <button variant="primary" className="phone-login ">
                    <i class="fa fa-phone"></i>Sign in With Phone
                    Number
                  </button>
                </Link>
              </div>

              <a className="new_account">
                Don’t have an Account ?{" "}
                <span>
                  <Link to="/SignupPortalEng">Sign up</Link>
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
