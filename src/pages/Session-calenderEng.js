import React , { useState }from "react";
import HeaderEng from "../Components/Common/HeaderEng";
import FooterEng from "../Components/Common/FooterEng";
import Calendar from "react-calendar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Container, InputGroup, Button } from "react-bootstrap";
// import { useState } from "react";
const SessionCalenderEng = () => {
     const [date, setDate] = useState("");
  return (
    <>
      <HeaderEng />
      <section>
        <Container className="justify-content-center">
          {/* Search-field */}
          <div
            className="mb-3"
            style={{ backgroundColor: "white", paddingTop: "20%" }}
          >
            <div className="search-sessionCalender">
              <span>
                <form>
                  <input
                    type="search"
                    placeholder="Enter the search keyword"
                    className="Search_bar"
                  />
                  <i
                    class="fa fa-search m-1"
                    aria-hidden="true"
                    style={{ color: "white" }}
                  ></i>
                </form>
              </span>
            </div>
          </div>
          {/* Filter */}
          <div className="filter-box mb-3">
            <div className="container">
              <Row
                className="justify-content-center"
                lg={4}
                md={7}
                sm={12}
                xs={12}
              >
                <Col className="lg={2} md={2} sm={12} xs={12}  d-flex flex-column align-items-center">
                  <div className="filter-container mt-4  ">
                    <div type="label" className="filter-title mb-3">
                      House
                    </div>

                    <div className="box-bottom1">
                      <Form.Select
                        style={{ width: "70%" }}
                        aria-label="User Type Selection"
                        // // value={userType}
                        // onChange={(e) => setUserType(e.target.value)}
                        // onBlur={validateForm} // Validate on blur
                      >
                        <option value="1">User Type Selection</option>
                        <option value="2">One</option>
                        <option value="3">Two</option>
                        <option value="4">Three</option>
                      </Form.Select>
                    </div>
                  </div>
                </Col>
                <Col className="lg={2} md={2} sm={12} xs={12}  d-flex flex-column align-items-center mb-3">
                  <div className="filter-container mt-4">
                    <div type="label" className="filter-title mb-3">
                      Session
                    </div>

                    <div className="box-bottom1">
                      <Form.Select
                        style={{ width: "70%" }}
                        aria-label="User Type Selection"
                        // // value={userType}
                        // onChange={(e) => setUserType(e.target.value)}
                        // onBlur={validateForm} // Validate on blur
                      >
                        <option value="1">User Type Selection</option>
                        <option value="2">One</option>
                        <option value="3">Two</option>
                        <option value="4">Three</option>
                      </Form.Select>
                    </div>
                  </div>
                </Col>
                <Col className="lg={2} md={6} sm={12} xs={12}  d-flex flex-column align-items-center mb-3">
                  <div className="filter-container mt-4">
                    <div type="label" className="filter-title mb-3">
                      Year
                    </div>

                    <div className="box-bottom1">
                      <Form.Select
                        style={{ width: "70%" }}
                        aria-label="User Type Selection"
                        // // value={userType}
                        // onChange={(e) => setUserType(e.target.value)}
                        // onBlur={validateForm} // Validate on blur
                      >
                        <option value="1">User Type Selection</option>
                        <option value="2">One</option>
                        <option value="3">Two</option>
                        <option value="4">Three</option>
                      </Form.Select>
                    </div>
                  </div>
                </Col>
                {/* <Row>
                  <div type="label" className="filter-title mt-2">
                    Date range
                  </div>
                  <Col className="lg={2} md={6} sm={12} xs={12}  d-flex flex-column ">
                    <div className="filter-container " style={{ width: "50%" }}>
                      <div type="label" className="filter-subtitle">
                        From:
                      </div>
                      <div className="box-bottom1">
                        <InputGroup className="mb-4">
                          <Form.Control
                            style={{ width: "50%" }}
                            type="date"
                            placeholder="Email-Id"
                            // aria-label="Email-Id"
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                      </div>
                    </div>
                  </Col>
                  <Col className="lg={2} md={6} sm={12} xs={12}  d-flex flex-column  ">
                    <div className="filter-container" style={{ width: "50%" }}>
                      <div type="label" className="filter-subtitle">
                        to:
                      </div>
                      <div className="box-bottom1">
                        <InputGroup className="mb-4">
                          <Form.Control
                            style={{ width: "50%" }}
                            type="date"
                            placeholder="Email-Id"
                            // aria-label="Email-Id"
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                      </div>
                    </div>
                  </Col>
                </Row> */}
                <Row>
                  <div type="label" className="filter-title mt-2">
                    Date range
                  </div>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <div className="filter-container">
                      <div type="label" className="filter-subtitle">
                        From:
                      </div>
                      <div className="box-bottom1">
                        <InputGroup className="mb-2">
                          <Form.Control
                            type="date"
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <div className="filter-container">
                      <div type="label" className="filter-subtitle">
                        to:
                      </div>
                      <div className="box-bottom1">
                        <InputGroup className="mb-2">
                          <Form.Control
                            type="date"
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <Button
              style={{ width: "10%", backgroundColor: "#000088" }}
              className="mt-2 mb-2 text-center"
            >
              Apply
            </Button>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="justify-content-center" lg={2} md={2} sm={2} xs={2}>
            <Col className="lg={2} md={2} sm={12} xs={12}  d-flex flex-column align-items-center">
              <div className="app">
                <div className="calendar-container" style={{ border: "none" }}>
                  <Calendar onChange={setDate} value={date} />
                </div>
                {/* <div className="text-center">
                  Selected date: {date.toDateString()}
                </div> */}
              </div>
            </Col>
            <Col className="lg={2} md={2} sm={12} xs={12}  d-flex flex-column align-items-center">
              Order Of Day
              <hr
                style={{
                  width: "20%",
                  border: "none",
                  height: "5px",
                  background: "linear-gradient(to right, green, yellow)",
                  opacity: "1",
                }}
              />
              {/* <Paper>
                <Scheduler data={appointments} height={660}>
                  <WeekView startDayHour={9} endDayHour={19} />
                  <Appointments />
                </Scheduler>
              </Paper> */}
            </Col>
          </Row>
        </Container>
      </section>
      <FooterEng />
    </>
  );
};
export default SessionCalenderEng;
