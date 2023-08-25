import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImFilm, ImBook, ImMusic, ImAirplane} from "react-icons/im";
import {} from 'react-icons'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gabriel Ribeiro </span>
            from <span className="purple"> Brasília, Brazil.</span>
            <br />I'm a full-stack Developer at Natura&Co.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImBook /> Studying Languages
            </li>
            <li className="about-activity">
              <ImFilm /> Watching Kung-fu Movies
            </li>
            <li className="about-activity">
              <ImAirplane /> Travelling
            </li>
            <li className="about-activity">
              <ImMusic /> Playing Guitar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “As you think, so shall you become”{" "}
          </p>
          <footer className="blockquote-footer">Lei Siu-Lung</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
