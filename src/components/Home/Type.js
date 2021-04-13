import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "WordPress Developer",
          "Digital Designer",
          "UI/UX Designer",
          "Logo & Brochure Designs",
          "Domain Name & Hosting",
          "Facebook™ & Google™ ads"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
