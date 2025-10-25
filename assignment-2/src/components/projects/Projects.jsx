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
        year: '2024',
        tags: ['React', 'Node.js', 'WebCrypto']
    },
    {
        image: number2,
        title: 'Tutor Link',
        description:
            'A collaborative tutoring hub that connects students and mentors with scheduling, shared resources, and analytics dashboards.',
        year: '2023',
        tags: ['TypeScript', 'Firebase', 'Design Systems']
    },
    {
        image: number3,
        title: 'Obesity Classification Model',
        description:
            'A machine-learning project predicting obesity trends using lifestyle indicators and explainable visualisations.',
        year: '2023',
        tags: ['Python', 'scikit-learn', 'Data Viz']
    },
    {
        image: number4,
        title: 'Image Compression',
        description:
            'A high-performance compressor that recursively quadrants images to balance clarity with file size at scale.',
        year: '2022',
        tags: ['C++', 'Algorithms', 'Performance']
    }
];

const Projects = () => (
    <section id="projects" className="section projects-section">
        <div className="section-inner">
            <div className="section-header">
                <span className="section-eyebrow">Selected work</span>
                <h2 className="section-title">Projects shaped by experimentation and polish.</h2>
                <p className="section-description">
                    Each project blends rigorous technical foundations with visual storytelling to create useful, dependable
                    experiences.
                </p>
            </div>
            <div className="project-grid">
                {projects.map(project => (
                    <ProjectCard key={project.title} {...project} />
            ))}
        </div>
    </div>
</section>
);

export default Projects;
