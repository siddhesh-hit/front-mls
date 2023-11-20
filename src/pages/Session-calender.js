import React, { useState } from "react";
import Footer from "../Components/Common/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Calendar from 'react-calendar';

// import React, { useState } from "react";

import { Form, Container, InputGroup, Button } from "react-bootstrap";
import Header from "../Components/Common/Header";
// import { useState } from "react";
const SessionCalender = () => {
    const [date,setDate]=useState("")
    // const days = ["S", "M", "T", "W", "T", "F", "S"];
    // const currentDate = dayjs();
    // const [today, setToday] = useState(currentDate);
    // const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <>
      <Header />
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
                lg={5}
                md={7}
                sm={12}
                xs={12}
              >
                <Col className="lg={2} md={2} sm={12} xs={12}  ">
                  <div className="filter-container mt-4  ">
                    <div type="label" className="filter-title mb-3">
                      सभागृहांच
                    </div>

                    <div className="box-bottom1">
                      <Form.Select
                        style={{ width: "70%" }}
                        aria-label="User Type Selection"
                        // // value={userType}
                        // onChange={(e) => setUserType(e.target.value)}
                        // onBlur={validateForm} // Validate on blur
                      >
                        <option value="1">विधान परिषद</option>
                        <option value="2">One</option>
                        <option value="3">Two</option>
                        <option value="4">Three</option>
                      </Form.Select>
                    </div>
                  </div>
                </Col>
                <Col className="lg={2} md={2} sm={12} xs={12}   mb-3">
                  <div className="filter-container mt-4">
                    <div type="label" className="filter-title mb-3">
                      सत्र
                    </div>

                    <div className="box-bottom1">
                      <Form.Select
                        style={{ width: "70%" }}
                        aria-label="User Type Selection"
                        // // value={userType}
                        // onChange={(e) => setUserType(e.target.value)}
                        // onBlur={validateForm} // Validate on blur
                      >
                        <option value="1">पावसाळा</option>
                        <option value="2">One</option>
                        <option value="3">Two</option>
                        <option value="4">Three</option>
                      </Form.Select>
                    </div>
                  </div>
                </Col>
                <Col className="lg={2} md={2} sm={12} xs={12} mb-3">
                  <div className="filter-container mt-4">
                    <div type="label" className="filter-title mb-3">
                      वर्ष
                    </div>

                    <div className="box-bottom1">
                      <Form.Select
                        style={{ width: "70%" }}
                        aria-label="User Type Selection"
                        // // value={userType}
                        // onChange={(e) => setUserType(e.target.value)}
                        // onBlur={validateForm} // Validate on blur
                      >
                        <option value="1">2022</option>
                        <option value="2">One</option>
                        <option value="3">Two</option>
                        <option value="4">Three</option>
                      </Form.Select>
                    </div>
                  </div>
                </Col>

                <Col lg={2} md={2} sm={12} xs={12} mb-3>
                  <div className="filter-container mt-4">
                    <div type="label" className="filter-subtitle mb-3">
                      कडून:
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
                <Col lg={2} md={2} sm={12} xs={12}>
                  <div className="filter-container mt-4">
                    <div type="label" className="filter-subtitle mb-3">
                      ते:
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
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <Button
              style={{ width: "10%", backgroundColor: "#000088" }}
              className="mt-2 mb-2 text-center"
            >
              अर्ज करा
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
                {/* <div className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto  h-screen items-center sm:flex-row flex-col">
                  <div className="w-96 h-96 ">
                    <div className="flex justify-between items-center">
                      <h1 className="select-none font-semibold">
                        {months[today.month()]}, {today.year()}
                      </h1>
                      <div className="flex gap-10 items-center ">
                        <GrFormPrevious
                          className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                          onClick={() => {
                            setToday(today.month(today.month() - 1));
                          }}
                        />
                        <h1
                          className=" cursor-pointer hover:scale-105 transition-all"
                          onClick={() => {
                            setToday(currentDate);
                          }}
                        >
                          Today
                        </h1>
                        <GrFormNext
                          className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                          onClick={() => {
                            setToday(today.month(today.month() + 1));
                          }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-7 ">
                      {days.map((day, index) => {
                        return (
                          <h1
                            key={index}
                            className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
                          >
                            {day}
                          </h1>
                        );
                      })}
                    </div>

                    <div className=" grid grid-cols-7 ">
                      {generateDate(today.month(), today.year()).map(
                        ({ date, currentMonth, today }, index) => {
                          return (
                            <div
                              key={index}
                              className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                            >
                              <h1
                                className={cn(
                                  currentMonth ? "" : "text-gray-400",
                                  today ? "bg-red-600 text-white" : "",
                                  selectDate.toDate().toDateString() ===
                                    date.toDate().toDateString()
                                    ? "bg-black text-white"
                                    : "",
                                  "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                                )}
                                onClick={() => {
                                  setSelectDate(date);
                                }}
                              >
                                {date.date()}
                              </h1>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                  <div className="h-96 w-96 sm:px-5">
                    <h1 className=" font-semibold">
                      Schedule for {selectDate.toDate().toDateString()}
                    </h1>
                    <p className="text-gray-400">No meetings for today.</p>
                  </div>
                </div> */}
              </div>
            </Col>
            <Col className="lg={2} md={2} sm={12} xs={12}  d-flex flex-column align-items-center">
              दिवसाचा क्रम
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};
export default SessionCalender;
