import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AllCourse from "../AllCourse/AllCourse";
import "./Courses.css";

const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetch("./fakeData/courseProfile.JSON")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);
  return (
    <div>
      <Container className="py-5">
        <div className="text-center pb-5 all-course">
          <h1>All Courses</h1>
        </div>
        <Row xs={1} md={4} className="g-4">
          {allCourses.map((course) => (
            <AllCourse key={course.id} course={course}></AllCourse>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
