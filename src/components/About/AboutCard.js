import React from "react";
import Card from "react-bootstrap/Card";
import { LuChefHat } from "react-icons/lu";
import { 
  FaCamera,
  FaServer
 } from "react-icons/fa";
import { IoTelescopeOutline } from "react-icons/io5";
import { PiBackpack } from "react-icons/pi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Geoffrey Rozinak </span>
            from good old <span className="purple"> Fayetteville, NC. </span>
          
            I am currently employed as a software developer at the US Army.
           
            I have a varied background focusing on leadership and general 
           
            engineering. I am a formerly trained automotive technician. A
           
            US Army Officer in the Reserves. Most importanly, I am a software
            
            professional. Most of my experience is in engineering, but 
           
            I have spent several years leading software teams as a product
           
            manager as well. I am currently focusing on delivering a ChatGPT
           
            like experience to classified (intranet) networks. FYI... this site
            
            is self-hosted on my home-lab. 😁 
            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <LuChefHat /> Cooking/BBQ
            </li>
            <li className="about-activity">
              <IoTelescopeOutline /> Astrophotography
            </li>
            <li className="about-activity">
              <FaCamera /> Photography
            </li>
            <li className="about-activity">
              <PiBackpack /> Traveling
            </li>
            <li className="about-activity">
              <FaServer /> Nerding Out In My Home-lab
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "If I just want to stay warm, don't build me a space ship! Just build me a fire."{" "}
          </p>
          <footer className="blockquote-footer">Rozinak... Thank you Dave.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
