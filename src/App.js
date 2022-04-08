import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Resume from "./components/Resume"

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
      <About></About>
      <Contact></Contact>
      <Projects></Projects>
      {/* <Resume></Resume> */}
      </main>
    </div>
  );
}

export default App;
