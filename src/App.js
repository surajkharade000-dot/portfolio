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
        <img
          src="https://via.placeholder.com/200"
          alt="Profile"
          className="App-logo"
        />
        <h1>Suraj Kharade</h1>
        <p>Video Editor | Support Engineer | Creative Thinker</p>
      </header>

      {/* Projects Section */}
      <section id="projects" className="Projects">
        <h2>My Projects</h2>
        <ul>
          <li>
            <a 
              href="https://youtu.be/yourVideoLink"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Cinematic Video
            </a>
          </li>
          <li>
            <a 
              href="https://drive.google.com/file/d/1X0I0rdiI3HT03Kjg11PjjffscwI_RYwj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Teaser
            </a>
          </li>
          <li>
            <a 
              href="https://yourEcommerceLink.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              E-commerce Web App
            </a>
          </li>
        </ul>
      </section>

      {/* About Section */}
      <section id="about" className="About">
        <h2>About Me</h2>
        <p>
          I'm a web developer with experience in React, JavaScript, and modern web technologies.
          I love creating clean, responsive, and user-friendly websites.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="Contact">
        <h2>Contact Me</h2>
        <p>You can reach me via email or social media:</p>
        <ul>
          <li>Email: <a href="surajkharade000@gmail.com" className="contact-link">surajkharade000@gmail.com</a></li>
          <li>Instagram: <a href="https://www.instagram.com/x.suraj__18?igsh=MjQ0MG43cmtsZmQw" target="_blank" rel="noopener noreferrer" className="contact-link">x.suraj__18</a></li>
          <li>youtube: <a href="https://youtube.com/@surajjediting?si=GE2jJcv8xB1yNi7q" target="_blank" rel="noopener noreferrer" className="contact-link">@surajjediting</a></li>
          <li>Mobile no.: <a href="9767774450" target="_blank" rel="noopener noreferrer" className="contact-link">9767774450</a></li>
        </ul>
      </section>

    </div>
  );
}

export default App;
