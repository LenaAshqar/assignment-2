import React from "react";

const ProjectCard = ({ img, title, description }) => {
    return (
        <article className="project-card">
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
        </article>
    );
};

export default ProjectCard;