import { useEffect, useState } from 'react'

export const useNavbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            // Navbar scroll effect
            if (window.pageYOffset > 100) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }

            // Active section detection
            const sections = document.querySelectorAll('section[id]')
            const scrollY = window.pageYOffset

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight
                const sectionTop = section.offsetTop - 100
                const sectionId = section.getAttribute('id')

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveSection(sectionId)
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return { scrolled, activeSection }
}
