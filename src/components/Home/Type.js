import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cybersecurity Enthusiast",
          "Ethical Hacking Student",
          "IoT Security Researcher",
          "Python Developer",
          "Network Security Analyst",
          "Zero Trust Advocate",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;