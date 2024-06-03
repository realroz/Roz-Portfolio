import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

const Footer = ({setFooterVisible}) => {
  let date = new Date();
  let year = date.getFullYear();

  const handleFooterClick = () => {
    setFooterVisible(false);
  }

  useEffect(() => {
    setTimeout(()=> {
      setFooterVisible(false);
    }, "5000");
  }, [])

  return (
    <Container fluid className="footer">
      <div className="footer-container">
       
          <div className="footer-close" onClick={() => handleFooterClick()}>
            <IoCloseCircle /> 
          </div>
 
       
        <div className="footer-copywright">
          <h3>Special Thanks to Soumyajit Behera for creating this template... oh and obviously modified by yours truly.</h3>
        </div>

        <div className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>    
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
