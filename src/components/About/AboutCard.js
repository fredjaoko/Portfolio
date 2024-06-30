import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fredrick Jaoko </span>
            from <span className="purple"> Nairobi Kenya.</span>
            <br />
            I am currently a Data Science & Business Analytics Intern at The Sparks Foundation
            <br />
            I am also currently a student at Kenyatta University persuing my Bachelors in Finance.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Paint
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn new tools and technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Bowling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
