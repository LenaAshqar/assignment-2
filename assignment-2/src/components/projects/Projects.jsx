import { useEffect, useMemo, useState } from 'react';
import project1Light from '../../assets/number1-dark.png';
import project1Dark from '../../assets/number1.png';
import project2Light from '../../assets/number2-dark.png';
import project2Dark from '../../assets/number2.png';
import project3Light from '../../assets/number3-dark.png';
import project3Dark from '../../assets/number3.png';
import project4Light from '../../assets/number4-dark.png';
import project4Dark from '../../assets/number4.png';
import project5Light from '../../assets/number5-dark.png';
import project5Dark from '../../assets/number5.png';
import project6Light from '../../assets/number6-dark.png';
import project6Dark from '../../assets/number6.png';

import './Projects.css';
import ProjectCard from './ProjectCard.jsx';

const projects = [
    {
        imageDark: project1Dark,
        imageLight: project1Light,
        title: 'Secure Webchat',
        description:
            'An authenticated messaging platform that encrypts conversations end-to-end with ChaCha20-Poly1305 and thoughtful UX touches.',
        year: 2025,
        category: 'Web',
        language: 'JavaScript',
        tags: ['React', 'Node.js', 'Flask']
    },
    {
        imageDark: project2Dark,
        imageLight: project2Light,
        title: 'Tutor Link',
        description:
            'A collaborative tutoring hub that connects students and mentors with scheduling, shared resources, and analytics dashboards.',
        year: 2023,
        language: 'Java',
        category: 'Applications',
        tags: ['Java', 'SQL Database']
    },
    {
        imageDark: project3Dark,
        imageLight: project3Light,
        title: 'Obesity Classification Model',
        description:
            'A machine-learning model trained to predict obesity trends using lifestyle indicators.',
        year: 2024,
        category: 'Data Science',
        language: 'Java',
        tags: ['Python', 'scikit-learn', 'Pandas']
    },
    {
        imageDark: project4Dark,
        imageLight: project4Light,
        title: 'Ticketorium',
        description:
            'A website for all your academia related ticketing needs. Buy tickets for academic events or list your graduation tickets up for bidding.',
        year: 2025,
        category: 'Web',
        language: 'Java',
        tags: ['Web', 'React', 'Tailwind']
    },
    {
        imageDark: project5Dark,
        imageLight: project5Light,
        title: 'Ticketorium1',
        description:
            'A website for all your academia related ticketing needs. Buy tickets for academic events or list your graduation tickets up for bidding.',
        year: 2025,
        category: 'Web',
        language: 'Java',
        tags: ['Web', 'React', 'Tailwind']
    },
    {
        imageDark: project6Dark,
        imageLight: project6Light,
        title: 'Ticketorium2',
        description:
            'A website for all your academia related ticketing needs. Buy tickets for academic events or list your graduation tickets up for bidding.',
        year: 2025,
        category: 'Web',
        language: 'Java',
        tags: ['Web', 'React', 'Tailwind']
    }
];

const sortProjects = (items, sortKey) => {
    const sorted = [...items];

    switch (sortKey) {
        case 'oldest':
            return sorted.sort((a, b) => a.year - b.year);
        case 'title':
            return sorted.sort((a, b) => a.title.localeCompare(b.title));
        default:
            return sorted.sort((a, b) => b.year - a.year);
    }
};

const Projects = ({ theme = 'dark' }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [sortKey, setSortKey] = useState('latest');
    const [expandedProject, setExpandedProject] = useState(null);

    const categories = useMemo(() => ['All', ...new Set(projects.map(project => project.category))], []);

    const visibleProjects = useMemo(() => {
        const filtered =
            activeFilter === 'All'
                ? projects
                : projects.filter(project => project.category === activeFilter);

        return sortProjects(filtered, sortKey);
    }, [activeFilter, sortKey]);

    useEffect(() => {
        setExpandedProject(null);
    }, [activeFilter, sortKey]);

    return (
        <section id="projects" className="section projects-section">
            <div className="section-inner">
                <div className="section-header">
                    <span className="section-eyebrow">Selected work</span>
                    <h2 className="section-title">Projects shaped by experimentation and polish.</h2>
                    <p className="section-description">
                        Each project blends rigorous technical foundations with visual storytelling to create useful,
                        dependable experiences.
                    </p>
                </div>

                <div className="project-controls">
                    <div className="filter-group" role="list">
                        {categories.map(category => (
                            <button
                                key={category}
                                type="button"
                                role="listitem"
                                className={`filter-chip ${activeFilter === category ? 'is-active' : ''}`}
                                aria-pressed={activeFilter === category}
                                onClick={() => setActiveFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <label className="sort-select">
                        <span>Sort by</span>
                        <select value={sortKey} onChange={event => setSortKey(event.target.value)}>
                            <option value="latest">Newest first</option>
                            <option value="oldest">Oldest first</option>
                            <option value="title">Title (A–Z)</option>
                        </select>
                    </label>
                </div>

                {visibleProjects.length > 0 ? (
                    <div className="project-grid">
                        {visibleProjects.map(project => (
                            <ProjectCard
                                key={project.title}
                                {...project}
                                year={String(project.year)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="projects-empty" role="status" aria-live="polite">
                        <h3>No projects found</h3>
                        <p>Try choosing another filter or reset your sorting preference.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
