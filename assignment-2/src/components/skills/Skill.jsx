import React from "react";
import "./Skills.css";
import "../FrostedGlass.css";

const Skill = ({ img, name }) => {
    return (
        <div className="skill frostedGlass">
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    );
};

export default Skill;
