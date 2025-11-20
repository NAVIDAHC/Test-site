import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MissionVision from './components/MissionVision'
import Values from './components/Values'
import Programs from './components/Programs'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    useEffect(() => {
        // Smooth reveal on page load
        document.body.style.opacity = '0'
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease'
            document.body.style.opacity = '1'
        }, 100)

        console.log('✨ FSUU Landing Page - Interactive features loaded successfully!')
    }, [])

    return (
        <>
            <Navbar />
            <Hero />
            <MissionVision />
            <Values />
            <Programs />
            <Stats />
            <Contact />
            <Footer />
        </>
    )
}

export default App
