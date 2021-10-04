import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-content">
      <Container>
        <div className="row justify-content-center py-5">
          <div className="col-lg-6 ">
            <small>Welcome to Code with Moin</small>
            <h1>Clear, Concise, Comprehensive, and Practical!</h1>
            <p className="lead">
              Simple and Beginner friendly, Clear and Concise Lessons
              opportunity, Fun and Engaging Lessons, Prepare for Jobs and
              Interviews.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
