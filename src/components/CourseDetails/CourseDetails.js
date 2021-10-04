import React from "react";
import { Card } from "react-bootstrap";

const CourseDetails = (props) => {
  // console.log(props);

  const { img, title, category, details } = props.course;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <p>{details}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
