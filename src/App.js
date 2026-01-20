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
            src="https://i.postimg.cc/xdrrd0Q0/ttt.png"
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

      <section id="projects" className="Projects section-bg">
  <h2>My Projects</h2>

  <ul className="projects-list">

    <li className="project-item">
      <a className="project-link" href="#" target="_blank" rel="noopener noreferrer">
        🎥 Cinematic Video
      </a>
      <div className="project-media">
        <img src="https://via.placeholder.com/720x200.gif?text=Cinematic+Video" alt="Cinematic Video GIF" />
      </div>
      <p className="project-desc">
        A cinematic video is not just a recording, it’s a visual experience...
      </p>
    </li>

    <li className="project-item">
      <a className="project-link" href="#" target="_blank" rel="noopener noreferrer">
        🎞️ Viral / Social Media Video
      </a>
      <div className="project-media">
        <img src="https://via.placeholder.com/720x200.gif?text=Viral+Social+Video" alt="Viral Video GIF" />
      </div>
      <p className="project-desc">
        Short, engaging videos crafted for social media impact...
      </p>
    </li>

    <li className="project-item">
      <a className="project-link" href="#" target="_blank" rel="noopener noreferrer">
        💍 Pre-Wedding – Hindi Song
      </a>
      <div className="project-media">
        <img src="https://via.placeholder.com/720x200.gif?text=Pre-Wedding+Hindi" alt="Pre-Wedding Hindi GIF" />
      </div>
      <p className="project-desc">
        A cinematic pre-wedding video crafted on a Hindi song to showcase love and chemistry...
      </p>
    </li>

    <li className="project-item">
      <a className="project-link" href="#" target="_blank" rel="noopener noreferrer">
        💍 Pre-Wedding – Marathi Song
      </a>
      <div className="project-media">
        <img src="https://via.placeholder.com/720x200.gif?text=Pre-Wedding+Marathi" alt="Pre-Wedding Marathi GIF" />
      </div>
      <p className="project-desc">
        A Marathi song-based pre-wedding film that reflects culture, romance, and emotions...
      </p>
    </li>

    <li className="project-item">
      <a className="project-link" href="#" target="_blank" rel="noopener noreferrer">
        👶 Baby Shoot Reel
      </a>
      <div className="project-media">
        <img src="https://via.placeholder.com/720x200.gif?text=Baby+Shoot+Reel" alt="Baby Shoot GIF" />
      </div>
      <p className="project-desc">
        A baby shoot reel captures cute expressions and joyful moments creatively...
      </p>
    </li>

    <li className="project-item">
      <a className="project-link" href="#" target="_blank" rel="noopener noreferrer">
        💑 Engagement Video
      </a>
      <div className="project-media">
        <img src="https://via.placeholder.com/720x200.gif?text=Engagement+Video" alt="Engagement GIF" />
      </div>
      <p className="project-desc">
        An engagement cinematic video captures rituals, emotions, and special moments...
      </p>
    </li>

    <li className="project-item">
      <a className="project-link" href="#" target="_blank" rel="noopener noreferrer">
        🎂 Birthday Cinematic Video
      </a>
      <div className="project-media">
        <img src="https://via.placeholder.com/720x200.gif?text=Birthday+Cinematic" alt="Birthday GIF" />
      </div>
      <p className="project-desc">
        A birthday cinematic video turns celebrations into a movie-like experience...
      </p>
    </li>

    <li className="project-item">
      <a className="project-link" href="#" target="_blank" rel="noopener noreferrer">
        💒 Wedding Highlight Film
      </a>
      <div className="project-media">
        <img src="https://via.placeholder.com/720x200.gif?text=Wedding+Highlight" alt="Wedding Highlight GIF" />
      </div>
      <p className="project-desc">
        A wedding highlight film showcases the best moments of your big day...
      </p>
    </li>

    <li className="project-item">
      <a className="project-link" href="#" target="_blank" rel="noopener noreferrer">
        🎬 Wedding Teaser / Trailer
      </a>
      <div className="project-media">
        <img src="https://via.placeholder.com/720x200.gif?text=Wedding+Teaser" alt="Wedding Teaser GIF" />
      </div>
      <p className="project-desc">
        A wedding teaser is a short, impactful preview of the wedding film...
      </p>
    </li>

    <li className="project-item">
      <a className="project-link" href="#" target="_blank" rel="noopener noreferrer">
        📅 Save The Date Video
      </a>
      <div className="project-media">
        <img src="https://via.placeholder.com/720x200.gif?text=Save+The+Date" alt="Save The Date GIF" />
      </div>
      <p className="project-desc">
        A save the date video is a creative way to announce your wedding date...
      </p>
    </li>

    <li className="project-item">
      <a className="project-link" href="#" target="_blank" rel="noopener noreferrer">
        ❤️ Reception Video
      </a>
      <div className="project-media">
        <img src="https://via.placeholder.com/720x200.gif?text=Reception+Video" alt="Reception GIF" />
      </div>
      <p className="project-desc">
        A reception video captures grand entries, celebrations, and joyful moments...
      </p>
    </li>

    <li className="project-item">
      <a className="project-link" href="#" target="_blank" rel="noopener noreferrer">
        🕺💃 Sangeet
      </a>
      <div className="project-media">
        <img src="https://via.placeholder.com/720x200.gif?text=Sangeet" alt="Sangeet GIF" />
      </div>
      <p className="project-desc">
        A sangeet video highlights dance performances, fun, and family moments...
      </p>
    </li>

    <li className="project-item">
      <a className="project-link" href="#" target="_blank" rel="noopener noreferrer">
        ❤️ Retro
      </a>
      <div className="project-media">
        <img src="https://via.placeholder.com/720x200.gif?text=Retro" alt="Retro GIF" />
      </div>
      <p className="project-desc">
        A retro-style video brings classic vibes with old-school music and visuals...
      </p>
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
