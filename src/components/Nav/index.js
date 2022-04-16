import React from "react";

function Nav({setPage}) {
  return (
    <div>
      <a href="#about" onClick={() =>{setPage('About')}}>About</a>
      <a href="#projects" onClick={() =>{setPage('Projects')}}>Projects</a> 
      <a href="#resume" onClick={() =>{setPage('Resume')}}>Resume</a> 
      <a href="#contact" onClick={() =>{setPage('Contact')}}>Contact</a>  
   </div>
  );
}

export default Nav;
