import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Values = () => {
    useScrollAnimation()

    const values = [
        { letter: 'U', title: 'Unity', description: 'Working together as one community towards common goals' },
        { letter: 'R', title: 'Religiosity', description: 'Nurturing spiritual growth and faith in our daily lives' },
        { letter: 'I', title: 'Integrity', description: 'Upholding honesty, ethics, and moral principles' },
        { letter: 'A', title: 'Altruism', description: 'Serving others selflessly with compassion and care' },
        { letter: 'N', title: 'Nationalism', description: 'Pride in our Filipino identity and cultural heritage' }
    ]

    return (
        <section className="values-section" id="values">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Urian Values</h2>
                    <p className="section-subtitle">The five rays of excellence guiding every Urian</p>
                </div>
                <div className="values-grid">
                    {values.map((value, index) => (
                        <div
                            key={value.letter}
                            className="value-card animate-on-scroll"
                            style={{ '--delay': `${(index + 1) * 0.1}s` }}
                        >
                            <div className="value-icon">{value.letter}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Values
