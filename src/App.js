// React इम्पोर्ट केला — म्हणजे JSX (HTML सारखा कोड) वापरता येतो
import React from "react";

// App.css ही बाहेरची स्टाइल फाइल जोडली
import "./App.css";

// App हा मुख्य कॉम्पोनेंट (आपली संपूर्ण वेबसाइट या कॉम्पोनेंटमध्ये आहे)
function App() {
  return (
    <div className="App">
      {/* 🟡 Navbar विभाग */}
      <nav className="Navbar">
        {/* या लिंक स्क्रोल करून पेजच्या त्या त्या सेक्शनकडे नेतात */}
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* 🏠 Home Section */}
      <header id="home" className="App-header">
        {/* लोगो आणि glow इफेक्ट */}
        <div className="logo-container">
          <img
            src="https://i.postimg.cc/1tHS3fJ1/59993AE2-2E20-4810-93B3-F7285015B6F5.png"
            alt="Suraj Kharade Logo"
            className="App-logo"
          />
          {/* हा div glow इफेक्टसाठी आहे */}
          <div className="glow"></div>
        </div>

        {/* नाव आणि प्रोफेशन */}
        <h1>Suraj Kharade</h1>
        <p>Video Editing Professional | Support Engineer | Creative Thinker</p>
      </header>

      {/* 🎬 Projects Section */}
      <section id="projects" className="Projects">
        <h2>My Projects</h2>
        <ul>
          {/* पहिला प्रोजेक्ट — Cinematic Video */}
          <li>
            <a
              href="https://drive.google.com/file/d/1auKON7EGxGNR8pch2nTxTHxtymt8QxzL/view?usp=drive_link"
              target="_blank" // लिंक नवीन टॅबमध्ये उघडते
              rel="noopener noreferrer" // सुरक्षिततेसाठी
              className="project-link"
            >
              Cinematic Video
            </a>
          </li>

          {/* दुसरा प्रोजेक्ट — Teaser */}
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

          {/* तिसरा प्रोजेक्ट — अजून लिंक नाही, पण बटण क्लिक केल्यावर अलर्ट येतो */}
          <li>
            <button
              onClick={() => alert("Traditional Video link coming soon!")}
              className="project-link"
              style={{ cursor: "pointer", border: "none" }}
            >
              Traditional Video
            </button>
          </li>
        </ul>
      </section>

      {/* ℹ️ About Section */}
      <section id="about" className="About">
        <h2>About Me</h2>
        <p>
          I'm a passionate video editor and support engineer who loves blending
          technology with creativity. My focus is to make cinematic, clean, and
          emotionally powerful visuals.
        </p>
      </section>

      {/* 📞 Contact Section */}
      <section id="contact" className="Contact">
        <h2>Contact Me</h2>
        <p>Let's connect — feel free to reach out anytime!</p>

        {/* संपर्क माहितीची यादी */}
        <ul>
          <li>
            Email:{" "}
            <a
              href="mailto:surajkharade000@gmail.com"
              className="contact-link"
            >
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

        {/* 📄 Resume Download Button */}
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

// या फाइलचा कॉम्पोनेंट बाहेर वापरता यावा म्हणून एक्सपोर्ट केला आहे
export default App;
