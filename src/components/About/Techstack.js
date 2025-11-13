import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiLinux } from "react-icons/di";
import { SiPython, SiKalilinux } from "react-icons/si";
import { FaShieldAlt, FaNetworkWired } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Primary Cybersecurity Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPython fontSize={"24px"} />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux fontSize={"24px"} />
        <div className="tech-icons-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">Hashcat</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired fontSize={"24px"} />
        <div className="tech-icons-text">Wireshark</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">SQLmap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">Metasploit</div>
      </Col>

      {/* Additional Cybersecurity Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">Burp Suite</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired fontSize={"24px"} />
        <div className="tech-icons-text">Nmap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">Hydra</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">Aircrack-ng</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux fontSize={"24px"} />
        <div className="tech-icons-text">Kali Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">Zscaler</div>
      </Col>

      {/* IoT & Additional Skills */}
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired fontSize={"24px"} />
        <div className="tech-icons-text">IoT Security</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">Zero Trust</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">Ethical Hacking</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired fontSize={"24px"} />
        <div className="tech-icons-text">Networking</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">Data Science</div>
      </Col>
    </Row>
  );
}

export default Techstack;