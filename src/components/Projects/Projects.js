import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import greengpt from "../../Assets/Projects/GreenGPT.png";
import eprovider from "../../Assets/Projects/eProvider.png";
import homelab from "../../Assets/Projects/homelab.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greengpt}
              isBlog={false}
              title="GreenGPT"
              description="GreenGPT is a React.js App that delivers a ChatGPT like application that can run on classified/disconnected networks. I use open source LLMs and serve the LLMs using Text Generation Web UI. I also added RAG to the project so users can ask specific questions about thier documents. "
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eprovider}
              isBlog={false}
              title="eProvider"
              description="eProvider was the first app that I delivered at scale. It was in use from 2013-2015. It was a MS Access app that helped different offices route paperwork at the Brigade I was in while on Active Duty. The problem it solved was Soldiers losing paperwork that needed processing in mountains of emails."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homelab}
              isBlog={false}
              title="My Homelab"
              description="My Homelab is a never ending experiment in IT. I set up a public facing network and a private network. Ive added Nextcloud and a media server to my private network. On the public network I have a demo of GreenGPT and host numerous docker containers (such as the one where this website lives). I use Yacht to manage my containers."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
