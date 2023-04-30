import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yash Agrawal </span>
            from <span className="purple"> Pune, India.</span>
            <br />I am a B.Tech Final year student from MIT AOE currently
            working as a Software Developer Intern at Data Axle India.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Wathcing Cricket Matches
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking
            </li>
            <li className="about-activity">
              <ImPointRight /> Poetry
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
