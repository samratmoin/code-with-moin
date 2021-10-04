// import React, { useState } from "react";
import { Button, Card, Col, NavLink } from "react-bootstrap";
import { useHistory } from "react-router";

const AllCourse = (props) => {
  const { id, img, title, category, details } = props.course;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/course/${id}`);
  };
  return (
    <div>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{category}</Card.Text>
            <Card.Text className="lead">{details.slice(0, 150)}</Card.Text>

            <Button variant="primary" onClick={handleClick}>
              Course Details
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default AllCourse;
