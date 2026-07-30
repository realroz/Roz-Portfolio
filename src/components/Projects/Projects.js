import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import greengpt from "../../Assets/Projects/GreenGPT.png";
import eprovider from "../../Assets/Projects/eProvider.png";
import homelab from "../../Assets/Projects/homelab.jpg";
import rozmap from "../../Assets/Projects/rozmap.png";
import rozipedia from "../../Assets/Projects/rozipedia.png";
import rozgpt from "../../Assets/Projects/rozgpt.png";

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
              imgPath={rozmap}
              isBlog={false}
              title="RozMap"
              description="RozMap is a fully offline map server I built for fun. It serves my own vector tiles and terrain data, so the whole thing keeps working with no internet connection at all. The web client supports place search, 3D view, and hillshaded terrain. It runs in a Docker container on my home server, behind nginx as a subdomain of my primary domain."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rozipedia}
              isBlog={false}
              title="Rozipedia"
              description="Rozipedia is my self-hosted Wikipedia clone. I run Kiwix in Docker against a full English Wikipedia ZIM archive, which gives me the complete encyclopedia (articles, images, and search) with zero internet dependency. Like my other services, it's a Docker container on my home server proxied through nginx as its own subdomain."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rozgpt}
              isBlog={false}
              title="RozGPT"
              description="RozGPT is my own private LLM service. I serve open source models with Ollama and put Open WebUI in front of them, giving me a ChatGPT style interface, including multimodal image understanding, that never sends my data to a third party. Both pieces run as Docker containers on my home server behind an nginx reverse proxy."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greengpt}
              isBlog={false}
              title="GreenGPT"
              description="GreenGPT is a React.js App that delivers a ChatGPT like application that can run on classified/disconnected networks. I use open source LLMs and serve the LLMs using Text Generation Web UI. I also added RAG to the project so users can ask specific questions about thier documents. Contact me for demo login."
              // ghLink="https://greengpt.rozinak.us"
              demoLink="https://greengpt.rozinak.us"
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
              description="My Homelab is a never ending experiment in IT. I set up a public facing network and a private network. On the public network I have a demo of GreenGPT and host numerous docker containers (such as the one where this website lives). I use Yacht to manage my containers."
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
