import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CourseDetails from "../CourseDetails/CourseDetails";

const CourseSingle = () => {
  let { id } = useParams();

  const [courseDetails, setCourseDetails] = useState([]);

  useEffect(() => {
    fetch(`/courses.JSON?=${id}`)
      .then((res) => res.json())
      .then((data) => setCourseDetails(data));
  }, []);

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default CourseSingle;
