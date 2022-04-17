import React from "react";
import "./style.css";
import resume from "../../assets/documents/Resume.pdf";

function Resume() {
  return (
    <div className="text-center mb-20">
      <section id="skills">
        <div className="container px-5 py-10 mx-auto">
          <div className="">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
              Resume and Skills
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Throughout my bootcamp, I learned an immense amount of
              technologies and skills.<br></br>
              This is a list of everything I've learned about and worked with
              hands on.<br></br>
              You can also download my resume from this link{" "}
              <a href={resume} download target="_blank" rel="noreferrer">
                here
              </a>
              .
            </p>
            <h2>Front-End</h2>
            <ul>
              <li>HTML5/CSS</li>
              <li>JavaScript/jQuery</li>
              <li>Responsive Design</li>
              <li>Bootstrap</li>
              <li>Handlebars</li>
              <li>Local Storage, Session Storage, IndexedDB</li>
              <li>React.js</li>
              <li>JSON</li>
            </ul>
            <h2>Back-End</h2>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>NoSQL</li>
              <li>User Authentication</li>
              <li>Regex</li>
              <li>Progressive Web Applications (PWAs)</li>
              <li>Single Page Applications (SPA's)</li>
              <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            </ul>
            <h2>Deployment & Version Control</h2>
            <ul>
              <li>GitHub</li>
              <li>GitHub Pages</li>
              <li>Heroku</li>
              <li>Mongo Atlas</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Resume;
