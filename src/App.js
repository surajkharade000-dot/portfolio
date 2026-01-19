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
        {/* LOGO TEMPORARILY OFF */}
        {/*
        <div className="logo-container">
          <img
            src="https://i.postimg.cc/TYdbn5Fj/Chat-GPT-Image-Dec-28-2025-04-53-32-PM-removebg-preview.png"
            alt="Suraj Kharade Logo"
            className="App-logo"
          />
          <div className="glow"></div>
        </div>
        */}

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
            <a className="project-link" href="https://drive.google.com/file/d/1Ask2iZsBJilB5ZxpZmicz9_vyO0utd9x/view" target="_blank" rel="noopener noreferrer">
              🎥 Cinematic Video
            </a>
          </li>

          <li>
            <a className="project-link" href="https://drive.google.com/drive/folders/1w3pw8J0BndyfAqfoboVw1fV8KSdyx5FZ" target="_blank" rel="noopener noreferrer">
              🎞️ Viral / Social Media Video
            </a>
          </li>

          <li>
            <a className="project-link" href="https://drive.google.com/file/d/1Ohs4dI2sIgO3OW_EKM1Jq0jBjSDvMTea/view" target="_blank" rel="noopener noreferrer">
              💍 Pre-Wedding – Hindi Song
            </a>
          </li>

          <li>
            <a className="project-link" href="https://drive.google.com/file/d/1X7bkd6dunG5l0yI5pQ1-HqmaV64_CZCi/view" target="_blank" rel="noopener noreferrer">
              💍 Pre-Wedding – Marathi Song
            </a>
          </li>

          <li>
            <a className="project-link" href="https://drive.google.com/file/d/1KhabPzYYO9nA5pjsNoWQ_TbMFpFULjNt/view" target="_blank" rel="noopener noreferrer">
              👶 Baby Shoot Reel
            </a>
          </li>

          <li>
            <a className="project-link" href="https://drive.google.com/file/d/1sEJULFktQEuMu8cKU6b5j2TiuNCpa4f9/view" target="_blank" rel="noopener noreferrer">
              💑 Engagement Video
            </a>
          </li>

          <li>
            <a className="project-link" href="https://drive.google.com/file/d/1GxuO6HPwqP9S1H2COPYE_xsFCI6ZOs4R/view" target="_blank" rel="noopener noreferrer">
              🎂 Birthday Cinematic Video
            </a>
          </li>

          <li>
            <a className="project-link" href="https://drive.google.com/file/d/19UZuhyfy2QRpYNuWPBnFOuxBznqzz_nt/view" target="_blank" rel="noopener noreferrer">
              💒 Wedding Highlight Film
            </a>
          </li>

          <li>
            <a className="project-link" href="https://drive.google.com/file/d/1w_1MFqau8ne0Zf2AM87Pv0i84xJI1_8b/view" target="_blank" rel="noopener noreferrer">
              🎬 Wedding Teaser / Trailer
            </a>
          </li>

          <li>
            <a className="project-link" href="https://drive.google.com/file/d/1me5G6k6ITlsbVdeajW1r8eR_065HYDk5/view" target="_blank" rel="noopener noreferrer">
              📅 Save The Date Video
            </a>
          </li>

          <li>
            <a className="project-link" href="https://drive.google.com/file/d/1eD8NbBIY0Ykex-rk3i53fUsbRZZOrx3Q/view" target="_blank" rel="noopener noreferrer">
              ❤️ Reception Video
            </a>
          </li>

          <li>
            <a className="project-link" href="https://drive.google.com/file/d/1pczhFo7lLiF4IBB1tIPg-wshlTP_MTjz/view" target="_blank" rel="noopener noreferrer">
              🕺💃 Sangeet
            </a>
          </li>

          <li>
            <a className="project-link" href="https://drive.google.com/file/d/11k0ttpwDw7BKoWprzOWnr6xeLuIHck8k/view" target="_blank" rel="noopener noreferrer">
              ❤️ Retro
            </a>
          </li>
        </ul>
      </section>

      {/* About */}
      <section id="about" className="About section-bg">
        <h2>About Me</h2>

        <p>
          नमस्कार 👋 मी <strong>सुरज खराडे</strong> — एक Cinematic Video Editor जो
          visuals मधून emotion आणि story create करतो.
        </p>

        <p>Clean cuts • Cinematic mood • Emotional storytelling</p>
      </section>

      {/* Contact */}
      <section id="contact" className="Contact section-bg">
        <h2>Contact Me</h2>
        <ul>
          <li>📧 <a href="mailto:surajkharade000@gmail.com">surajkharade000@gmail.com</a></li>
          <li>📸 <a href="https://instagram.com/x.suraj__18" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li>▶️ <a href="https://www.youtube.com/@surajjediting" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          <li>📞 <a href="tel:+919767774450">+91 97677 74450</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
