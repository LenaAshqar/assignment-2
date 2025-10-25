import { useId, useState } from 'react';
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi';
import './Projects.css';

const ProjectCard = ({ image, title, description, tags = [], year, link, className = '', ...rest }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const detailsId = useId();

    const handleToggle = () => {
        setIsExpanded(previous => !previous);
    };

    return (
        <article className={`project-card surface-card ${className}`.trim()} {...rest}>
            <div className="project-media">
                <img src={image} alt={title} />
                {year && <span className="project-year">{year}</span>}
            </div>
            <div className="project-body">
                <button
                    type="button"
                    className={`project-toggle ${isExpanded ? 'is-open' : ''}`}
                    onClick={handleToggle}
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                >
                    <span className="project-title">{title}</span>
                    <FiChevronDown aria-hidden="true" />
                </button>
                <div id={detailsId} className="project-details" hidden={!isExpanded}>
                    <p>{description}</p>
                    {tags.length > 0 && (
                        <ul className="project-tags" role="list">
                            {tags.map(tag => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                    )}
                    <div className="project-footer">
                        {link ? (
                            <a className="project-link" href={link} target="_blank" rel="noreferrer noopener">
                                View project
                                <FiArrowUpRight aria-hidden="true" />
                            </a>
                        ) : (
                            <span className="project-link project-link--muted">
                                Case study coming soon
                                <FiArrowUpRight aria-hidden="true" />
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
};
export default ProjectCard;