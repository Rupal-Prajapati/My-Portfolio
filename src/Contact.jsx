import React from 'react';

function Contact() {
  return (
    <section className="contactSection section" id="contact"> 
      <h2>👋 Contact Me</h2>
      <p>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
      
      <div className="contactDetails">
        <p>📞Phone: <a href="tel:7830061534">7830061534</a></p>
        <p>📧Email: <a href="mailto:prajapati.rupal4533@gmail.com">prajapati.rupal4533@gmail.com</a></p>
      </div>

      <a href="mailto:prajapati.rupal4533@gmail.com" className="btn">Send a Message</a>
      
      <div className="socialLinks">
        <h3>Connect with me:</h3>
        <p>
          <a href="https://www.linkedin.com/in/rupal-prajapati-583a55249" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a> | 
          <a href="https://github.com/Rupal-Prajapati" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;