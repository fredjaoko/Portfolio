import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BCG from "../../Assets/Projects/BCG-cert.png";
import lyft from "../../Assets/Projects/lyft-cert.png";
import heatwaveprediction from "../../Assets/Projects/heatwave-prediction.png";
import insurancefraud from "../../Assets/Projects/Insurance-Fraud.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heatwaveprediction}
              isBlog={false}
              title="Heatwave Prediction"
              description="Predicting the occurence of heatwaves in Kenya using machine learning. In this project I used weather data from the metoerstat Api to forecast the maximum temperature over time. The model I used is an artificial neural network(LSTM) with as it had proven to be the best approach by many researchers"
              ghLink="https://github.com/freddyjaoko/heatwave-prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insurancefraud}
              isBlog={false}
              title="Insurance Fraud Detection"
              description="An end to end project using machine learning to detect fraud in insurance claims. "
              ghLink="https://github.com/freddyjaoko/insurance-fraud-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lyft}
              isBlog={false}
              title="Back-end Engineering internship @ Lyft"
              description="This project is a virtual internship on forage by Lyft(a popular ridesharing company). In this project I implimented a backend system from the design stage upto implimentation and testing."
              ghLink="https://github.com/freddyjaoko/lyft-backend-engineering-virtual-internship"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BCG}
              isBlog={false}
              title="Data Science virtual Job simulation @ Boston Consulting group"
              description="In this virtual job simulation I undertook task as a Data science consultant at Boston consulting group consulting for a power and gas conmpany who was concerned about losing customers. I undertook exploratory data analysis, feature engineering and modelling to predict customer churn."
              ghLink="https://github.com/freddyjaoko/BCG_job_simulation"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
