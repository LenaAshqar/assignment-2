import { useMemo, useState } from 'react';
import number1 from '../../assets/number1.png';
import number2 from '../../assets/number2.png';
import number3 from '../../assets/number3.png';
import number4 from '../../assets/number4.png';
import './Projects.css';
import ProjectCard from './ProjectCard.jsx';

const projects = [
    {
        image: number1,
        title: 'Secure Webchat',
        description:
            'An authenticated messaging platform that encrypts conversations end-to-end with ChaCha20-Poly1305 and thoughtful UX touches.',
        year: 2024,
        category: 'Web',
        tags: ['React', 'Node.js', 'WebCrypto']
    },
    {
        image: number2,
        title: 'Tutor Link',
        description:
            'A collaborative tutoring hub that connects students and mentors with scheduling, shared resources, and analytics dashboards.',
        year: 2023,
        category: 'Application',
        tags: ['TypeScript', 'Firebase', 'Design Systems']
    },
    {
        image: number3,
        title: 'Obesity Classification Model',
        description:
            'A machine-learning project predicting obesity trends using lifestyle indicators and explainable visualisations.',
        year: 2023,
        category: 'Data Science',
        tags: ['Python', 'scikit-learn', 'Data Viz']
    },
    {
        image: number4,
        title: 'Image Compression',
        description:
            'A high-performance compressor that recursively quadrants images to balance clarity with file size at scale.',
        year: 2022,
        category: 'Systems',
        tags: ['C++', 'Algorithms', 'Performance']
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

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [sortKey, setSortKey] = useState('latest');

    const categories = useMemo(() => ['All', ...new Set(projects.map(project => project.category))], []);

    const visibleProjects = useMemo(() => {
        const filtered =
            activeFilter === 'All'
                ? projects
                : projects.filter(project => project.category === activeFilter);

        return sortProjects(filtered, sortKey);
    }, [activeFilter, sortKey]);

    return (
        <section id="projects" className="section projects-section">
            <div className="section-inner" data-animate="fade">
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
                        {visibleProjects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                {...project}
                                data-animate="fade-up"
                                style={{ '--reveal-index': index }}
                                year={String(project.year)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="projects-empty" role="status" aria-live="polite" data-animate="fade-up">
                        <h3>No projects found</h3>
                        <p>Try choosing another filter or reset your sorting preference.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
