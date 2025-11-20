import { useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const MissionVision = () => {
    useScrollAnimation()

    return (
        <section className="mission-vision" id="about">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Mission & Vision</h2>
                    <p className="section-subtitle">Building a community of excellence and service</p>
                </div>
                <div className="mv-grid">
                    <div className="mv-card glass-card animate-on-scroll">
                        <div className="mv-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <h3>Our Vision</h3>
                        <p>A community of men and women committed to pursuing the work of Christ for the wholeness of society.</p>
                    </div>
                    <div className="mv-card glass-card animate-on-scroll">
                        <div className="mv-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <h3>Our Mission</h3>
                        <div className="mission-list">
                            <div className="mission-item">
                                <span className="mission-number">01</span>
                                <p>Provide a balanced program of spiritual formation, educational development, research undertakings, and community involvement for all.</p>
                            </div>
                            <div className="mission-item">
                                <span className="mission-number">02</span>
                                <p>Form self-determined Filipinos who uphold the integrity of creation, are crusaders of truth and justice, proud of their identity and heritage.</p>
                            </div>
                            <div className="mission-item">
                                <span className="mission-number">03</span>
                                <p>Empower all as catalysts for social transformation and development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVision
