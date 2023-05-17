import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

import * as logos from "./experienceLogos";

import "./experiences.css";

function Experiences() {

  const experiences = [
    {
      "title": "SDE Intern",
      "organization": "Data Axle Solutions Pvt Ltd.",
      "organizationLogo": logos.dax,
      "duration": " 1 Feb 2023 - Present",
      "description": [],
      "skills": "React, Unit Testing",
      "experienceType": "Internship",
    },
    {
      "title": "Node Js Intern",
      "organization": "Celebel Technologies",
      "organizationLogo": logos.celebel,
      "duration": "1 June 2022 - 31 July 2022",
      "description": [],
      "skills": "Front-End Development, Git, User Interface Design, Bootstrap, REST APIs, React, JavaScript, Node Js",
      "experienceType": "Internship",
    },
    {
      "title": "Full Stack Android Developer",
      "organization": "CODEKUL Private Limited",
      "organizationLogo": logos.codekul,
      "duration": "1 June 2021 - 8 September 2021",
      "description": [
        "Built an API using Django Rest Framework for the EdTech startup.",
        "Scraped websites for course information and built production ready API",
      ],
      "skills": "Spring Boot, Advance Java, MYSQL, Retrofit, REST APIs, App Development, Java",
      "experienceType": "Internship",
    },
  ]

  return (
    <Container className="py-5 mt-5">
      <Particle />
      <div className="main-timeline">
        {
          experiences.map((experience, index) => {
            return (
              <div className={`timeline ${index % 2 === 0 ? "left" : "right"}`}>
                <ExperienceCard title={experience.title} duration={experience.duration} organization={experience.organization} description={experience.description} experienceType={experience.experienceType} skills={experience.skills} organizationLogo={experience.organizationLogo} disabledProps={["description"]} />
              </div>
            )
          })
        }
      </div>
    </Container>
  );
}

export default Experiences;