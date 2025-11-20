import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Programs = () => {
    useScrollAnimation()

    const programs = [
        {
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>,
            title: 'Accountancy',
            description: 'Develop expertise in financial management and business analytics'
        },
        {
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>,
            title: 'Arts & Sciences',
            description: 'Explore humanities, social sciences, and natural sciences'
        },
        {
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 3v4M8 3v4M2 11h20" />
            </svg>,
            title: 'Business Administration',
            description: 'Master the art of modern business management and entrepreneurship'
        },
        {
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>,
            title: 'Computer Studies',
            description: 'Innovation in computer science and information technology'
        },
        {
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
            </svg>,
            title: 'Criminal Justice',
            description: 'Training the next generation of law enforcement professionals'
        },
        {
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>,
            title: 'Engineering & Technology',
            description: 'Building tomorrow\'s infrastructure and technological solutions'
        },
        {
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h18v18H3zM12 8v8M8 12h8" />
            </svg>,
            title: 'Nursing',
            description: 'Comprehensive healthcare education with compassionate care'
        },
        {
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>,
            title: 'Teacher Education',
            description: 'Shaping educators who inspire and transform lives'
        },
        {
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="7" />
                <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
            </svg>,
            title: 'Law (Graduate)',
            description: 'Advanced legal education for aspiring legal professionals'
        }
    ]

    return (
        <section className="programs-section" id="programs">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Academic Programs</h2>
                    <p className="section-subtitle">Excellence across diverse fields of study</p>
                </div>
                <div className="programs-grid">
                    {programs.map((program, index) => (
                        <div key={index} className="program-card animate-on-scroll">
                            <div className="program-icon">
                                {program.icon}
                            </div>
                            <h3>{program.title}</h3>
                            <p>{program.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Programs
