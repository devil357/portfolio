import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">DHARAN D</span>{" "}
            from <span className="purple">Dharmapuri, India</span>.
            <br />
            I'm currently pursuing my{" "}
            <span className="purple">B.E. in Computer Science and Engineering (Cyber Security)</span> at{" "}
            <span className="purple">Sengunthar Engineering College</span> with a CGPA of 7.89.
            <br />
            I'm a dedicated cybersecurity enthusiast with strong foundational knowledge in ethical hacking, data science, and IoT.
            <br />
            <br />
            Outside of cybersecurity, I love engaging in activities that keep me
            motivated and learning:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in Cybersecurity Events & Workshops 🛡️
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Security Tools and Techniques 🔍
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on IoT and Data Science Projects 🤖
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build secure systems that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">DHARAN D</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;