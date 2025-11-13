import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import networkMapper from "../../Assets/Projects/network-mapper.png";
import smartSurveillance from "../../Assets/Projects/smart-surveillance.png";
import aptDetection from "../../Assets/Projects/apt-detection.png";
import ethicalHacking from "../../Assets/Projects/ethical-hacking.png";
import iotSecurity from "../../Assets/Projects/iot-security.png";
import dataScience from "../../Assets/Projects/data-science.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Cybersecurity <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Hands-on security projects demonstrating my skills in network security, IoT systems, and advanced threat detection.
        </p>
        
        <h3 className="project-subheading" style={{ color: "white", marginTop: "30px", marginBottom: "20px" }}>
          <strong className="purple">Major Project</strong>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={aptDetection}
              isBlog={false}
              title="Advanced Persistent Threat (APT) Detection Using Machine Learning and Network Flow Analysis"
              description="Developed a comprehensive APT detection system that combines machine learning algorithms with network flow analysis to identify sophisticated cyber threats. The system analyzes network traffic patterns, detects anomalies, and uses classification models to identify potential APT activities in real-time, providing early warning of targeted attacks."
              ghLink="https://github.com/devil357"
              demoLink="https://github.com/devil357"
            />
          </Col>
        </Row>

        <h3 className="project-subheading" style={{ color: "white", marginTop: "30px", marginBottom: "20px" }}>
          <strong className="purple">Mini Projects</strong>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={networkMapper}
              isBlog={false}
              title="Network Mapping Analyzer"
              description="A comprehensive network discovery and mapping tool that scans and visualizes network topology. Identifies active devices, open ports, services, and network relationships. Provides detailed reports on network structure and potential security vulnerabilities for better network management and security assessment."
              ghLink="https://github.com/devil357"
              demoLink="https://github.com/devil357"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={smartSurveillance}
              isBlog={false}
              title="Smart Surveillance System using PIR Sensor"
              description="An IoT-based intelligent surveillance system that uses PIR (Passive Infrared) sensors for motion detection. The system automatically triggers alerts and recordings when motion is detected, providing efficient security monitoring with low power consumption. Includes remote monitoring capabilities and real-time alert notifications."
              ghLink="https://github.com/devil357"
              demoLink="https://github.com/devil357"
            />
          </Col>
        </Row>

        <h3 className="project-subheading" style={{ color: "white", marginTop: "30px", marginBottom: "20px" }}>
          <strong className="purple">Training Projects</strong>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ethicalHacking}
              isBlog={false}
              title="Ethical Hacking Lab Exercises"
              description="Hands-on penetration testing exercises from Novitech R&D training. Practiced vulnerability assessment, exploitation techniques, and security auditing using industry-standard tools in controlled lab environments."
              ghLink="https://github.com/devil357"
              demoLink="https://github.com/devil357"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iotSecurity}
              isBlog={false}
              title="IoT Security Analysis"
              description="Security assessment of IoT devices and systems, analyzing communication protocols, device vulnerabilities, and implementing security controls for connected devices."
              ghLink="https://github.com/devil357"
              demoLink="https://github.com/devil357"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataScience}
              isBlog={false}
              title="Security Data Analysis with Python"
              description="Python-based security data analysis from Emglitz Technology internship. Developed scripts for log analysis, threat pattern detection, and security metrics visualization."
              ghLink="https://github.com/devil357"
              demoLink="https://github.com/devil357"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;