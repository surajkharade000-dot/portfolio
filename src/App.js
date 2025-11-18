// React इम्पोर्ट
import React from "react";

// CSS फाइल
import "./App.css";

// मुख्य App Component
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
      <header id="home" className="App-header">

        <div className="logo-container">
          <img
            src="https://i.postimg.cc/1tHS3fJ1/59993AE2-2E20-4810-93B3-F7285015B6F5.png"
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

      {/* 🎬 Projects Section */}
      <section id="projects" className="Projects">
        <h2>My Projects</h2>

        <ul>
          {/* Cinematic Video */}
          <li>
            <a
              href="https://drive.google.com/file/d/1auKON7EGxGNR8pch2nTxTHxtymt8QxzL/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Cinematic Video
            </a>
          </li>

          {/* Teaser */}
          <li>
            <a
              href="https://drive.google.com/drive/folders/1rirlcByJ7K2qcU5XCgY8MbBgCwJKiBi3?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Teaser
            </a>
          </li>

          {/* Traditional Video */}
          <li>
              <a
              href="https://drive.google.com/file/d/1BfrkEU5Duna2wDoJX3vOtNH7jUQN_jSc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Traditional Video
            </button>
          </li>

          {/* Marathi Prewedding Song */}
          <li>
            <a
              href="https://drive.google.com/file/d/1_8zZAOmm5ga1lj3G2FKuQu34nnXbwBKk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Marathi Prewedding Song
            </a>
          </li>
        </ul>
      </section>

      {/* ℹ️ About Section */}
      <section id="about" className="About">
        <h2>About Me</h2>

        <p>
          Name: सुरज खराडे – एक experienced Cinematic Video Editor. <br /><br />
          Skills: Adobe Premiere Pro, CapCut, कलर ग्रेडिंग. <br /><br />
          Specialization: Cinematic Videos / Wedding & Pre-Wedding Teasers /
          Traditional Highlights / Promotional & Social Media Videos <br /><br />
          Experience: Cinematic video editing आणि सर्व प्रकारची video editing केली आहे. <br /><br />
          Work Style: नेमके संपादन, cinematic touch, आणि प्रेक्षकांसाठी immersive experience तयार करणे. <br /><br />
          Learning Approach: सतत नवीन techniques शिकणे आणि creative राहणे. <br /><br />
          Creative Interests: नवीन styles experiment करणे, editing tips share करणे, visuals अधिक engaging बनवणे. <br /><br />
          Goal: असा content तयार करणे जो सुंदर दिसत असेल आणि प्रेक्षकांच्या भावना स्पर्श करेल. <br /><br />
          संपर्क / Contact: माझे portfolio पहा आणि प्रोजेक्टवर collaborate करायचे असल्यास contact करा. <br />
        </p>
      </section>

      {/* 📞 Contact Section */}
      <section id="contact" className="Contact">
        <h2>Contact Me</h2>
        <p>
          Let's connect <br />
          Feel free to reach out anytime! <br />
        </p>

        <ul>
          <li>
            Email:{" "}
            <a href="mailto:surajkharade000@gmail.com" className="contact-link">
              surajkharade000@gmail.com
            </a>
          </li>

          <li>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/x.suraj__18?igsh=MjQ0MG43cmtsZmQw"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              x.suraj__18
            </a>
          </li>

          <li>
            YouTube:{" "}
            <a
              href="https://youtube.com/@surajjediting?si=GE2jJcv8xB1yNi7q"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              YouTube Channel
            </a>
          </li>

          <li>
            Mobile:{" "}
            <a href="tel:+919767774450" className="contact-link">
              +91 97677 74450
            </a>
          </li>
        </ul>

        <a
          href="https://drive.google.com/file/d/1VqPTle46ViXd0sVt1k84-o9qOi8pFEhJ/view?usp=sharing"
          className="resume-btn"
        >
          Download Resume
        </a>
      </section>
    </div>
  );
}

// Export Component
export default App;
