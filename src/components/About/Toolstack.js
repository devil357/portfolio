import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiLinux } from "react-icons/di";
import { SiKalilinux, SiVirtualbox, SiVmware } from "react-icons/si";
import { FaShieldAlt, FaNetworkWired } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux fontSize={"24px"} />
        <div className="tech-icons-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux fontSize={"24px"} />
        <div className="tech-icons-text">Kali Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVirtualbox fontSize={"24px"} />
        <div className="tech-icons-text">VirtualBox</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVmware fontSize={"24px"} />
        <div className="tech-icons-text">VMware</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">Burp Suite</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired fontSize={"24px"} />
        <div className="tech-icons-text">Wireshark</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">Metasploit</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">Nmap</div>
      </Col>
    </Row>
  );
}

export default Toolstack;