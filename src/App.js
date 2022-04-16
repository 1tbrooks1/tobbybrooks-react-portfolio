import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Footer from "./components/Footer"

function App() {
  const [page, setPage] = useState('');

  const currentPage = () => {
    switch (page) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        null;
    }
  }

  return (
    <div>
      <Nav page={page} setPage={setPage} />
      <main>
      <Resume></Resume>
      </main>
    </div>
  );
}

export default App;
