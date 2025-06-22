import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentProject, setCurrentProject] = useState(null)
  const projects = [
    {
      id: 1,
      title: 'MediConnect',
      category: 'fullstack',
      description: 'A comprehensive Doctor-Patient Management System that streamlines healthcare operations with appointment scheduling, medical records, and patient care coordination.',      longDescription: 'MediConnect.tech is a full-stack healthcare management platform designed to bridge the gap between doctors and patients. Features include secure patient registration, appointment booking system, medical history management, prescription tracking, and real-time communication between healthcare providers and patients.',      image: '/image/mediconnect.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Vercel', 'Render'],
      features: [
        'Patient registration & profile management',
        'Doctor dashboard with appointment scheduling',
        'Secure medical records storage',
        'Real-time appointment notifications',
        'Prescription management system',
        'Patient-Doctor messaging system',
        'Medical history tracking',
        'Responsive design for mobile & desktop'
      ],
      liveLink: 'https://mediconnect.tech',
      githubLink: 'https://github.com/ad857/mediconnect',
      status: 'completed'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'A complete e-commerce solution with admin dashboard, payment integration, and real-time inventory management.',
      longDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. Implemented real-time inventory updates and email notifications.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
      features: [
        'User authentication & authorization',
        'Payment processing with Stripe',
        'Real-time inventory management',
        'Admin dashboard with analytics',
        'Responsive design',
        'Email notifications'
      ],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/username/project',
      status: 'completed'    },    {
      id: 4,
      title: 'Portfolio Website',
      category: 'frontend',
      description: 'A modern, responsive portfolio website with smooth animations and dark mode.',
      longDescription: 'Designed and developed a modern portfolio website featuring smooth animations, dark/light mode toggle, responsive design, and optimized performance.',
      image: '/image/portfolio.png',
      technologies: ['React', 'CSS3', 'Framer Motion', 'Vite'],
      features: [
        'Smooth animations',
        'Dark/Light mode',
        'Responsive design',
        'SEO optimized',
        'Fast loading',
        'Contact form'
      ],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/username/project',
      status: 'completed'    },
    {
      id: 5,
      title: 'Social Media API',
      category: 'backend',
      description: 'RESTful API for a social media platform with authentication, posts, and real-time messaging.',
      longDescription: 'Built a comprehensive social media API with user authentication, post creation, likes/comments system, real-time messaging, and image upload functionality.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
      features: [
        'JWT authentication',
        'CRUD operations for posts',
        'Real-time messaging',
        'Image upload with Cloudinary',
        'Rate limiting',
        'API documentation'
      ],
      liveLink: null,
      githubLink: 'https://github.com/username/project',
      status: 'completed'    },
    {
      id: 6,
      title: 'Weather Dashboard',
      category: 'frontend',
      description: 'A beautiful weather dashboard with location-based forecasts and interactive charts.',
      longDescription: 'Created a responsive weather dashboard that displays current weather conditions, 7-day forecasts, and interactive charts. Features location-based weather data and beautiful animations.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      features: [
        'Location-based weather data',
        '7-day weather forecast',
        'Interactive charts',
        'Beautiful animations',
        'Responsive design',
        'PWA capabilities'
      ],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/username/project',
      status: 'completed'    },
    {
      id: 7,
      title: 'AI Chat Application',
      category: 'fullstack',
      description: 'An AI-powered chat application with OpenAI integration and real-time messaging.',
      longDescription: 'Developed an AI chat application integrating OpenAI API for intelligent responses, real-time messaging, conversation history, and user management.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'OpenAI API', 'Socket.io', 'PostgreSQL'],
      features: [
        'OpenAI integration',
        'Real-time messaging',
        'Conversation history',
        'User authentication',
        'Message encryption',
        'Responsive design'
      ],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/username/project',
      status: 'in-progress'
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects', icon: 'fas fa-th' },
    { key: 'fullstack', label: 'Full Stack', icon: 'fas fa-layer-group' },
    { key: 'frontend', label: 'Frontend', icon: 'fas fa-paint-brush' },
    { key: 'backend', label: 'Backend', icon: 'fas fa-server' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const openModal = (project) => {
    setCurrentProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setCurrentProject(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Things I've built and worked on</p>
        </div>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              <i className={filter.icon}></i>
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button 
                    className="btn btn-primary"
                    onClick={() => openModal(project)}
                  >
                    <i className="fas fa-eye"></i>
                    View Details
                  </button>
                </div>
                {project.status === 'in-progress' && (
                  <div className="project-status">In Progress</div>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more">+{project.technologies.length - 3}</span>
                  )}
                </div>
                
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                  )}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {currentProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-content">
              <div className="modal-image">
                <img src={currentProject.image} alt={currentProject.title} />
              </div>
              
              <div className="modal-info">
                <h3 className="modal-title">{currentProject.title}</h3>
                <p className="modal-description">{currentProject.longDescription}</p>
                
                <div className="modal-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {currentProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {currentProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-links">
                  {currentProject.liveLink && (
                    <a href={currentProject.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                  )}
                  <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <i className="fab fa-github"></i>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
