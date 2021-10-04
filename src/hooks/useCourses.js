import { useEffect } from "react";
import { useState } from "react";

const useCourses = () => {
  // const [courses, setCourses] = useState([]);
  const [courseDetails, setCourseDetails] = useState([]);
  useEffect(() => {
    fetch("./fakeData/courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourseDetails(data));
  }, []);
  // return [courses, setCourses];
  return [courseDetails, setCourseDetails];
};

export default useCourses;
