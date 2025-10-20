// src/components/Skill.jsx
import React from "react";

const Skill = ({ img, name }) => {
    return (
        <div className="skill">
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    );
};

export default Skill;
