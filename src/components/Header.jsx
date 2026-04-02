import { useState, useEffect } from 'react'

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact']
      let currentSection = 'hero'
      
      // Check if we're at the very top of the page
      if (window.scrollY < 100) {
        currentSection = 'hero'
      } else {
        // Find the section that's currently in view
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i]
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            const headerHeight = 80 // Approximate header height
            
            // Check if section is in view (accounting for header offset)
            if (rect.top <= headerHeight + 50) {
              currentSection = section
              break
            }
          }
        }
      }
      
      setActiveSection(currentSection)
    }
    
    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)  }, [])

  const menuItems = [
    { name: 'Home', href: '#hero', section: 'hero' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Experience', href: '#experience', section: 'experience' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Contact', href: '#contact', section: 'contact' }
  ]

  const scrollToSection = (href) => {
    if (href === '#hero') {
      // For Home, scroll to the very top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        // Get header height for offset
        const headerHeight = document.querySelector('.header').offsetHeight
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight - 20 // Extra 20px for better spacing
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
    setIsMenuOpen(false)
  }
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <a
            href="#hero"
            className="logo"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            aria-label="Go to home section"
          >
            Aditya Raj
          </a>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Primary navigation">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.href)
              }}
              className={`nav-link ${activeSection === item.section ? 'active' : ''}`}
              aria-current={activeSection === item.section ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="header-controls">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            type="button"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
