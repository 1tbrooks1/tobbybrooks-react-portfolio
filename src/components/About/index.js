import React from 'react'
import profPic from "../../assets/images/profPic.png"
import "./about.css"

function About() {
  return (
    <section className="d-flex justify-content-center align-items-center flex-wrap" >
      <h1 ></h1>
      <div>
      <img className="image d-block"  alt="profile" src={profPic}></img>
      <p>Hello, my name is Tobby Brooks and welcome to my portfolio.
      Currently, I'm an aspiring Full Stack Software Developer attending a Full Stack software<br></br>
      Developer bootcamp at George Washington University with a future completion date of early/mid May 2022.
      After completion of my course, I will be looking<br></br> 
      for full time employment as a software developer.</p>
      </div>
    </section>
  )
}

export default About;