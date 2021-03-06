import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./projects.css"

function Projects() {
   const [portfolio] = useState([
    {
       title: "Sole Intentions",
       name: "sole",
       description: "Sole Intentions is a full stack e-commerce site designed for sneaker reselling. ",
       link: "https://soleintentions.herokuapp.com/",
       git: "https://github.com/1tbrooks1/sole_intentions",
     },
     {
      title: "Sole Intentions V2",
      name: "sole2",
      description: "A refactor to the original Sole Intentions site using the MERN Stack.",
      link: "https://sole-intentions.herokuapp.com/",
      git: "https://github.com/1tbrooks1/sole-REACTions",
    },
     {
       title: "Newsify",
       name: "newsify",
       description: "Your go to site for the latest news of YOUR choice.",
       link: "https://yoowook1207.github.io/Newsify/",
       git: "https://github.com/1tbrooks1/Newsify",
     },
     {
      title: "Work Day",
      name: "work-day",
      description: "An amazing scheduler for your regular work day.",
      link: "https://1tbrooks1.github.io/work-day/",
      git: "https://github.com/1tbrooks1/work-day",
    },
     {
       title: "Weather Dashboard",
       name: "weather",
       description: "A dashboard to illustrate and provide information for current and future forecasts.",
       link: "https://1tbrooks1.github.io/weather-dashboard/",
       git: "https://github.com/1tbrooks1/weather-dashboard",
     },
   ])
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {portfolio.map((project) => (
        <div >
          <Card className="m-5" border="primary" style={{ width: '17rem' }}>
            <Card.Img
              variant="top"
              src={require(`../../assets/images/${project.name}.png`)}
            />
            <Card.Body >
              <Card.Title className="d-flex justify-content-center">{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href={project.git} target='_blank'>GitHub Repository</Card.Link><br></br>
                <Card.Link href={project.link} target='_blank'>Link to Application</Card.Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default Projects;
