import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../Course/Course";
import "./TopCourses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./fakeData/courseProfile.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <Container className="py-5 top-courses">
        <div className="text-center text-primary mb-5 topCourse-content">
          <h1>Top-selling Courses</h1>
        </div>
        <Row xs={1} md={4} className="g-4">
          {courses.slice(0, 4).map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
