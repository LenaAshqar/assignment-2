import React from "react";
import "./Contact.css";
import "../FrostedGlass.css";

const Contact = () => {
    return (
        <section id="contact" className="container-contact">
                <h3>Contact Me</h3>
                <form id="contactForm" noValidate>
                    <div className="form-group half-width">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" required />
                    </div>

                    <div className="form-group half-width">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" required />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>

                    <div className="button-row">
                        <button type="submit" className="btn">
                        Send
                        </button>
                    </div>

                    <p id="formMsg" className="form-msg" aria-live="polite"></p>
                </form>
        </section>
    );
};

export default Contact;
