import './Contact.css';
import ClickSpark from "../clickspark/ClickSpark.jsx";

const Contact = () => (
    <section id="contact" className="section contact-section">
        <div className="section-inner">
            <div className="contact-card surface-card">
                <div className="contact-grid">
                    <div className="contact-copy">
                        <span className="section-eyebrow">Contact</span>
                        <h2>Let&apos;s build something memorable.</h2>
                        <p>
                            I&apos;m currently open to internships, freelance collaborations, and research-led projects. Tell me
                            about the challenge you&apos;re facing and we&apos;ll explore it together.
                        </p>
                        <ul className="contact-details">
                            <li>Based in Dhahran, Saudi Arabia.</li>
                            <li>
                                Prefer email? <a href="mailto:leena.alashqar2@gmail.com">leena.alashqar2@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    <form className="contact-form" id="contactForm" noValidate>
                        <div className="form-row">
                            <label htmlFor="name">Name</label>
                            <input id="name" name="name" placeholder="Your name" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" placeholder="you@example.com" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="message">How can I help?</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            Send message
                        </button>
                        <p id="formMsg" className="form-msg" aria-live="polite" />
                    </form>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
