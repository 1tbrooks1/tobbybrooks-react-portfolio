import React from "react";
import { capitalizeFirstLetter } from '../utils/helper';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap'


function Projects(props) {
  const {
    projects = [],
    setCurrentProject,
    currentProject,
  } = props;
  
  return (
    <section>
{projects.map((project) => (
  <li
  key={project.title}
  />
))}
<span>
    {project.title}
  </span>
  </section>
  );
}
export default Projects;
