import React from "react";
import pythonLogo from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/python.png";
import javaLogo from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/java.png";
import sqlLogo from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/sql.png";
import htmlLogo from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/html.png";
import cssLogo from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/css.png";
import jsLogo from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/js.png";

import LogoLoop from "./LogoLoop.jsx";
import "./Skills.css";

const Skills = () => {
    const skills = [
        { src: pythonLogo, alt: "Python" },
        { src: javaLogo, alt: "Java" },
        { src: sqlLogo, alt: "SQL" },
        { src: htmlLogo, alt: "HTML" },
        { src: cssLogo, alt: "CSS" },
        { src: jsLogo, alt: "JavaScript" },
    ];

    return (
        <section id="skills" className="container-skills">
            <h3>Skills</h3>
            <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
                <LogoLoop
                    logos={skills}
                    speed={120}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />
            </div>
        </section>
    );
};

export default Skills;
