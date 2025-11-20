import React from 'react';

function Skills() {
  const skillsList = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Redux", ] },
    { category: "Backend", items: ["Python", ] },
    { category: "Databases", items: ["MySQL"] },
    { category: "Tools & Others", items: ["Git", "GitHub", "VS Code", "MS Word", ] },
  ];

  return (
    <section className="skillsSection section" id="skills">
      <h2>🛠️ Skills</h2>
      <div className="skillsGrid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skillCategory">
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;