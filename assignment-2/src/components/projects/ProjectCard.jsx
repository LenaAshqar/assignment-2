import React from "react";
import "./Projects.css";
import "../FrostedGlass.css";

const ProjectCard = ({ img, title, description }) => {
    return (
        <article className="project-card frostedGlass">
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
        </article>
    );
};

export default ProjectCard;