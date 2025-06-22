import { useState, useEffect } from 'react'

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)          // Detect active section with improved logic
          const sections = ['about', 'skills', 'experience', 'projects', 'contact']
          let currentSection = '' // Default to no section (Home will never be active)
            // Get current scroll position with responsive offset
          const isMobile = window.innerWidth <= 768
          const headerOffset = isMobile ? 100 : 120 // Mobile has different header behavior
          const scrollPosition = window.scrollY + headerOffset
            // Find the section that is currently in view
          for (let i = sections.length - 1; i >= 0; i--) {
            const sectionId = sections[i]
            const element = document.getElementById(sectionId)
            if (element) {
              const offsetTop = element.offsetTop
              const offsetHeight = element.offsetHeight
              
              // For better mobile detection, check if section is in viewport
              const sectionMiddle = offsetTop + (offsetHeight / 2)
              const viewportMiddle = scrollPosition - headerOffset + (window.innerHeight / 2)
              
              // If we've scrolled past the start of this section, it's the active one
              if (isMobile) {
                // On mobile, use middle-based detection for better accuracy
                if (Math.abs(viewportMiddle - sectionMiddle) < offsetHeight / 2) {
                  currentSection = sectionId
                  break
                }
              } else {
                // On desktop, use original logic
                if (scrollPosition >= offsetTop) {
                  currentSection = sectionId
                  break
                }
              }
            }
          }
          // If no section was detected on mobile, use simpler detection
          if (isMobile && !currentSection) {
            for (const sectionId of sections) {
              const element = document.getElementById(sectionId)
              if (element) {
                const rect = element.getBoundingClientRect()
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80
                
                // If section is visible in viewport (accounting for header)
                if (rect.top <= headerHeight + 50 && rect.bottom >= headerHeight + 50) {
                  currentSection = sectionId
                  break
                }
              }
            }
          }
          
          // Special case for the last section (contact) - if near bottom of page
          const documentHeight = document.documentElement.scrollHeight
          const windowHeight = window.innerHeight
          const scrollTop = window.scrollY
          
          // If we're near the bottom of the page, activate contact
          if (scrollTop + windowHeight >= documentHeight - 50) {
            currentSection = 'contact'
          }
          
          setActiveSection(currentSection)
          ticking = false
        })
        ticking = true      }
    }
    
    // Initial check on component mount
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <div className="container">        <div className="nav-brand">
          <span 
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
          >
            Aditya Raj
          </span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.href)
              }}
              className={`nav-link ${activeSection === item.section ? 'active' : ''}`}
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
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
