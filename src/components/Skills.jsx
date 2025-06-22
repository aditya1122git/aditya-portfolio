const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'fas fa-paint-brush',      skills: [        { name: 'React.js', level: 75, icon: 'fab fa-react' },
        { name: 'HTML5', level: 90, icon: 'fab fa-html5' },
        { name: 'CSS3', level: 85, icon: 'fab fa-css3-alt' },
        { name: 'Tailwind CSS', level: 70, icon: 'fas fa-wind' },
        { name: 'Next.js', level: 50, icon: 'fas fa-arrow-right' },
        { name: 'Bootstrap', level: 80, icon: 'fab fa-bootstrap' }
      ]
    },    {
      title: 'Backend',
      icon: 'fas fa-server',      skills: [        { name: 'Node.js', level: 70, icon: 'fab fa-node-js' },
        { name: 'Express.js', level: 75, icon: 'fas fa-code' },
        { name: 'Java', level: 70, icon: 'fab fa-java' },
        { name: 'REST APIs', level: 65, icon: 'fas fa-exchange-alt' },
        { name: 'Firebase', level: 60, icon: 'fas fa-fire' },
        { name: 'PHP', level: 55, icon: 'fab fa-php' }
      ]
    },
    {
      title: 'Languages',
      icon: 'fas fa-code',      skills: [        { name: 'C', level: 80, icon: 'fas fa-code' },
        { name: 'C++', level: 75, icon: 'fas fa-code' },
        { name: 'Python', level: 65, icon: 'fab fa-python' },
        { name: 'JavaScript', level: 80, icon: 'fab fa-js-square' },
        { name: 'TypeScript', level: 60, icon: 'fab fa-js-square' },
        { name: 'Java', level: 70, icon: 'fab fa-java' }
      ]
    },
    {
      title: 'Database',
      icon: 'fas fa-database',
      skills: [        { name: 'MongoDB', level: 70, icon: 'fas fa-leaf' },
        { name: 'MySQL', level: 75, icon: 'fas fa-database' },
        { name: 'PostgreSQL', level: 60, icon: 'fas fa-database' },
        { name: 'Firebase', level: 65, icon: 'fas fa-fire' },
        { name: 'SQLite', level: 70, icon: 'fas fa-database' },
        { name: 'Redis', level: 40, icon: 'fas fa-memory' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: 'fas fa-tools',      skills: [        { name: 'Git', level: 80, icon: 'fab fa-git-alt' },
        { name: 'GitHub', level: 85, icon: 'fab fa-github' },
        { name: 'VS Code', level: 90, icon: 'fas fa-code' },
        { name: 'Postman', level: 75, icon: 'fas fa-mail-bulk' },
        { name: 'Vercel', level: 70, icon: 'fas fa-cloud' },
        { name: 'Render', level: 65, icon: 'fas fa-cloud' }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <i className={category.icon}></i>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <i className={skill.icon}></i>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>        <div className="certifications">
          <h3>Education & Achievements</h3>
          <div className="cert-list">
            <div className="cert-item">
              <i className="fas fa-graduation-cap"></i>
              <span>B.Tech CSE - GGITS (7th Sem)</span>
            </div>
            <div className="cert-item">
              <i className="fas fa-school"></i>
              <span>12th CBSE - Park Mount Public School</span>
            </div>
            <div className="cert-item">
              <i className="fas fa-certificate"></i>
              <span>10th CBSE - Shivam School</span>
            </div>
            <div className="cert-item">
              <i className="fas fa-code"></i>
              <span>Full Stack Web Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
