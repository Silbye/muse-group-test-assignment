import "./App.css";
import logo from "./images/logo.svg";
import aboutimage from "./images/about-image.png";
import Product from "./components/Product";
import buttonArrow from "./images/button-arrow.svg";

import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import linkedin from "./images/LinkedIn.svg";
import telegram from "./images/Telegram.svg";

import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reObject = {
      email:
        /^[_a-zA-Z0-9]+(\.?[a-zA-Z0-9_-]*[_a-zA-Z0-9]+)*@(?!-)[a-zA-Z0-9-]*[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z]{2,})+$/,
    };
    const data = inputValue;

    if (data !== null && data !== "") {
      let valid = reObject.email.test(data);

      console.log(valid);

      if (valid) {
        alert("Welcome to the team!");
      } else {
        alert("Email is invalid!");
      }
    } else {
      alert("Email is invalid!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <a href="">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </header>
      <div className="section about">
        <div className="container">
          <h1 className="about-title">Muse Group Frontend Academy</h1>
          <p className="about-text">
            Our academy offers a transformative learning experience designed to
            empower you with the skills and knowledge needed to succeed in the
            ever-evolving field of frontend development.
          </p>
          <img className="about-image" alt="" src={aboutimage} />
          <p className="about-subtext">
            Are you ready to turn your passion for technology into a thriving
            career?
          </p>
          <div className="input-wrap">
            <input
              className="email-input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Email"
            />
            <button className="join-btn" onClick={handleSubmit}>
              Join <img src={buttonArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="section products">
        <div className="container">
          <h1>Our products</h1>
          <div className="products-list">
            <Product
              title="Ultimate Guitar"
              text="The best platform for music makers to play songs they love. Home to the world's largest music community."
              color="#FFC800"
            />
            <Product
              title="MuseScore"
              text="Create, play back, and print sheet music with free open source notation software."
              color="#2E68C0"
            />
            <Product
              title="audio.com"
              text="The easiest way to share any sound online."
              color="#EA1542"
            />
            <Product
              title="Audacity"
              text="The world's most popular audio editing and recording app."
              color="#1D4ED8"
            />
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-socials">
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="" />
            </a>
            <a href="https://web.telegram.org/">
              <img src={telegram} alt="" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={linkedin} alt="" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="" />
            </a>
          </div>
          <p className="footer-text">
            You're not just a student - you're part of a vibrant community of
            like-minded individuals united by a passion for frontend
            development. Collaborate, innovate, and grow alongside fellow
            learners and industry professionals as you embark on this exciting
            journey together.
          </p>
          <div className="footer-links">
            <a className="footer-link" href="https://support.animaapp.com/en/">
              Help Center
            </a>
            <a
              className="footer-link"
              href="https://forum.animaapp.com/privacy"
            >
              Privacy Policy
            </a>
            <a className="footer-link" href="https://forum.animaapp.com/tos">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
