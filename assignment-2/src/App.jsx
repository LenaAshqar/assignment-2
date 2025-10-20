import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import CardNav from './components/nav/CardNav'
import Aurora from './components/background/Aurora.jsx';

import './App.css'



function App() {
    const [count, setCount] = useState(0)

    const items = [
        {
            label: "About",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "Company", ariaLabel: "About Company" },
                { label: "Careers", ariaLabel: "About Careers" }
            ]
        },
        {
            label: "Projects",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "Featured", ariaLabel: "Featured Projects" },
                { label: "Case Studies", ariaLabel: "Project Case Studies" }
            ]
        },
        {
            label: "Contact",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Email", ariaLabel: "Email us" },
                { label: "Twitter", ariaLabel: "Twitter" },
                { label: "LinkedIn", ariaLabel: "LinkedIn" }
            ]
        }
    ];

  return (
      <div>
          <Aurora
              colorStops={["#ff29a9", "#ffcb1f", "#139cf1"]}
              blend={0.5}
              amplitude={2.0}
              speed={0.5}
          />

          <CardNav
              items={items}
              baseColor="#fff"
              menuColor="#000"
              ease="power3.out"
          />

          <section id="about" className="container-about">
              <h3>About Me</h3>
              <p>I am a junior software engineer at KFUPM with a passion for making quality projects.
                  I'm very interested in exploring the diverse domains in which software can be applied and exploring
                  the world of quantum computing.</p>
          </section>

          <section id="projects" className="container-projects">
              <h3>Projects</h3>
              <div className="project-grid">

                  <article className="project-card visible">
                      <img src="assets/number1.png" alt="Project 1"/>
                      <h4>Secure Webchat</h4>
                      <p>An authenticated web application for encrypting text messages using ChaCha20-Poly1305.</p>
                  </article>

                  <article className="project-card visible">
                      <img src="assets/number2.png" alt="Project 2"/>
                      <h4>Tutor Link</h4>
                      <p>A tutoring program to connect tutors with students including an e-book and resource
                          library.</p>
                  </article>

                  <article className="project-card">
                      <img src="assets/number3.png" alt="Project 2"/>
                      <h4>Obesity Classifiaction Model</h4>
                      <p>A classification model that can predict obesity on factors outside of height and weight or
                          BMI.</p>
                  </article>

                  <article className="project-card">
                      <img src="assets/number4.png" alt="Project 1"/>
                      <h4>Image Compression</h4>
                      <p>A computationally efficient image compressor that recursively divides the image in
                          quarters.</p>
                  </article>
              </div>
          </section>

          <section id="skills" className="container-skills">
              <h3>Skills</h3>
              <div className="skills-inner-container">
                  <div className="skill">
                      <img src="assets/python.png" alt="python"/>
                      <p>Python</p>
                  </div>

                  <div className="skill">
                      <img src="assets/java.png" alt="Java"/>
                      <p>Java</p>
                  </div>

                  <div className="skill">
                      <img src="assets/sql.png" alt="SQL"/>
                      <p>SQL</p>
                  </div>

                  <div className="skill">
                      <img src="assets/html.png" alt="HTML"/>
                      <p>HTML</p>
                  </div>

                  <div className="skill">
                      <img src="assets/css.png" alt="CSS"/>
                      <p>CSS</p>
                  </div>

                  <div className="skill">
                      <img src="assets/js.png" alt="JavaScript"/>
                      <p>JavaScript</p>
                  </div>
              </div>
          </section>

          <section id="contact" className="container-contact">
              <h3>Contact Me</h3>
              <form id="contactForm" noValidate="">

                  <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input id="name" name="name" required=""/>
                  </div>

                  <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" required=""/>
                  </div>

                  <div className="form-group full-width">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" name="message" rows="5" required=""></textarea>
                  </div>

                  <button type="submit" className="btn">Send</button>
                  <p id="formMsg" className="form-msg" aria-live="polite"></p>
              </form>
          </section>

          <h1>Vite + React</h1>

          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>

              <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
              </p>
          </div>

          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
      </div>
  )
}

export default App
