import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Projects() {
  // const [projects] = useState([
  //   {
  //     title: "Sole Intentions",
  //    image: "",
  //     description: "",
  //     link: "https://soleintentions.herokuapp.com/",
  //     git: "https://github.com/1tbrooks1/sole_intentions",
  //   },
  //   {
  //     title: "Newsify",
  //    image: "",
  //     description: "",
  //     link: "https://yoowook1207.github.io/Newsify/",
  //     git: "https://github.com/1tbrooks1/Newsify",
  //   },
  //   {
  //     title: "Budget Tracker",
  //    image: "",
  //     description: "",
  //     link: "https://financialmonitor.herokuapp.com/",
  //     git: "https://github.com/1tbrooks1/tb-budget-tracker",
  //   },
  //   {
  //     title: "Note Taker",
  //    image: "",
  //     description: "",
  //     link: "https://tb-note-taker-app.herokuapp.com/",
  //     git: "https://github.com/1tbrooks1/tb-note-taker",
  //   },
  //   {
  //     title: "Weather Dashboard",
  //    image: "",
  //     description: "",
  //     link: "https://1tbrooks1.github.io/weather-dashboard/",
  //     git: "https://github.com/1tbrooks1/weather-dashboard",
  //   },
  //   {
  //     title: "Work Day",
  //    image: "",
  //     description: "",
  //     link: "https://1tbrooks1.github.io/work-day/",
  //     git: "https://github.com/1tbrooks1/work-day",
  //   },
  // ])

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default Projects;
