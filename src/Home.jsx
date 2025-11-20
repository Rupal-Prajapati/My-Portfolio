import React from 'react';

function Home() {
  return (
    // Use the same class name for styling consistency
    <section className="firstSection"> 
      <div className="leftSection">
        <h1>
          Hi, I'm <span>Rupal</span>
        </h1>
        <p>
          I am a passionate Web Developer who loves creating modern
          websites with smooth user experiences.
          I Eager to apply technical knowledge in real-world projects, adapt to new technologies, and contribute effectively to organizational growth.
        </p>
      </div>

      <div className="rightSection">
        <img src="src.png" alt="Profile Photo" />
      </div>
    </section>
  );
}

export default Home;