import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">

      {/* NAVBAR */}
      <nav className="Navbar">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* HOME */}
      <header id="home" className="App-header section-bg">
        <div className="logo-container">
          <div className="glow"></div>
          <img
            src="https://i.postimg.cc/xdrrd0Q0/ttt.png"
            alt="Cine Editvala Logo"
            className="App-logo"
          />
        </div>

        <h1>Cine Editvala</h1>
        <p>
          Video Editing Professional <br />
          Support Engineer <br />
          Creative Thinker
        </p>
      </header>

      {/* PROJECTS */}
      <section id="projects" className="section-bg">
        <h2>My Projects</h2>

        <ul className="projects-list">
          <li><a className="project-link" href="#" target="_blank">🎥 Cinematic Video</a></li>
          <li><a className="project-link" href="#" target="_blank">🎞️ Viral Reels</a></li>
          <li><a className="project-link" href="#" target="_blank">💍 Pre-Wedding</a></li>
          <li><a className="project-link" href="#" target="_blank">🎬 Wedding Film</a></li>
        </ul>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-bg">
        <h2>About Me</h2>

        <div className="about-wrapper">
          <div className="about-left">
            <p className="about-intro">
              नमस्कार 👋 मी <span>Cine Editvala</span> —  
              एक cinematic video editor जो emotion आणि story create करतो.
            </p>
            <p className="about-sub">
              Clean cuts • Cinematic mood • Emotional storytelling
            </p>
          </div>

          <div className="about-right">
            <div className="about-box">
              <h4>🎬 What I Do</h4>
              <p>Wedding & Cinematic Videos</p>
            </div>
            <div className="about-box">
              <h4>🛠️ Skills</h4>
              <p>Premiere Pro • CapCut • Color Grading</p>
            </div>
            <div className="about-box">
              <h4>🎥 Style</h4>
              <p>Cinematic & Emotional</p>
            </div>
            <div className="about-box">
              <h4>🚀 Goal</h4>
              <p>High-quality visual storytelling</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="Contact section-bg">
        <h2>Contact Me</h2>
        <ul style={{ listStyle: "none", marginTop: "1rem" }}>
          <li>📧 <a href="mailto:surajkharade000@gmail.com">surajkharade000@gmail.com</a></li>
          <li>📸 <a href="https://instagram.com/cineeditvala" target="_blank" rel="noreferrer">Instagram</a></li>
          <li>▶️ <a href="https://youtube.com/@cineeditvala" target="_blank" rel="noreferrer">YouTube</a></li>
          <li>📞 <a href="tel:+919767774450">+91 97677 74450</a></li>
        </ul>
      </section>

    </div>
  );
}

export default App;
