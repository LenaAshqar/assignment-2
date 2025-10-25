import { useEffect, useMemo, useState } from 'react';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMoon, FiSun } from 'react-icons/fi';
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

const resolveInitialTheme = () => {
    if (typeof window === 'undefined') {
        return 'dark';
    }

    const stored = window.localStorage.getItem('theme-preference');
    if (stored === 'light' || stored === 'dark') {
        return stored;
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
    return prefersDark ? 'dark' : 'light';
};

const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
        return 'Good morning';
    }

    if (hour < 17) {
        return 'Good afternoon';
    }

    return 'Good evening';
};

const ANIMATIONS_READY_CLASS = 'animations-ready';
let animationReadyMounts = 0;

function App() {
    const [theme, setTheme] = useState(resolveInitialTheme);
    const [greeting, setGreeting] = useState(getGreeting);

    useEffect(() => {
        document.documentElement.classList.add('has-js');

        return () => {
            document.documentElement.classList.remove('has-js');
        };
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        root.dataset.theme = theme;
        if (document.body) {
            document.body.dataset.theme = theme;
        }
        window.localStorage.setItem('theme-preference', theme);
    }, [theme]);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setGreeting(getGreeting());
        }, 60_000);

        return () => window.clearInterval(interval);
    }, []);

    const ThemeIcon = useMemo(() => (theme === 'dark' ? FiSun : FiMoon), [theme]);

    const handleThemeToggle = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

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

                        <div className="nav-actions">
                            <button
                                type="button"
                                className="theme-toggle"
                                onClick={handleThemeToggle}
                                aria-label={`Activate ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            >
                                <ThemeIcon aria-hidden="true" />
                            </button>

                            <a className="nav-cta" href="#contact">
                                Let&apos;s talk
                            </a>
                        </div>
                    </nav>

                    <div className="hero-grid">
                        <div className="hero-copy">
                            <span className="eyebrow">Junior software engineering student</span>

                            <h1>
                                <span className="hero-greeting">{greeting}, I&apos;m Leena Al Ashqar.</span>
                                <span className="hero-headline">
                                    Building human-centred experiences that balance delightful UI with resilient engineering.
                                </span>
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
                                        <a
                                            key={label}
                                            href={href}
                                            target={href.startsWith('http') ? '_blank' : undefined}
                                            rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                                            aria-label={label}
                                            role="listitem"
                                        >
                                            <Icon aria-hidden="true" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="letter-glitch-card">
                            <LetterGlitch className="letter-glitch" />
                            </div>
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
