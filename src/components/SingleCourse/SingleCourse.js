import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { Container, Col, Card, Row } from "react-bootstrap";
// import CourseDetails from "../CourseDetails/CourseDetails";

const SingleCourse = () => {
  const { courseId } = useParams();

  const [courseDetails, setCourseDetails] = useState([]);

  useEffect(() => {
    fetch("./fakeData/courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourseDetails(data));
    // .then((data) => setAllCourses(data));
  }, []);

  // call hbe jokon amar shob data load hye state e set hbe
  useEffect(() => {
    const foundCourse = courseDetails.find((course) => course.id === courseId);
    console.log(foundCourse);
  }, [courseDetails]);

  return (
    <div>
      <h1>{courseId}</h1>
      {/* {courses.map((course) => (
        <CourseDetails key={course.id} course={course}></CourseDetails>
      ))} */}
    </div>
  );
};

export default SingleCourse;
