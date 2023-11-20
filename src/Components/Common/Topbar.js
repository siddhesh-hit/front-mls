import React from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Topbar = () => {
  let fontSize = 16;

  function increaseFont() {
    fontSize += 1;
    if (fontSize < 34){
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
  return (
    <>
      <div className="top_menu">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-8">
            <div className="container-fluid d-flex justify-content-end">
              <Nav style={{ justifyContent: "space-between" }}>
                <Link className="nav-link-top" to="#">
                  साइट मॅप
                </Link>

                <Link className="nav-link-top">आमच्याशी संपर्क साधा</Link>
                <NavDropdown
                  id="basic-nav-dropdown"
                  title="भाषा"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item href="/">Marathi</NavDropdown.Item>
                  <NavDropdown.Item href="HomePageEng">
                    English
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="font-size">
                  <button onClick={increaseFont} className="font-size-button">
                    अ+
                  </button>
                  <button
                    onClick={keepFont}
                    className="font-size-button"
                    style={{ borderRadius: "0px solid black" }}
                  >
                    अ
                  </button>
                  <button onClick={decreaseFont} className="font-size-button">
                    अ-
                  </button>
                </div>
                <Link className="nav-link-top" to="/PortalRegister">
                  साइन इन करा
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
