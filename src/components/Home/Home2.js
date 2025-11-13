import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate <span className="purple">Cybersecurity Enthusiast</span> currently pursuing my B.E. in Computer Science and Engineering with a specialization in Cyber Security.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Linux, Ethical Hacking Tools, and Network Security{" "}
                </b>
              </i>
              — with hands-on experience through various trainings and internships.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Ethical Hacking, IoT Security, Zero Trust Architecture,{" "}
                </b>
              </i>
              and exploring new ways to secure digital infrastructure against emerging threats.
              <br />
              <br />
              I actively work with cybersecurity tools like
              <b className="purple"> Wireshark, Metasploit, Burp Suite, Nmap </b> and 
              <i>
                <b className="purple"> Hashcat</b> for penetration testing and vulnerability assessment.
              </i>
              <br />
              <br />
              Through my internships in <b className="purple">Data Science</b> and <b className="purple">IoT</b>, 
              I've developed a comprehensive understanding of security challenges across different technology domains.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to connect with me to discuss{" "}
              <span className="purple">cybersecurity, ethical hacking, </span> or{" "}
              <span className="purple">collaborative projects.</span>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;