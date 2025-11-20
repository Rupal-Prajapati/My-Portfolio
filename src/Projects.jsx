import React from 'react';

function Projects() {
  const projectData = [
    { 
      title: "Online Quiz application ", 
      description: "Designed a web-based platform for creating, managing, and administering online quizzes and Implemented secure login/registration, real-time results, and analytics. Developed a responsive UI for seamless use across devices. ", 
      tech: "HTML, CSS, JavaScript",
      link: "#"
    },
    { 
      title: "eVoting System", 
      description: "Developed a secure and transparent digital voting platform. Implemented user authentication, candidate selection, and vote counting features and Focused on database security and preventing duplicate votes. ", 
      tech: "HTML, CSS, JavaScript",
      link: "#"
    },
    { 
      title: "Portfolio Website", 
      description: "In this project, I created a personal portfolio website where I can professionally present my skills, education, and projects and which means it works properly on mobile, tablet, and desktop devices", 
      tech: "React, CSS Modules",
      link: "#"
    },
  ];

  return (
    <section className="projectsSection section" id="projects">
      <h2>🚀 Projects</h2>
      <div className="projectsList">
        {projectData.map((project, index) => (
          <div key={index} className="projectCard">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="techStack">Technologies used: {project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;