import "./About.css";

const highlights = [
    {
        title: 'Approach',
        description: 'Blend research and prototyping to quickly validate ideas before scaling them with clean, maintainable code.'
    },
    {
        title: 'Focus areas',
        description: 'Secure web applications, human-centred interfaces, and exploratory work in quantum computing.'
    },
    {
        title: 'Currently learning',
        description: 'Applying advanced cryptography patterns to real-world products while refining 3D graphics workflows.'
    }
];

const About = () => (
    <section id="about" className="section about-section">
        <div className="section-inner">
            <div className="section-header">
                <span className="section-eyebrow">About</span>
                <h2 className="section-title">Grounded in curiosity, driven by craft.</h2>
                <p className="section-description">
                    I am a junior software engineer at KFUPM with a passion for building purposeful digital experiences.
                    My work spans security-focused platforms, data-rich tools, and visually polished interfaces crafted with
                    empathy and intention.
                </p>
            </div>

            <div className="about-grid">
                {highlights.map(item => (
                    <article key={item.title} className="about-card surface-card">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default About;