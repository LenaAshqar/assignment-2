import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import CardNav from './components/nav/CardNav'
import Aurora from './components/background/Aurora.jsx';

import './App.css'
import About from "./components/about/About.jsx";
import Projects from "./components/projects/Projects.jsx";
import Skills from "./components/skills/Skills.jsx";
import Contact from "./components/contact/Contact.jsx";



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

          <div className="App">
              <CardNav
                  items={items}
                  baseColor="#fff"
                  menuColor="#000"
                  ease="power3.out"
              />

              <div className="App-content">
                  <About />
                  <Projects />
                  <Skills />
                  <Contact />
              </div>
          </div>


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
