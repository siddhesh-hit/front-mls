import React from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Topbar = () => {
  let fontSize = 16;
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  function increaseFont() {
    fontSize += 1;
    if (fontSize < 34) {
      updateFontSize();
    }
  }
  function keepFont() {
    fontSize = 16;
    updateFontSize();
  }
  function decreaseFont() {
    fontSize -= 1;
    if (fontSize > 1) {
      updateFontSize();
    }
  }
  function updateFontSize() {
    document.body.style.fontSize = fontSize + "px";
  }

  const handleLanguage = (lang) => {
    // set language in url
    queryParams.set("lang", lang);
    navigate(`?${queryParams.toString()}`);
  };

  return (
    <>
      {/* <Navbar
        expand="lg"
        className="top_menu"
        style={{ justifyContent: "space-between" }}
      >
        <div className="container-fluid" style={{ justifyContent: "end" }}>
          <Nav>
            <Nav.Link href="#home">Site map</Nav.Link>
            <Nav.Link href="#home">Contact us</Nav.Link>
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                विधानमंडळ सदस्य
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <div className="font-size">
              <button onClick={increaseFont} style={{ borderRadius: "10px" }}>
                A+
              </button>
              <button onClick={keepFont} style={{ border: "1px solid black" }}>
                A
              </button>
              <button onClick={decreaseFont} style={{ borderRadius: "10px" }}>
                A-
              </button>
            </div>
            <Nav.Link href="#home">Sign In</Nav.Link>
          </Nav>
        </div>
      </Navbar> */}
      <div className="top_menu">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-8">
            <div className="container-fluid d-flex justify-content-end">
              <Nav className="TopNav">
                <Link to="#home" className="nav-link-top">
                  Site map
                </Link>
                <Link to="#home" className="nav-link-top">
                  Contact us
                </Link>
                <NavDropdown
                  id="basic-nav-dropdown"
                  title="Language"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item onClick={() => handleLanguage("mr")}>
                    Marathi
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleLanguage("en")}>
                    English
                  </NavDropdown.Item>
                </NavDropdown>

                <div className="font-size">
                  <button onClick={increaseFont} className="font-size-button">
                    A+
                  </button>
                  <button onClick={keepFont} className="font-size-button">
                    A
                  </button>
                  <button onClick={decreaseFont} className="font-size-button">
                    A-
                  </button>
                </div>
                <Link to="/PortalRegisterEng" className="nav-link-top">
                  Sign In
                </Link>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
