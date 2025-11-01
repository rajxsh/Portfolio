import { useState } from 'react'
import './App.css'

// asset imports
import logoSvg from './assets/Logo.svg'
import firstOnePng from './assets/FirstOne.png'
import aboutSvg from './assets/about1.png'
import techStackSvg from './assets/newskills.png'
import javaPng from './assets/Java.png'
import sqlPng from './assets/sql.png'
import springSvg from './assets/Spring.png'
import springSecuritySvg from './assets/spring security.svg'
import reactSvg from './assets/react.svg'
import echoproxyPng from './assets/echoproxy.png'
import webhookinboxPng from './assets/webhookinbox.png'
import bootstrapPng from './assets/bootstrap.png'
import gitPng from './assets/Git.png'
import dockerPng from './assets/Docker.png'
import azurePng from './assets/Azure.png'
import uiDesignPng from './assets/Ui.png'
import jpaPng from './assets/Jpa.png'
import expenseDemoPng from './assets/ExpenseDemo.png'
import chatPng from './assets/Chat.png'
import projectsBgPng from './assets/Projects.png'
import resumeSvg from './assets/resumebg.png'
import resumePreview from './assets/Resume.png'
import coverPreview from './assets/CV.png'
import contactBg from './assets/Contact.svg'
import emailIcon from './assets/mail.png'
import linkedinIcon from './assets/linkedin.png'
import githubIcon from './assets/github.png'

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false)

  // Updated PDF file paths (placed in /public folder)
  const resumeUrl = `${import.meta.env.BASE_URL}Rajesh_M_FullStackDeveloper_2025.pdf`
  const coverLetterUrl = `${import.meta.env.BASE_URL}Rajesh_FSD_Cover_Letter.pdf`

  if (!showPortfolio) {
    return (
      <div className="welcome-mobile">
        <div className="welcome-content">
          <h2>Welcome!</h2>
          <p>
            This portfolio is best viewed on a desktop or <br /> desktop site on your browser.
          </p>
          <button onClick={() => setShowPortfolio(true)}>Enter Full Portfolio</button>

          <div className="other-links">
            <p>Or check me out here:</p>
            <div className="link-buttons">
              <a href="https://github.com/rajxsh" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/rajeshmadhan" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="background-container">
        <img src={firstOnePng} alt="Background" className="background-image" />
      </div>

      {/* ---- NAVBAR ---- */}
      <header className="navbar">
        <div className="logo">
          <img src={logoSvg} alt="Logo" />
        </div>
        <nav className="nav-links">
          <a href="#about" className="active">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ---- HERO SECTION ---- */}
      <main className="hero-section">
        <div className="hero-content">
          <h1>Software Developer...</h1>
          <h2>Java, Spring Boot, SQL, React</h2>
        </div>
      </main>

      {/* ---- ABOUT SECTION ---- */}
      <section className="about-section" id="about">
        <div className="about-background">
          <img src={aboutSvg} alt="About Background" className="about-bg-image" />
        </div>
        <div className="about-content">
          <h1 className="about-title">About Me...</h1>
         <div className="about-text">
  <p>
    ★ Hi, I’m Rajesh — a software developer who enjoys turning complex ideas into dependable, real‑world solutions. 
    I specialize in Java, Spring Boot, and React, and I’ve built and deployed full‑stack applications that help businesses
    run more efficiently and securely.
  </p>
  <p>
    ★ My focus is on building strong back‑end systems, refining APIs, and designing clean user experiences. 
    I love collaborating with teams, improving existing codebases, and learning new technologies that make development faster and smarter. 
    Every project I work on is an opportunity to grow, simplify workflows, and deliver something I’m proud of.
  </p>
</div>  
        </div>
      </section>

      {/* ---- TECH STACK SECTION ---- */}
      <section className="tech-stack-section" id="skills">
        <div className="tech-background">
          <img src={techStackSvg} alt="Tech Stack Background" className="tech-bg-image" />
        </div>
        <div className="tech-content">
          <h1 className="tech-title">Tech Stack</h1>
          <div className="tech-categories">
            <div className="tech-category">
              <span className="category-label">Languages:</span>
              <div className="tech-items">
                <div className="tech-item"><img src={javaPng} alt="Java" className="tech-icon" /><span>Java</span></div>
                <div className="tech-item"><img src={sqlPng} alt="SQL" className="tech-icon" /><span>SQL</span></div>
              </div>
            </div>

            <div className="tech-category">
              <span className="category-label">Frameworks:</span>
              <div className="tech-items">
                <div className="tech-item"><img src={springSvg} alt="Spring Boot" className="tech-icon" /><span>Spring Boot</span></div>
                <div className="tech-item"><img src={jpaPng} alt="JPA/Hibernate" className="tech-icon" /><span>JPA/Hibernate</span></div>
                <div className="tech-item"><img src={springSecuritySvg} alt="Spring Security" className="tech-icon" /><span>Spring Security</span></div>
              </div>
            </div>

            <div className="tech-category">
              <span className="category-label">Front-End:</span>
              <div className="tech-items">
                <div className="tech-item"><img src={reactSvg} alt="React JS" className="tech-icon" /><span>React JS</span></div>
              </div>
            </div>

            <div className="tech-category">
              <span className="category-label">Tools:</span>
              <div className="tech-items">
                <div className="tech-item"><img src={gitPng} alt="Git" className="tech-icon" /><span>Git</span></div>
                <div className="tech-item"><img src={dockerPng} alt="Docker" className="tech-icon" /><span>Docker</span></div>
                <div className="tech-item"><img src={azurePng} alt="Azure" className="tech-icon" /><span>Azure</span></div>
              </div>
            </div>

            <div className="tech-category">
              <span className="category-label">Hidden Skills:</span>
              <div className="tech-items">
                <div className="tech-item"><img src={uiDesignPng} alt="UI Design" className="tech-icon" /><span>UI Design</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- PROJECTS SECTION ---- */}
      <section className="projects-section" id="projects">
        <div className="projects-background"><img src={projectsBgPng} alt="Projects Background" className="projects-bg-image" /></div>
        <div className="projects-content">
          <h1 className="projects-title">Projects</h1>
          <div className="projects-grid">

            {/* Project 1: Webhook Inbox */}
            <div className="project-card">
              <div className="project-info">
                <h3 className="project-title">Webhook Inbox – Real-Time Webhook Debugger</h3>
                <p>★ Built an API testing tool (Spring Boot, PostgreSQL) to capture and replay webhooks.</p>
                <p>★ Used GPT‑4/Codex to auto‑generate test data and documentation, reducing setup by 60%.</p>
                <p>★ Implemented SSE for real‑time monitoring, improving integration speed by 35%.</p>
              </div>
              <div className="project-image">
                <img src={webhookinboxPng} alt="Webhook Inbox Demo" />
              </div>
            </div>

            {/* Project 2: EchoStreamProxy */}
            <div className="project-card">
              <div className="project-image">
                <img src={echoproxyPng} alt="EchoStreamProxy Demo" />
              </div>
              <div className="project-info">
                <h3 className="project-title">EchoStreamProxy – API Proxy Tool</h3>
                <p>★ Developed a lightweight HTTP proxy handling 1k+ daily requests with event logging.</p>
                <p>★ Used GPT‑4/Claude 3 for refactoring and troubleshooting during builds.</p>
                <p>★ Reduced failed API requests by 20% via optimized retry and timeout handling.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---- RESUME SECTION ---- */}
      <section className="resume-section" id="resume">
        <div className="resume-background">
          <img src={resumeSvg} alt="Resume Background" className="resume-bg-image" />
        </div>

        <div className="resume-container">
          {/* Resume Card */}
          <div className="resume-card">
            <div className="resume-title">Resume</div>
            <div className="resume-preview">
              <img src={resumePreview} alt="Resume Preview" className="resume-preview-image" />
            </div>
            <div className="resume-actions">
              <a href={resumeUrl} download className="resume-btn">Download</a>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-btn">View Online</a>
            </div>
          </div>

          {/* Cover Letter Card */}
          <div className="resume-card">
            <div className="resume-title">Cover Letter</div>
            <div className="resume-preview">
              <img src={coverPreview} alt="Cover Letter Preview" className="resume-preview-image" />
            </div>
            <div className="resume-actions">
              <a href={coverLetterUrl} download className="resume-btn">Download</a>
              <a href={coverLetterUrl} target="_blank" rel="noopener noreferrer" className="resume-btn">View Online</a>
            </div>
          </div>
        </div>
      </section>

      {/* ---- CONTACT SECTION ---- */}
      <section className="contact-section" id="contact">
        <div className="contact-background">
          <img src={contactBg} alt="Contact Background" className="contact-bg-image" />
        </div>
        <div className="contact-content">
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-subtitle">I'm open to new opportunities and collaborations. Feel free to reach out!</p>

          <div className="contact-item">
            <img src={emailIcon} alt="Email" className="contact-icon" />
            <a href="mailto:rajeshmadhan29@gmail.com">rajeshmadhan29@gmail.com</a>
          </div>

          <div className="contact-item">
            <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
            <a href="https://linkedin.com/in/rajeshmadhan" target="_blank" rel="noopener noreferrer">linkedin.com/in/rajeshmadhan</a>
          </div>

          <div className="contact-item">
            <img src={githubIcon} alt="GitHub" className="contact-icon" />
            <a href="https://github.com/rajxsh" target="_blank" rel="noopener noreferrer">github.com/rajxsh</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App