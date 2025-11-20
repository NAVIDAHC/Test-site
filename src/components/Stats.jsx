import { useEffect, useRef } from 'react'

const Stats = () => {
    const statsRef = useRef([])

    useEffect(() => {
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target
                    const targetValue = parseInt(target.getAttribute('data-target'))
                    const duration = 2000 // 2 seconds
                    const increment = targetValue / (duration / 16) // 60fps
                    let current = 0

                    const updateCounter = () => {
                        current += increment
                        if (current < targetValue) {
                            target.textContent = Math.floor(current)
                            requestAnimationFrame(updateCounter)
                        } else {
                            target.textContent = targetValue
                        }
                    }

                    updateCounter()
                    target.classList.add('visible')
                    statObserver.unobserve(target)
                }
            })
        }, { threshold: 0.5 })

        statsRef.current.forEach(stat => {
            if (stat) statObserver.observe(stat)
        })

        return () => {
            statsRef.current.forEach(stat => {
                if (stat) statObserver.unobserve(stat)
            })
        }
    }, [])

    const stats = [
        { value: 9, label: 'Colleges' },
        { value: 50, label: 'Years of Excellence' },
        { value: 5, label: 'Core Values' },
        { value: 1000, label: 'Students' }
    ]

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item animate-on-scroll">
                            <div
                                className="stat-number"
                                data-target={stat.value}
                                ref={el => statsRef.current[index] = el}
                            >
                                0
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats
