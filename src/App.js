import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Resume from "./components/Resume"

function App() {
  const [projects] = useState([
    {
      title: 'test1',
      // image: '',
      appLink: '',
      gitHubLink: '',
    },
    {
      title: 'test2',
      // image: '',
      appLink: '',
      gitHubLink: '',
    },
    {
      title: 'test3',
      // image: '',
      appLink: '',
      gitHubLink: '',
    },
    {
      title: 'test4',
      // image: '',
      appLink: '',
      gitHubLink: '',
    },
    {
      title: 'test5',
      // image: '',
      appLink: '',
      gitHubLink: '',
    },
    {
      title: 'test6',
      // image: '',
      appLink: '',
      gitHubLink: '',
    },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <div>
      <Nav>
      </Nav>
      <main>
      <About></About>
      <Contact></Contact>
      {/* <Projects
       projects={projects}
       setCurrentProject={setCurrentProject}
       currentProject={currentProject}
      ></Projects> */}
      {/* <Resume></Resume> */}
      </main>
    </div>
  );
}

export default App;
