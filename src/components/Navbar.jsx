import { useState } from 'react'
import { useNavbar } from '../hooks/useNavbar'

const Navbar = () => {
    const { scrolled, activeSection } = useNavbar()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        const targetSection = document.querySelector(targetId)

        if (targetSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight
            const targetPosition = targetSection.offsetTop - navHeight

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })

            // Close mobile menu
            setMobileMenuOpen(false)
        }
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src="/fsuu-logo.png" alt="FSUU Logo" className="logo-image" />
                    <span className="logo-text">FSUU</span>
                </div>
                <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
                    <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
                    <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
                    <li><a href="#values" className={`nav-link ${activeSection === 'values' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#values')}>Values</a></li>
                    <li><a href="#programs" className={`nav-link ${activeSection === 'programs' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#programs')}>Programs</a></li>
                    <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
                </ul>
                <div className="nav-toggle" id="navToggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
