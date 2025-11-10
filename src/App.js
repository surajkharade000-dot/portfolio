import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="Navbar">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Home Section */}
      <header id="home" className="App-header">
        <div className="logo-container">
          <img
            src="https://i.postimg.cc/1tHS3fJ1/59993AE2-2E20-4810-93B3-F7285015B6F5.png"
            alt="Suraj Kharade Logo"
            className="App-logo"
          />
          <div className="glow"></div>
        </div>

        <h1>Suraj Kharade</h1>
        <p>Video Editing Professional | Support Engineer | Creative Thinker</p>
      </header>

      {/* Projects Section */}
      <section id="projects" className="Projects">
        <h2>My Projects</h2>
        <ul>
          <li>
            <a
              href="https://drive.google.com/file/d/1auKON7EGxGNR8pch2nTxTHxtymt8QxzL/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Cinematic Video
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1rirlcByJ7K2qcU5XCgY8MbBgCwJKiBi3?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Teaser
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Traditional Video
            </a>
          </li>
        </ul>
      </section>

      {/* About Section */}
      <section id="about" className="About">
        <h2>About Me</h2>
        <p>
          I'm a passionate video editor and support engineer who loves blending
          technology with creativity. My focus is to make cinematic, clean, and
          emotionally powerful visuals.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="Contact">
        <h2>Contact Me</h2>
        <p>Let's connect — feel free to reach out anytime!</p>
        <ul>
          <li>
            Email:{" "}
            <a
              href="mailto:surajkharade000@gmail.com"
              className="contact-link"
            >
              surajkharade000@gmail.com
            </a>
          </li>
          <li>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/x.suraj__18?igsh=MjQ0MG43cmtsZmQw"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              x.suraj__18
            </a>
          </li>
          <li>
            YouTube:{" "}
            <a
              href="https://youtube.com/@surajjediting?si=GE2jJcv8xB1yNi7q"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              YouTube Channel
            </a>
          </li>
          <li>
            Mobile:{" "}
            <a href="tel:+919767774450" className="contact-link">
              +91 97677 74450
            </a>
          </li>
        </ul>

        <a
          href="https://drive.google.com/uc?export=download&id=1zxMILz3SC9wwOyVlTw15T9nHvppbWmvQ"
          className="resume-btn"
        >
          Download Resume
        </a>
      </section>
    </div>
  );
}

export default App;
