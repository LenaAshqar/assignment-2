import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './App.css';
import About from './components/about/About.jsx';
import Projects from './components/projects/Projects.jsx';
import Skills from './components/skills/Skills.jsx';
import Contact from './components/contact/Contact.jsx';
import ClickSpark from './components/clickspark/ClickSpark.jsx';
import LetterGlitch from './components/letterglitch/LetterGlitch.jsx';

const NAV_ITEMS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
];

const SOCIAL_LINKS = [
    { label: 'Email', href: 'mailto:leena.alashqar2@gmail.com', Icon: FiMail },
    { label: 'GitHub', href: 'https://github.com/LenaAshqar/', Icon: FiGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leena-al-ashqar-507750264/', Icon: FiLinkedin }
];

function App() {
    return (
        <div className="app-shell">
            <ClickSpark
                sparkColor='#fff'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
            >
            <div className="app-background" aria-hidden="true" />

            <header className="hero" id="home">
                <nav className="site-nav">
                    <a href="#home" className="brand" aria-label="Home">
                        LA
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
                        <span className="eyebrow">Junior software engineering student</span>

                        <h1>
                            Building human-centred experiences that balance delightful UI with resilient engineering.
                        </h1>

                        <p className="hero-description">
                            Interested in exploring the diverse domains in which software can be applied and exploring the world of quantum computing.
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
                    <LetterGlitch />
                </div>
            </header>

            <main className="page-content">
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            </ClickSpark>
        </div>
    );
}

export default App;
