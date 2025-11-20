const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for your message! We will get back to you soon.')
        e.target.reset()
    }

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p className="contact-description">Join the FSUU community and begin your journey towards excellence.</p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Butuan City, Agusan del Norte, Philippines</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <path d="M22 6l-10 7L2 6" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Website</h4>
                                    <p>www.urios.edu.ph</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-container glass-card">
                        <h3>Send us a Message</h3>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
