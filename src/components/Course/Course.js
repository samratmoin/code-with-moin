import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const course = (props) => {
  // console.log(props.course);
  const { img, title, category, price } = props.course;
  return (
    <div>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{category}</Card.Text>
            <Card.Text> Price - ${price}</Card.Text>
            <Button variant="primary">Course Details</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default course;
