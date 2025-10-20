// src/components/Skills.jsx
import React from "react";
import pythonLogo from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/python.png";
import javaLogo from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/java.png";
import sqlLogo from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/sql.png";
import htmlLogo from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/html.png";
import cssLogo from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/css.png";
import jsLogo from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/js.png";
import Skill from "./Skill.jsx";

const Skills = () => {
    const skills = [
        { img: pythonLogo, name: "Python" },
        { img: javaLogo, name: "Java" },
        { img: sqlLogo, name: "SQL" },
        { img: htmlLogo, name: "HTML" },
        { img: cssLogo, name: "CSS" },
        { img: jsLogo, name: "JavaScript" },
    ];

    return (
        <section id="skills" className="container-skills">
            <h3>Skills</h3>
            <div className="skills-inner-container">
                {skills.map((skill, index) => (
                    <Skill key={index} {...skill} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
