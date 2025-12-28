// React import
import React from "react";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* 🟡 Navbar */}
      <nav className="Navbar">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* 🏠 Home */}
      <header id="home" className="App-header section-bg">
        <div className="logo-container">
          <img
            src="https://i.postimg.cc/sDSC10kP/59993AE2_2E20_4810_93B3_F7285015B6F5_removebg_preview.png"
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

      {/* 🎬 Projects */}
      <section id="projects" className="Projects section-bg">
        <h2>My Projects</h2>
        <ul>
          <li>
            <a className="project-link" href="https://drive.google.com/file/d/1FKkwp2FSeP4ur-vYELp1FVKIoQ3AZPOw/view" target="_blank" rel="noreferrer">
              🎥 Cinematic Video
            </a>
          </li>
          <li>
            <a className="project-link" href="https://drive.google.com/file/d/1oSOMl5KpbB-LvE6bCufhQfYcn20fRtok/view" target="_blank" rel="noreferrer">
              🎞️ Latest Viral Video
            </a>
          </li>
          <li>
            <a className="project-link" href="https://drive.google.com/file/d/1BfrkEU5Duna2wDoJX3vOtNH7jUQN_jSc/view" target="_blank" rel="noreferrer">
              🚗 Car & Bike Delivery Video
            </a>
          </li>
          <li>
            <a className="project-link" href="https://drive.google.com/file/d/1_8zZAOmm5ga1lj3G2FKuQu34nnXbwBKk/view" target="_blank" rel="noreferrer">
              💍 Marathi Pre-Wedding Song
            </a>
          </li>
        </ul>
      </section>

      {/* ℹ️ About (ATTRACTIVE) */}
      <section id="about" className="About section-bg">
        <h2>About Me</h2>

        <div className="about-card">
          <p className="about-intro">
            नमस्कार 👋 मी <strong>सुरज खराडे</strong> —
            एक <span>Cinematic Video Editor</span> जो
            visuals मधून stories सांगतो.
          </p>

          <div className="about-grid">
            <div className="about-box">
              🎬
              <h4>What I Do</h4>
              <p>
                Wedding & Pre-Wedding Films, Cinematic Videos,
                Promotional आणि Social Media Content.
              </p>
            </div>

            <div className="about-box">
              🛠️
              <h4>Skills</h4>
              <p>
                Adobe Premiere Pro <br />
                CapCut <br />
                Color Grading
              </p>
            </div>

            <div className="about-box">
              🎥
              <h4>Editing Style</h4>
              <p>
                Clean cuts, cinematic mood,
                emotional storytelling.
              </p>
            </div>

            <div className="about-box">
              🚀
              <h4>My Goal</h4>
              <p>
                असा content तयार करणे जो visually stunning
                आणि emotionally connect करणारा असेल.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 Contact */}
      <section id="contact" className="Contact section-bg">
        <h2>Contact Me</h2>
        <p>Let's connect anytime ✨</p>

        <ul>
          <li>📧 <a className="contact-link" href="mailto:surajkharade000@gmail.com">surajkharade000@gmail.com</a></li>
          <li>📸 <a className="contact-link" href="https://www.instagram.com/x.suraj__18" target="_blank" rel="noreferrer">Instagram</a></li>
          <li>▶️ <a className="contact-link" href="https://youtube.com/@surajjediting" target="_blank" rel="noreferrer">YouTube</a></li>
          <li>📞 <a className="contact-link" href="tel:+919767774450">+91 97677 74450</a></li>
        </ul>

        <a
          className="resume-btn"
          href="https://drive.google.com/file/d/1VqPTle46ViXd0sVt1k84-o9qOi8pFEhJ/view"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>
      </section>
    </div>
  );
}

export default App;
