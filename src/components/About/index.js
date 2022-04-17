import React from 'react'
import profPic from "../../assets/images/profPic.jpg"

function About() {
  return (
    <section className="d-flex justify-content-center align-items-center flex-wrap">
      <h1 className="pt-5">About Me</h1>
      <div className="">
      <img className="mx-auto d-block rounded pt-2" style={{ width: "25%" }} alt="profile" src={profPic}></img>
      <p className="text-center pt-4">Hello, my name is Tobby Brooks and welcome to my portfolio.
      Currently, I'm an aspiring Full Stack Software Developer attending a Full Stack Software
      Developer bootcamp and George Washington University with a future completion date of early/mid May 2022.
      After completion of my course, I will be looking for full time employment as a software developer.</p>
      </div>
    </section>
  )
}

export default About;