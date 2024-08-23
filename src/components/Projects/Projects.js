import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BCG from "../../Assets/Projects/BCG-cert.png";
import lyft from "../../Assets/Projects/lyft-cert.png";
import nycdashboard from "../../Assets/Projects/SUMMARY.png";
import insurancefraud from "../../Assets/Projects/Insurance-Fraud.jpg";
import stockmarket from "../../Assets/Projects/stock-market.avif";
import databricks from "../../Assets/Projects/databricks-kl.png";

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
              imgPath={nycdashboard}
              isBlog={false}
              title="🚕 Performing Data Analytics on NYC Taxi data using GCP and MageAI "
              description="The goal of this project is to perform data analytics on NYC Taxi Trip Records using various tools and technologies, including GCP Storage, Python, Compute Instance, Mage Data Pipeline Tool, BigQuery, and Looker Studio."
              ghLink="https://github.com/fredjaoko/NYC-Taxi-Analytics-GCP"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={databricks}
              isBlog={false}
              title="Employee Attrition Analysis Using SparkSQL on Databricks"
              description="Analysis of employee data using Apache Spark on Databricks to derive insights about customer attrition."
              ghLink="https://github.com/fredjaoko/Employee-attrition-analysis-using-sparkSQL-on-Databricks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockmarket}
              isBlog={false}
              title="Stock Market Prediction Using Daily News Headlines"
              description="This project is about predicting the BSE SENSEX index on the Mumbai stock exchange in India using daily news headlines. The stock market data of each day is collected from Yahoo finance. Combined both datasets to process and applied modeling techniques to get desired results. Different NLP techniques and machine learning models are used to address the problem defined."
              ghLink="https://github.com/fredjaoko/stock-market-prediction-using-daily-news-headlines"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insurancefraud}
              isBlog={false}
              title="Insurance Fraud Detection"
              description="An end to end project using machine learning to detect fraud in insurance claims. "
              ghLink="https://github.com/fredjaoko/insurance-fraud-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lyft}
              isBlog={false}
              title="Back-end Engineering internship @ Lyft"
              description="This project is a virtual internship on forage by Lyft(a popular ridesharing company). In this project I implimented a backend system from the design stage upto implimentation and testing."
              ghLink="https://github.com/fredjaoko/lyft-backend-engineering-virtual-internship"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BCG}
              isBlog={false}
              title="Data Science virtual Job simulation @ Boston Consulting group"
              description="In this virtual job simulation I undertook task as a Data science consultant at Boston consulting group consulting for a power and gas conmpany who was concerned about losing customers. I undertook exploratory data analysis, feature engineering and modelling to predict customer churn."
              ghLink="https://github.com/fredjaoko/BCG_job_simulation"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
