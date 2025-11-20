import { useEffect } from 'react'
import ParticleCanvas from './ParticleCanvas'

const Hero = () => {
    useEffect(() => {
        // Parallax effect
        const handleScroll = () => {
            const scrolled = window.pageYOffset
            const hero = document.querySelector('.hero-content')

            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.3}px)`
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <ParticleCanvas />
            </div>
            <div className="hero-content">
                <div className="hero-text animate-fade-in">
                    <h1 className="hero-title">
                        Father Saturnino<br />
                        <span className="gradient-text">Urios University</span>
                    </h1>
                    <p className="hero-subtitle">Pursuing the work of Christ for the wholeness of society</p>
                    <div className="hero-buttons">
                        <a href="#programs" className="btn btn-primary">Explore Programs</a>
                        <a href="#about" className="btn btn-secondary">Learn More</a>
                    </div>
                </div>
                <div className="hero-image animate-slide-in">
                    <div className="hero-logo-container">
                        <img src="/fsuu-logo.png" alt="FSUU Logo" className="hero-logo" />
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    )
}

export default Hero
