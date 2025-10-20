import React from "react";
import "./About.css";
import "../FrostedGlass.css";

const About = () => {
    return (
        <section id="about" className="container-about">
            <div className="frostedGlass">
                <h3>About Me</h3>
                <p>
                    I am a junior software engineer at KFUPM with a passion for making
                    quality projects. I'm very interested in exploring the diverse domains
                    in which software can be applied and exploring the world of quantum
                    computing.
                </p>
            </div>
        </section>
    );
};

export default About;