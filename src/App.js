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
            alt="Cine Editvala Logo"
            className="App-logo"
          />
          <div className="glow"></div>
        </div>

        <h1>Cine editvala</h1>
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
    {/* Existing */}
    <li>
      <a
        className="project-link"
        href="https://drive.google.com/file/d/1Ask2iZsBJilB5ZxpZmicz9_vyO0utd9x/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎥 Cinematic Video
      </a>
    </li>

    <li>
      <a
        className="project-link"
        href="https://drive.google.com/drive/folders/1w3pw8J0BndyfAqfoboVw1fV8KSdyx5FZ?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎞️ Viral / Social Media Video
      </a>
    </li>

    <li>
      <a
        className="project-link"
        href="https://drive.google.com/file/d/1Ohs4dI2sIgO3OW_EKM1Jq0jBjSDvMTea/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        💍 Pre-Wedding – Hindi Song
      </a>
    </li>

    {/* Pre-Wedding */}
    <li>
      <a
        className="project-link"
        href="https://drive.google.com/file/d/1X7bkd6dunG5l0yI5pQ1-HqmaV64_CZCi/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        💍 Pre-Wedding – Marathi Song
      </a>
    </li>

    <li>
      <a
        className="project-link"
        href="https://drive.google.com/file/d/1KhabPzYYO9nA5pjsNoWQ_TbMFpFULjNt/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        👶 baby shoot reel 
      </a>
    </li>

    {/* New */}
    <li>
      <a
        className="project-link"
        href="https://drive.google.com/file/d/1sEJULFktQEuMu8cKU6b5j2TiuNCpa4f9/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        💑 Engagement Video
      </a>
    </li>

    <li>
      <a
        className="project-link"
        href="https://drive.google.com/file/d/1GxuO6HPwqP9S1H2COPYE_xsFCI6ZOs4R/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎂 Birthday Cinematic Video
      </a>
    </li>

    <li>
      <a
        className="project-link"
        href="https://drive.google.com/file/d/19UZuhyfy2QRpYNuWPBnFOuxBznqzz_nt/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        💒 Wedding Highlight Film
      </a>
    </li>

    <li>
      <a
        className="project-link"
        href="https://drive.google.com/file/d/1w_1MFqau8ne0Zf2AM87Pv0i84xJI1_8b/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎬 Wedding Teaser / Trailer
      </a>
    </li>

    <li>
      <a
        className="project-link"
        href="https://drive.google.com/file/d/1me5G6k6ITlsbVdeajW1r8eR_065HYDk5/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        📅 Save The Date Video
      </a>
    </li>

    <li>
      <a
        className="project-link"
        href="https://drive.google.com/file/d/1eD8NbBIY0Ykex-rk3i53fUsbRZZOrx3Q/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        ❤️ Reception Video
      </a>
    </li>

    <li>
      <a
        className="project-link"
        href="https://drive.google.com/file/d/1pczhFo7lLiF4IBB1tIPg-wshlTP_MTjz/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        🕺💃 Sangeet
      </a>
    </li>
          <li>
      <a
        className="project-link"
        href="https://drive.google.com/file/d/11k0ttpwDw7BKoWprzOWnr6xeLuIHck8k/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        ❤️ Retro
      </a>
    </li>
  </ul>
</section>



      {/* About */}
      <section id="about" className="About section-bg">
        <h2>About Me</h2>

        <div className="about-wrapper">
          <div className="about-left">
            <p className="about-intro">
              नमस्कार 👋 मी <strong>Cine Editvala</strong> —
              एक <span>Cinematic Video Editor</span> जो
              visuals मधून emotion आणि story create करतो.
            </p>

            <p className="about-sub">
              Clean cuts • Cinematic mood • Emotional storytelling
            </p>
          </div>

          <div className="about-right">
            <div className="about-box">
              🎬 <h4>What I Do</h4>
              <p>Wedding, Pre-Wedding, Cinematic & Social Media Videos</p>
            </div>
            <div className="about-box">
              🛠️ <h4>Skills</h4>
              <p>Premiere Pro<br />CapCut<br />Color Grading</p>
            </div>
            <div className="about-box">
              🎥 <h4>Style</h4>
              <p>Cinematic look with emotional flow</p>
            </div>
            <div className="about-box">
              🚀 <h4>Goal</h4>
              <p>Visually stunning & emotionally connecting content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
<section id="contact" className="Contact section-bg">
  <h2>Contact Me</h2>
  <ul>
    <li>
      📧{" "}
      <a href="mailto:surajkharade000@gmail.com">
        Cine Editvala
      </a>
    </li>

    <li>
      📸{" "}
      <a
        href="https://www.instagram.com/cineeditvala?igsh=N2o5MmgwOGt5bTdu"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram: Cine Editvala
      </a>
    </li>

    <li>
      ▶️{" "}
      <a
        href="https://www.youtube.com/@cineeditvala"
        target="_blank"
        rel="noopener noreferrer"
      >
        YouTube: Cine Editvala
      </a>
    </li>

    <li>
      📞{" "}
      <a href="tel:+919767774450">
        +91 97677 74450
      </a>
    </li>
  </ul>
</section>

    </div>
  );
}

export default App;
