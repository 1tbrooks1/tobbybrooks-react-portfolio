import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Footer from "./components/Footer"

function App() {
  const [page, setPage] = useState('');

  function currentPage() {
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
        return <About/>;
    }
  }

  return (
    <div>
      <header>
      <Navigation page={page} setPage={setPage} />
      </header>
      <main>
        <div>{currentPage(page)}</div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
