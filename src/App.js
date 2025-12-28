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

      {/* Home */}
      <header id="home" className="App-header section-bg">
        <div className="logo-container">
          <img
            src="https://i.postimg.cc/TYdbn5Fj/Chat-GPT-Image-Dec-28-2025-04-53-32-PM-removebg-preview.png"
            alt="Suraj Kharade Logo"
            className="App-logo"
          />
          <div className="glow"></div>
        </div>

        <h1>Suraj Kharade</h1>
        <p>
          Video Editing Professional <br />
          Support Engineer <br />
          Creative Thinker
        </p>
      </header>

      {/* Projects */}
      <section id="projects" className="Projects section-bg">
        <h2>My Projects</h2>
        <ul>
          <li><a className="project-link" href="#" target="_blank">🎥 Cinematic Video</a></li>
          <li><a className="project-link" href="#" target="_blank">🎞️ Viral Video</a></li>
          <li><a className="project-link" href="#" target="_blank">🚗 Car & Bike Delivery</a></li>
          <li><a className="project-link" href="#" target="_blank">💍 Pre-Wedding Song</a></li>
        </ul>
      </section>

      {/* About – ALL 4 CHANGES */}
      <section id="about" className="About section-bg">
        <h2>About Me</h2>

        <div className="about-wrapper">
          {/* Left */}
          <div className="about-left">
            <p className="about-intro">
              नमस्कार 👋 मी <strong>सुरज खराडे</strong> —
              एक <span>Cinematic Video Editor</span> जो
              visuals मधून emotion आणि story create करतो.
            </p>

            <p className="about-sub">
              Clean cuts • Cinematic mood • Emotional storytelling
            </p>
          </div>

          {/* Right */}
          <div className="about-right">
            <div className="about-box">🎬 <h4>What I Do</h4><p>Wedding, Pre-Wedding, Cinematic & Social Media Videos</p></div>
            <div className="about-box">🛠️ <h4>Skills</h4><p>Premiere Pro<br/>CapCut<br/>Color Grading</p></div>
            <div className="about-box">🎥 <h4>Style</h4><p>Cinematic look with emotional flow</p></div>
            <div className="about-box">🚀 <h4>Goal</h4><p>Visually stunning & emotionally connecting content</p></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="Contact section-bg">
        <h2>Contact Me</h2>
        <ul>
          <li>📧 surajkharade000@gmail.com</li>
          <li>📸 Instagram: x.suraj__18</li>
          <li>▶️ YouTube: Suraj Editing</li>
          <li>📞 +91 97677 74450</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
