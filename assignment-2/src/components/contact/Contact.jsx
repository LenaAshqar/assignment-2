// src/components/Contact.jsx
import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="container-contact">
            <h3>Contact Me</h3>
            <form id="contactForm" noValidate>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required />
                </div>

                <div className="form-group full-width">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit" className="btn">
                    Send
                </button>
                <p id="formMsg" className="form-msg" aria-live="polite"></p>
            </form>
        </section>
    );
};

export default Contact;
