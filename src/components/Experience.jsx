const Experience = () => {  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Tech Startup',
      location: 'Remote',
      period: '2024 - Present',
      type: 'Internship',
      description: [
        'Developed responsive web applications using React.js and modern JavaScript',
        'Collaborated with senior developers to implement new features',
        'Participated in code reviews and followed best practices',
        'Gained hands-on experience with version control using Git'
      ],
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git']
    },
    {
      title: 'Full Stack Development Project',
      company: 'Academic Project',
      location: 'GGITS, Jabalpur', 
      period: '2023 - 2024',
      type: 'Project',
      description: [
        'Built a complete e-commerce web application as college project',
        'Implemented user authentication and shopping cart functionality',
        'Created responsive UI/UX design following modern principles',
        'Deployed the application using modern hosting platforms'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      title: 'Frontend Development Learning',
      company: 'Self Learning',
      location: 'Online Platforms',
      period: '2022 - 2023',
      type: 'Learning',
      description: [
        'Completed multiple online courses on web development',
        'Built several personal projects to practice skills',
        'Learned modern JavaScript frameworks and libraries',
        'Participated in coding challenges and hackathons'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap']
    }
  ]
  const education = [
    {
      degree: 'Bachelor of Technology (Computer Science)',
      institution: 'Gyan Ganga Institute Of Technology and Sciences',
      period: '2022 - 2026',
      description: 'Currently in 7th semester, focusing on Software Development, Data Structures, and Web Technologies'
    },
    {
      degree: 'Higher Secondary (12th) - CBSE',
      institution: 'Park Mount Public School',
      period: '2020 - 2021',
      description: 'Science stream with Mathematics and Computer Science'
    },
    {
      degree: 'Secondary (10th) - CBSE',
      institution: 'Shivam School',
      period: '2018 - 2019',
      description: 'Completed with good grades, foundation in Mathematics and Science'
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>
        
        <div className="experience-content">
          <div className="timeline">
            <h3 className="timeline-title">
              <i className="fas fa-briefcase"></i>
              Work Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <h4 className="job-title">{exp.title}</h4>
                    <div className="job-meta">
                      <span className="company">
                        <i className="fas fa-building"></i>
                        {exp.company}
                      </span>
                      <span className="location">
                        <i className="fas fa-map-marker-alt"></i>
                        {exp.location}
                      </span>
                      <span className="period">
                        <i className="fas fa-calendar"></i>
                        {exp.period}
                      </span>                      <span className={`job-type ${exp.type.toLowerCase()}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="job-responsibilities">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="job-technologies">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="education-section">
            <h3 className="timeline-title">
              <i className="fas fa-graduation-cap"></i>
              Education
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker education-marker"></div>
                <div className="timeline-content">
                  <h4 className="degree-title">{edu.degree}</h4>
                  <div className="education-meta">
                    <span className="institution">
                      <i className="fas fa-university"></i>
                      {edu.institution}
                    </span>
                    <span className="period">
                      <i className="fas fa-calendar"></i>
                      {edu.period}
                    </span>
                  </div>
                  <p className="education-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
