import React, { useState } from "react";
import TopbarEng from "./TopbarEng";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Offcanvas,
} from "react-bootstrap";

const HeaderEng = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="fixed-header">
        <TopbarEng />
        <div style={{ backgroundColor: "white" }}>
          <div
            className="navbar navbar-expand-lg"
            style={{
              justifyContent: "space-between",
              marginRight: "50px",
              marginLeft: "30px",
            }}
          >
            <img src={logo} alt="logo" className="loginbg" />
            <div className="search-home">
              <span>
                <form>
                  <input
                    type="search"
                    placeholder="Enter the search keyword"
                    className="Search_bar"
                  />
                  <i
                    class="fa fa-search"
                    aria-hidden="true"
                    style={{ color: "white" }}
                  ></i>
                </form>
              </span>
            </div>
          </div>
        </div>

        <Navbar expand="lg" className=" bottom-navbar ">
          <div className="container-fluid">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleShow}
            />
            <Navbar.Offcanvas
              style={{ color: "white", backgroundColor: "#2c6747" }}
            >
              <Offcanvas.Header
                closeButton
                style={{ marginTop: "10px" }}
              ></Offcanvas.Header>
              <Nav
                // className="me-auto"
                style={{
                  color: "white",
                  backgroundColor: "#2c6747",
                  justifyContent: "space-between",
                }}
              >
                <Link
                  to="/HomePageEng"
                  className="nav-link-top"
                  style={{ fontWeight: "400" }}
                >
                  Home
                </Link>
                <hr class="vertical-line" />
                <NavDropdown
                  title="Legislature"
                  id="basic-nav-dropdown"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Governor
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Legislative Council
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Assembly
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Legislative Secretary
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Council Of Ministers
                  </NavDropdown.Item>
                </NavDropdown>
                <hr class="vertical-line" />
                <Link
                  to="/LegislativeCouncilEng"
                  className="nav-link-top"
                  style={{ fontWeight: "400" }}
                >
                  Council
                </Link>
                <hr class="vertical-line" />
                <Link
                  to="/LegislativeAssemblyEng"
                  className="nav-link-top"
                  style={{ fontWeight: "400" }}
                >
                  {" "}
                  Assembly
                </Link>
                <hr class="vertical-line" />
                <NavDropdown
                  title="Member of Legislature"
                  id="basic-nav-dropdown"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item href="CouncilMemberEng">
                    List of Legislative Council Members
                  </NavDropdown.Item>
                  <NavDropdown.Item href="AssemblyMemberEng">
                    List of Legislative Assembly Members
                  </NavDropdown.Item>
                </NavDropdown>
                <hr class="vertical-line" />

                <NavDropdown
                  title="Debate"
                  id="basic-nav-dropdown"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Minutes Of Legislative Council Houses
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Minutes Of Legislative Assembly Houses
                  </NavDropdown.Item>
                </NavDropdown>
                <hr class="vertical-line" />

                <Link
                  to="/Session-calenderEng"
                  className="nav-link-top"
                  style={{ fontWeight: "400" }}
                >
                  Session Calender
                </Link>
                <hr class="vertical-line" />
                <Link
                  to=""
                  className="nav-link-top"
                  style={{ fontWeight: "400" }}
                >
                  Library
                </Link>

                <hr class="vertical-line" />

                <NavDropdown
                  title="Publication"
                  id="basic-nav-dropdown"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item href="#action/3.1">
                    विधानमंडळ सदस्य
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </NavDropdown>
                <hr class="vertical-line" />

                <NavDropdown
                  title="Others"
                  id="basic-nav-dropdown"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item href="#action/3.1">
                    विधानमंडळ सदस्य
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default HeaderEng;
