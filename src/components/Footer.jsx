const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/fsuu-logo.png" alt="FSUU Logo" />
                        <p>Father Saturnino Urios University</p>
                        <p className="footer-tagline">Excellence • Service • Faith</p>
                    </div>
                    <div className="footer-text">
                        <p>&copy; {currentYear} Father Saturnino Urios University. All rights reserved.</p>
                        <p className="footer-mission">A lay-empowered, Filipino, Catholic, Diocesan Educational Institution</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
