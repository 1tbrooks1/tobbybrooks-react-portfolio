import React from 'react'
import profPic from "../../assets/images/profPic.png"

function About() {
  return (
    <section >
      <h1 className="d-flex justify-content-center align-items-center flex-wrap">About Me</h1>
      <div className="">
      <img className="mx-auto d-block rounded" style={{ width: "16%" }} alt="profile" src={profPic}></img>
      <p className='text-center'>Hello, my name is Tobby Brooks and welcome to my portfolio.
      Currently, I'm an aspiring Full Stack Software Developer attending a Full Stack software<br></br>
      Developer bootcamp at George Washington University with a future completion date of early/mid May 2022.
      After completion of my course, I will be looking<br></br> 
      for full time employment as a software developer.</p>
      </div>
    </section>
  )
}

export default About;