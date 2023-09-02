import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Full-stack Social Network"
              description="Full-stack application (Front-end, Back-end, and Mobile) of a social network called PARROT 🦜. There are also implementations of Swagger, containerization, buckets and message brokers.The Backend part has two versions: one in Node.js and another in Java"
              ghLink="https://github.com/bc-fullstack-02/Gabriel-Ribeiro"
              demoLink="https://github.com/Gahbr/Rede-Social-Java-Spring"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="URL-Shortener"
              description= "URL shortener microservice in NodeJS - ExpressJS - MongoDB"
              ghLink="https://github.com/Gahbr/URL-Shortener"
              demoLink="https://shorten.up.railway.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sales Report"
              description="Application that makes a report of the sales made by the sellers, filtered according to the date chosen by the user and also with an option to send an SMS with the data of the chosen seller."
              ghLink="https://github.com/Gahbr/dsmeta"
              demoLink="https://dsmeta-page.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Covid Tracker Application"
              description="Java Spring Boot application that track reported data of confirmed Coronavirus infections COVID-19 (2019-nCoV) around the world."
              ghLink="https://github.com/Gahbr/covid-tracker-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="To-do App"
              description="CRUD application for project managing and the tasks envolved in those projects. This application was made on Java Swing."
              ghLink="https://github.com/Gahbr/Todo-App-Java"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={true}
              title="Other Projects"
              description="Click on the link above to see my other projects that I'm constantly building and updating!"
              ghLink="https://github.com/Gahbr?tab=repositories"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
