// src/components/Projects.jsx
import React from "react";
import number1 from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/number1.png";
import number2 from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/number2.png";
import number3 from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/number3.png";
import number4 from "C:/Users/Administrator/WebstormProjects/assignment-2/assignment-2/src/assets/number4.png";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
    const projects = [
        {
            img: number1,
            title: "Secure Webchat",
            description:
                "An authenticated web application for encrypting text messages using ChaCha20-Poly1305.",
        },
        {
            img: number2,
            title: "Tutor Link",
            description:
                "A tutoring program to connect tutors with students including an e-book and resource library.",
        },
        {
            img: number3,
            title: "Obesity Classification Model",
            description:
                "A classification model that can predict obesity on factors outside of height and weight or BMI.",
        },
        {
            img: number4,
            title: "Image Compression",
            description:
                "A computationally efficient image compressor that recursively divides the image in quarters.",
        },
    ];

    return (
        <section id="projects" className="container-projects">
            <h3>Projects</h3>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
