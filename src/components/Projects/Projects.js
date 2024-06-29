import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import lyft from "../../Assets/Projects/lyft-cert.png";
import heatwaveprediction from "../../Assets/Projects/heatwave-prediction.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
