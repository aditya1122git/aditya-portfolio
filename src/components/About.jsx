const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
          <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="/image/person.jpeg" alt="Aditya Raj - About me" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Always Learning</h4>
                  <p>Staying updated with latest technologies</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <div className="text-content">
              <p>
                Hello! I'm <strong>Aditya Raj</strong>, a passionate B.Tech Computer Science student currently in my 7th semester 
                at <strong>Gyan Ganga Institute Of Technology and Sciences, Jabalpur</strong>. Originally from Patna, Bihar, 
                I completed my schooling from Park Mount Public School (12th CBSE - 2021) and Shivam School (10th CBSE - 2019).
              </p>
              
              <p>
                My journey in programming began with curiosity and has evolved into a passion for creating meaningful digital solutions. 
                I specialize in <strong>full-stack web development</strong> with expertise in React.js, Node.js, MongoDB, and modern 
                deployment platforms like Vercel and Render.
              </p>
              
              <p>
                I've successfully built projects like <strong>MediConnect.tech</strong> - a comprehensive Doctor-Patient Management System 
                that showcases my ability to work with complex healthcare data and user workflows. I believe in writing clean, 
                efficient code and creating user-centric applications that solve real-world problems.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing my learning journey with the developer community.
              </p>
            </div>
          </div>
        </div>
        
        <div className="about-highlights">
          <div className="highlight">
            <i className="fas fa-code"></i>
            <h4>Full-Stack Developer</h4>
            <p>MERN Stack & Modern Web Technologies</p>
          </div>
          <div className="highlight">
            <i className="fas fa-graduation-cap"></i>
            <h4>Computer Science Student</h4>
            <p>7th Semester at GGITS, Jabalpur</p>
          </div>
          <div className="highlight">
            <i className="fas fa-project-diagram"></i>
            <h4>Project Builder</h4>
            <p>Healthcare & Web Application Projects</p>
          </div>
          <div className="highlight">
            <i className="fas fa-lightbulb"></i>
            <h4>Problem Solver</h4>
            <p>C/C++, Data Structures & Algorithms</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
