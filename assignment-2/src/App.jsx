import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './App.css';
import heroPortrait from './assets/profilePicture.jpg';
import About from './components/about/About.jsx';
import Projects from './components/projects/Projects.jsx';
import Skills from './components/skills/Skills.jsx';
import Contact from './components/contact/Contact.jsx';

const NAV_ITEMS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
];

const SOCIAL_LINKS = [
    { label: 'Email', href: 'mailto:abdulhadi@kfupm.edu.sa', Icon: FiMail },
    { label: 'GitHub', href: 'https://github.com/', Icon: FiGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', Icon: FiLinkedin }
];

function App() {
    return (
        <div className="app-shell">
            <div className="app-background" aria-hidden="true" />

            <header className="hero" id="home">
                <nav className="site-nav">
                    <a href="#home" className="brand" aria-label="Home">
                        AH
                    </a>
                    <div className="nav-links" role="list">
                        {NAV_ITEMS.map(item => (
                            <a key={item.label} href={item.href} role="listitem">
                                {item.label}
                            </a>
                        ))}
                    </div>
                    <a className="nav-cta" href="#contact">
                        Let&apos;s talk
                    </a>
                </nav>

                <div className="hero-grid">
                    <div className="hero-copy">
                        <span className="eyebrow">Junior software engineer</span>
                        <h1>
                            Building human-centred experiences that balance delightful UI with resilient engineering.
                        </h1>
                        <p className="hero-description">
                            I’m a KFUPM computer science student who loves exploring how design, security, and research
                            intersect. From secure messaging systems to data-driven models, I enjoy crafting products
                            that feel polished and purposeful.
                        </p>
                        <div className="hero-actions">
                            <a className="primary-link" href="#projects">
                                View projects
                                <FiArrowUpRight aria-hidden="true" />
                            </a>
                            <div className="social-links" role="list">
                                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                                    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer noopener' : undefined} aria-label={label} role="listitem">
                                        <Icon aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hero-card" aria-labelledby="hero-highlight">
                        <div className="hero-image">
                            <img src={heroPortrait} alt="Abdulhadi smiling" />
                        </div>
                        <div className="hero-highlight" id="hero-highlight">
                            <h2>Curious by design.</h2>
                            <p>
                                Currently experimenting with quantum computing concepts while building inclusive, secure
                                digital products.
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="page-content">
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;
