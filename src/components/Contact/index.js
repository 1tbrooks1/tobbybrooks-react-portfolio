import React, { useState } from "react";

function Contact() {
  return (
    <section>
      <h1>Contact Me</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="text"
          name = "email" />
        </div>
        <div>
          <label htmlFor="message">message:</label>
          <textarea 
          name = "message"
          rows = "5" />
        </div>
        <button type = "submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
