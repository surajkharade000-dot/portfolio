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

        <ul className="projects-list">
          <li>
            <a className="project-link" href="YOUR_LINK_HERE">
              🎥 Cinematic Video
            </a>
          </li>

          <li>
            <a className="project-link" href="YOUR_LINK_HERE">
              🎞️ Viral / Social Media Video
            </a>
          </li>

          <li>
            <a className="project-link" href="YOUR_LINK_HERE">
              💍 Pre-Wedding – Marathi Song
            </a>
          </li>

          <li>
            <a className="project-link" href="YOUR_LINK_HERE">
              💍 Pre-Wedding – Hindi Song
            </a>
          </li>

          <li>
            <a className="project-link" href="YOUR_LINK_HERE">
              💑 Engagement Video
            </a>
          </li>

          <li>
            <a className="project-link" href="YOUR_LINK_HERE">
              🎂 Birthday Cinematic Video
            </a>
          </li>

          <li>
            <a className="project-link" href="YOUR_LINK_HERE">
              💒 Wedding Highlight Film
            </a>
          </li>

          <li>
            <a className="project-link" href="YOUR_LINK_HERE">
              🎬 Wedding Teaser / Trailer
            </a>
          </li>

          <li>
            <a className="project-link" href="YOUR_LINK_HERE">
              📅 Save The Date Video
            </a>
          </li>

          <li>
            <a className="project-link" href="YOUR_LINK_HERE">
              ❤️ Anniversary Video
            </a>
          </li>

          <li>
            <a className="project-link" href="YOUR_LINK_HERE">
              🚗 Car & Bike Cinematic
            </a>
          </li>

          <li>
            <a className="project-link" href="YOUR_LINK_HERE">
              📱 Instagram Reels / Shorts
            </a>
          </li>
        </ul>
      </section>

      {/* About */}
      <section id="about" className="About section-bg">
        <h2>About Me</h2>

        <p className="about-intro">
          नमस्कार 👋 मी <strong>सुरज खराडे</strong> — एक Cinematic Video
          Editor जो visuals मधून emotion आणि story create करतो.
        </p>

        <p className="about-sub">
          Clean cuts • Cinematic mood • Emotional storytelling
        </p>
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
