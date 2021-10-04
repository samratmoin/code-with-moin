import React from "react";
import { Accordion, Container } from "react-bootstrap";

const AccordionItem = () => {
  return (
    <div>
      <Container className="py-5">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Simple and Beginner friendly</Accordion.Header>
            <Accordion.Body>
              Time and time again, Moin's students praise his ability to break
              down complex topics into simple, digestible lessons that anyone
              can understand.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Clear and Concise Lessons</Accordion.Header>
            <Accordion.Body>
              Don't waste any more time on long, repetitive, and
              poorly-structured courses. Moin's lessons are concise, right to
              the point, and free of rambling and unnecessary buzzwords.
              Everything explained in plain English.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Fun and Engaging Lessons</Accordion.Header>
            <Accordion.Body>
              Moin is a perfectionist and is fully obsessed with the quality of
              his videos. Beautiful graphics, slides, and animations help you
              stay focused, remember, and better understand the materials.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Prepare for Jobs and Interviews</Accordion.Header>
            <Accordion.Body>
              Moin's perfectly organized, in-depth, and comprehensive courses
              are packed with real-world examples and exercises that prepare you
              for the job.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default AccordionItem;
