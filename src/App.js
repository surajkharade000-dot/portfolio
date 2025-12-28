// React import
import React from "react";

// CSS file
import "./App.css";

// Main App Component
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

      {/* 🏠 Home Section */}
      <header id="home" className="App-header section-bg">
        <div className="logo-container">
          <img
            src="https://i.postimg.cc/sDSC10kP/59993AE2_2E20_4810_93B3_F7285015B6F5_removebg_preview.png"
            alt="Suraj Kharade Logo"
            className="App-logo"
            loading="lazy"
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

      {/* 🎬 Projects Section */}
      <section id="projects" className="Projects section-bg">
        <h2>My Projects</h2>

        <ul>
          <li>
            <a
              href="https://drive.google.com/file/d/1FKkwp2FSeP4ur-vYELp1FVKIoQ3AZPOw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🎥 Cinematic Video
            </a>
          </li>

          <li>
            <a
              href="https://drive.google.com/file/d/1oSOMl5KpbB-LvE6bCufhQfYcn20fRtok/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🎞️ Latest viral video
            </a>
          </li>

          <li>
            <a
              href="https://drive.google.com/file/d/1BfrkEU5Duna2wDoJX3vOtNH7jUQN_jSc/view"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🚗 Car & Bike Delivery Video
            </a>
          </li>

          <li>
            <a
              href="https://drive.google.com/file/d/1_8zZAOmm5ga1lj3G2FKuQu34nnXbwBKk/view"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              💍 Marathi Pre-Wedding Song
            </a>
          </li>
        </ul>
      </section>

      {/* ℹ️ About Section */}
      <section id="about" className="About section-bg">
        <h2>About Me</h2>

        <p>
          <strong>नाव:</strong> सुरज खराडे – Experienced Cinematic Video Editor
          <br /><br />

          <strong>Skills:</strong> Adobe Premiere Pro, CapCut, Color Grading
          <br /><br />

          <strong>Specialization:</strong> Cinematic Videos, Wedding &
          Pre-Wedding Teasers, Traditional Highlights, Promotional & Social Media
          Videos
          <br /><br />

          <strong>Experience:</strong> विविध प्रकारच्या cinematic आणि professional
          video editing projects
          <br /><br />

          <strong>Work Style:</strong> Clean editing, cinematic touch, immersive
          storytelling
          <br /><br />

          <strong>Learning:</strong> सतत नवीन techniques शिकणे आणि creative राहणे
          <br /><br />

          <strong>Goal:</strong> असा content तयार करणे जो visually stunning आणि
          emotionally connect करणारा असेल
        </p>
      </section>

      {/* 📞 Contact Section */}
      <section id="contact" className="Contact section-bg">
        <h2>Contact Me</h2>

        <p>
          Let's connect <br />
          Feel free to reach out anytime!
        </p>

        <ul>
          <li>
            📧 Email:{" "}
            <a
              href="mailto:surajkharade000@gmail.com"
              className="contact-link"
            >
              surajkharade000@gmail.com
            </a>
          </li>

          <li>
            📸 Instagram:{" "}
            <a
              href="https://www.instagram.com/x.suraj__18"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              x.suraj__18
            </a>
          </li>

          <li>
            ▶️ YouTube:{" "}
            <a
              href="https://youtube.com/@surajjediting"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Suraj Editing
            </a>
          </li>

          <li>
            📞 Mobile:{" "}
            <a href="tel:+919767774450" className="contact-link">
              +91 97677 74450
            </a>
          </li>
        </ul>

        <a
          href="https://drive.google.com/file/d/1VqPTle46ViXd0sVt1k84-o9qOi8pFEhJ/view"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Download Resume
        </a>
      </section>
    </div>
  );
}

export default App;
