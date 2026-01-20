import React from "react";
import "./App.css";

/* ---------------- Projects Data ---------------- */
const projects = [
  {
    title: "🎥 Cinematic Video",
    link: "https://drive.google.com/file/d/1Ask2iZsBJilB5ZxpZmicz9_vyO0utd9x/view",
    desc: "A cinematic video is not just a recording, it’s a visual experience with creative camera work and color grading."
  },
  {
    title: "🎞️ Viral / Social Media Video",
    link: "https://drive.google.com/drive/folders/1w3pw8J0BndyfAqfoboVw1fV8KSdyx5FZ",
    desc: "Short, engaging videos designed for social media impact with fast cuts and trends."
  },
  {
    title: "💍 Pre-Wedding – Hindi Song",
    link: "https://drive.google.com/file/d/1Ohs4dI2sIgO3OW_EKM1Jq0jBjSDvMTea/view",
    desc: "A cinematic pre-wedding video crafted on a Hindi song with emotional storytelling."
  },
  {
    title: "💍 Pre-Wedding – Marathi Song",
    link: "https://drive.google.com/file/d/1X7bkd6dunG5l0yI5pQ1-HqmaV64_CZCi/view",
    desc: "Marathi song-based cinematic storytelling with culture and romance."
  },
  {
    title: "👶 Baby Shoot Reel",
    link: "https://drive.google.com/file/d/1KhabPzYYO9nA5pjsNoWQ_TbMFpFULjNt/view",
    desc: "Cute expressions and joyful baby moments captured creatively."
  },
  {
    title: "💒 Wedding Highlight Film",
    link: "https://drive.google.com/file/d/19UZuhyfy2QRpYNuWPBnFOuxBznqzz_nt/view",
    desc: "Beautiful cinematic highlights of wedding rituals and emotions."
  },
];

/* ---------------- App Component ---------------- */
function App() {
  return (
    <div className="App">

      {/* ---------- Navbar ---------- */}
      <nav className="Navbar" aria-label="Main Navigation">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* ---------- Home ---------- */}
      <header id="home" className="App-header section-bg">
        <div className="logo-container">
          <img
            src="https://i.postimg.cc/xdrrd0Q0/ttt.png"
            alt="Cine Editvala Logo"
            className="App-logo"
            loading="lazy"
          />
          <div className="glow"></div>
        </div>

        <h1>Cine Editvala – Cinematic Video Editor</h1>
        <p>
          Video Editing Professional <br />
          Support Engineer <br />
          Creative Thinker
        </p>
      </header>

      {/* ---------- Projects ---------- */}
      <section id="projects" className="Projects section-bg">
        <h2>My Projects</h2>

        <ul className="projects-list">
          {projects.map((project, index) => (
            <li key={index}>
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
              <p>{project.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="About section-bg">
        <h2>About Me</h2>

        <div className="about-wrapper">
          <div className="about-left">
            <p className="about-intro">
              नमस्कार 👋 मी <strong>Cine Editvala</strong> —
              एक Cinematic Video Editor जो visuals मधून emotion आणि story create करतो.
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

      {/* ---------- Contact ---------- */}
      <section id="contact" className="Contact section-bg">
        <h2>Contact Me</h2>

        <ul>
          <li>📧 <a href="mailto:surajkharade000@gmail.com">surajkharade000@gmail.com</a></li>
          <li>📸 <a href="https://www.instagram.com/cineeditvala" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li>▶️ <a href="https://www.youtube.com/@cineeditvala" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          <li>📞 <a href="tel:+919767774450">+91 97677 74450</a></li>
        </ul>
      </section>

    </div>
  );
}

export default App;
