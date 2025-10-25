import { FiArrowUpRight } from 'react-icons/fi';
import './Projects.css';

const ProjectCard = ({ image, title, description, tags = [], year, link }) => (
    <article className="project-card surface-card">
        <div className="project-media">
            <img src={image} alt={title} />
            {year && <span className="project-year">{year}</span>}
        </div>
        <div className="project-body">
            <h3>{title}</h3>
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
    </article>
);
export default ProjectCard;