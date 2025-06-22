import { useState, useEffect, useRef } from 'react'

const Hero = () => {  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const profileImageRef = useRef(null)
  
  const roles = [
    'Full Stack Developer',
    'B.Tech Student', 
    'React Enthusiast',
    'Problem Solver',
    'Tech Explorer'
  ]
  useEffect(() => {
    const currentRole = roles[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, roles])
  // Handle profile image hover effect (grayscale remains always)
  const handleImageInteraction = (isHovered) => {
    if (profileImageRef.current) {
      const img = profileImageRef.current.querySelector('img')
      if (img) {
        if (isHovered) {
          img.style.transform = 'scale(0.95)'
        } else {
          img.style.transform = 'scale(0.9)'
        }
      }
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">            <h1 className="hero-title">
              <span className="greeting">
                नमस्ते 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M351.2 4.8c3.2-2 6.6-3.3 10-4.1c4.7-1 9.6-.9 14.1 .1c7.7 1.8 14.8 6.5 19.4 13.6L514.6 194.2c8.8 13.1 13.4 28.6 13.4 44.4l0 73.5c0 6.9 4.4 13 10.9 15.2l79.2 26.4C631.2 358 640 370.2 640 384l0 96c0 9.9-4.6 19.3-12.5 25.4s-18.1 8.1-27.7 5.5L431 465.9c-56-14.9-95-65.7-95-123.7L336 224c0-17.7 14.3-32 32-32s32 14.3 32 32l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-84.9c0-7-1.8-13.8-5.3-19.8L340.3 48.1c-1.7-3-2.9-6.1-3.6-9.3c-1-4.7-1-9.6 .1-14.1c1.9-8 6.8-15.2 14.3-19.9zm-62.4 0c7.5 4.6 12.4 11.9 14.3 19.9c1.1 4.6 1.2 9.4 .1 14.1c-.7 3.2-1.9 6.3-3.6 9.3L213.3 199.3c-3.5 6-5.3 12.9-5.3 19.8l0 84.9c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80c0-17.7 14.3-32 32-32s32 14.3 32 32l0 118.2c0 58-39 108.7-95 123.7l-168.7 45c-9.6 2.6-19.9 .5-27.7-5.5S0 490 0 480l0-96c0-13.8 8.8-26 21.9-30.4l79.2-26.4c6.5-2.2 10.9-8.3 10.9-15.2l0-73.5c0-15.8 4.7-31.2 13.4-44.4L245.2 14.5c4.6-7.1 11.7-11.8 19.4-13.6c4.6-1.1 9.4-1.2 14.1-.1c3.5 .8 6.9 2.1 10 4.1z"/>
                </svg>
                , I'm
              </span>
              <span className="name">Aditya Raj</span>
              <span className="role">
                {displayText}
                <span className="cursor">|</span>
              </span>
            </h1>            <p className="hero-description">
              B.Tech Computer Science student from Patna, Bihar, currently studying at 
              Gyan Ganga Institute Of Technology and Sciences, Jabalpur. 
              Passionate about creating innovative web applications and solving real-world problems through code.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <i className="fas fa-rocket"></i>
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                <i className="fas fa-envelope"></i>
                Let's Connect
              </a>
            </div>
              <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">7th</span>
                <span className="stat-label">Semester</span>
              </div>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Learning</span>
              </div>
            </div>
          </div>          <div className="hero-image">
            <div className="image-container">              <div className="profile-image" 
                   ref={profileImageRef}
                   tabIndex="0" 
                   role="button" 
                   aria-label="Profile image"
                   onMouseEnter={() => handleImageInteraction(true)}
                   onMouseLeave={() => handleImageInteraction(false)}
                   onTouchStart={() => handleImageInteraction(true)}
                   onTouchEnd={() => handleImageInteraction(false)}
                   onFocus={() => handleImageInteraction(true)}
                   onBlur={() => handleImageInteraction(false)}>
                <img src="/image/person.png" alt="Aditya Raj - Full Stack Developer" />
              </div><div className="tech-icons">
                <i className="fab fa-react tech-icon"></i>
                <i className="fab fa-node-js tech-icon"></i>
                <i className="fab fa-js-square tech-icon"></i>
                <i className="fab fa-python tech-icon"></i>
                <i className="fab fa-cuttlefish tech-icon" title="C++"></i>
                <i className="fas fa-database tech-icon" title="MongoDB"></i>
                <i className="fas fa-server tech-icon" title="SQL"></i>
                <i className="fab fa-git-alt tech-icon"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  )
}

export default Hero
