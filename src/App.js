import React from "react";
import "./App.css";

/* ================= PROJECTS DATA ================= */
const projects = [
  {
    title: "🎥 Cinematic Video",
    link: "https://drive.google.com/file/d/1Ask2iZsBJilB5ZxpZmicz9_vyO0utd9x/view",
    desc: "A cinematic video is not just a recording, it’s a visual experience. Through creative camera work, lighting, color grading, and music, it tells a story that feels like a movie.."
  },
  {
    title: "🎞️ Viral / Social Media Video",
    link: "https://drive.google.com/drive/folders/1w3pw8J0BndyfAqfoboVw1fV8KSdyx5FZ",
    desc: "Short, engaging videos designed for social media impact."
  },
  {
    title: "💍 Pre-Wedding – Hindi Song",
    link: "https://drive.google.com/file/d/1Ohs4dI2sIgO3OW_EKM1Jq0jBjSDvMTea/view",
    desc: "A pre-wedding cinematic film captures your love story in a movie-style format.With beautiful locations, emotions, and music, it turns real moments into a timeless film."
  },
  {
    title: "💍 Pre-Wedding – Marathi Song",
    link: "https://drive.google.com/file/d/1X7bkd6dunG5l0yI5pQ1-HqmaV64_CZCi/view",
    desc: "A Marathi song-based pre-wedding film that reflects culture, romance, and emotions.Designed to feel personal, soulful, and cinematic."
  },
  {
    title: "👶 Baby Shoot Reel",
    link: "https://drive.google.com/file/d/1KhabPzYYO9nA5pjsNoWQ_TbMFpFULjNt/view",
    desc: "A baby shoot reel captures cute expressions and joyful moments creatively. Short, sweet, and perfect for memories you’ll cherish forever."
  },
  {
    title: "💑 Engagement Video",
    link: "https://drive.google.com/file/d/1sEJULFktQEuMu8cKU6b5j2TiuNCpa4f9/view",
    desc: "An engagement cinematic video beautifully captures the emotions, rituals, and special moments of your engagement.With cinematic visuals and music, it turns your celebration into a memorable film.."
  },
  {
    title: "🎂 Birthday Cinematic Video",
    link: "https://drive.google.com/file/d/1GxuO6HPwqP9S1H2COPYE_xsFCI6ZOs4R/view",
    desc: "A birthday cinematic video captures joyful moments in a movie-style experience.With creative shots, music, and emotions, it turns your celebration into a lasting memory."
  },
  {
    title: "💒 Wedding Highlight Film",
    link: "https://drive.google.com/file/d/19UZuhyfy2QRpYNuWPBnFOuxBznqzz_nt/view",
    desc: "Best moments of the wedding day captured."
  },
  {
    title: "🎬 Wedding Teaser / Trailer",
    link: "https://drive.google.com/file/d/1w_1MFqau8ne0Zf2AM87Pv0i84xJI1_8b/view",
    desc: "A wedding teaser is a short, impactful preview of the wedding film. Designed to build excitement with cinematic shots and music.."
  },
  {
    title: "📅 Save The Date Video",
    link: "https://drive.google.com/file/d/1me5G6k6ITlsbVdeajW1r8eR_065HYDk5/view",
    desc: "A save the date video is a creative way to announce your wedding date. Stylish visuals and music make the announcement memorable."
  },
  {
    title: "❤️ Reception Video",
    link: "https://drive.google.com/file/d/1eD8NbBIY0Ykex-rk3i53fUsbRZZOrx3Q/view",
    desc: "A reception video captures grand entries, celebrations, and joyful moments. Cinematic editing brings out the elegance and excitement of the event."
  },
  {
    title: "🕺💃 Sangeet",
    link: "https://drive.google.com/file/d/1pczhFo7lLiF4IBB1tIPg-wshlTP_MTjz/view",
    desc: "A sangeet video highlights dance performances, fun, and family moments. Vibrant edits and music make it energetic and entertaining.."
  },
  {
    title: "❤️ Retro",
    link: "https://drive.google.com/file/d/11k0ttpwDw7BKoWprzOWnr6xeLuIHck8k/view",
    desc: "A retro-style video brings classic vibes with old music and visuals. Perfect for creating a nostalgic and timeless feel."
  }
];

function App() {
  return (
    <div className="App">

      {/* ================= NAVBAR ================= */}
      <nav className="Navbar">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* ================= HOME ================= */}
      <header id="home" className="App-header section-bg">
        <div className="logo-container">
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

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section-bg">
        <h2>My Projects</h2>

        <ul className="projects-list">
          {projects.map((project, index) => (
            <li key={index}>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
              <p className="project-desc">{project.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section-bg">
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

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section-bg Contact">
        <h2>Contact Me</h2>
        <ul>
          <li>📧 <a href="mailto:surajkharade000@gmail.com">Cineeditvala mail</a></li>
          <li>📸 <a href="https://www.instagram.com/cineeditvala" target="_blank" rel="noreferrer">Instagram</a></li>
          <li>▶️ <a href="https://www.youtube.com/@cineeditvala" target="_blank" rel="noreferrer">YouTube</a></li>
          <li>📞 <a href="tel:+919767774450">Call</a></li>
        </ul>
      </section>

    </div>
  );
}

export default App;
