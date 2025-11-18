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
