import { useState } from "react";
import './App.css';

// --- YOUR EXISTING IMAGE IMPORTS (UNCHANGED) ---
import logoSvg from './assets/Logo.svg';
import firstOnePng from './assets/FirstOne.png';
import aboutSvg from './assets/about1.png';
import techStackSvg from './assets/newskills.png';
import javaPng from './assets/Java.png';
import sqlPng from './assets/sql.png';
import springSvg from './assets/Spring.png';
import springSecuritySvg from './assets/spring security.svg';
import reactSvg from './assets/react.svg';
import bootstrapPng from './assets/bootstrap.png';
import gitPng from './assets/Git.png';
import dockerPng from './assets/Docker.png';
import azurePng from './assets/Azure.png';
import uiDesignPng from './assets/Ui.png';
import jpaPng from './assets/Jpa.png';
import expenseDemoPng from './assets/ExpenseDemo.png';
import chatPng from './assets/Chat.png';
import projectsBgPng from './assets/Projects.png';
import resumeSvg from './assets/resumebg.png';
import resumePreview from './assets/Resume.png';
import coverPreview from './assets/CV.png';
import contactBg from './assets/Contact.svg';
import emailIcon from './assets/mail.png';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  if (!showPortfolio) {
    return (
      <div className="welcome-mobile">
        <div className="welcome-content">
          <h2>Welcome!</h2>
          <p>
            This portfolio is best viewed on a desktop or
            <br />
            desktop site on browser.
          </p>
          <button onClick={() => setShowPortfolio(true)}>
            Enter Full Portfolio
          </button>
          
          <div className="other-links">
            <p>Or check me out here:</p>
            {/* This new div will help us align the buttons perfectly */}
            <div className="link-buttons">
              <a href="https://github.com/rajxsh" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/rajeshmadhan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="/Rajesh Software Developer.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="background-container">
        <img src={firstOnePng} alt="Background" className="background-image" />
      </div>
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

      <main className="hero-section">
        <div className="hero-content">
          <h1>Software Developer...</h1>
          <h2>Java, Spring Boot, SQL, React</h2>
        </div>
      </main>

      {/* The rest of your portfolio sections remain here, unchanged... */}
      
      <section className="about-section" id="about">
        <div className="about-background">
          <img src={aboutSvg} alt="About Background" className="about-bg-image" />
        </div>
        <div className="about-content">
          <h1 className="about-title">About Me...</h1>
          <div className="about-text">
            <p>★ Hi, I'm Rajesh — a meticulous software engineer. I build scalable cloud applications for healthcare and finance using Java, Spring Boot, REST APIs, and SQL databases.</p>
            <p>★ I enjoy building strong systems, working with others, and converting real problems into simple-to-use solutions. Constantly learning and building. Let's make something amazing together!</p>
          </div>
        </div>
      </section>

      <section className="tech-stack-section" id="skills">
        <div className="tech-background">
          <img src={techStackSvg} alt="Tech Stack Background" className="tech-bg-image" />
        </div>
        <div className="tech-content">
          <h1 className="tech-title">Tech Stack</h1>
          <div className="tech-categories">
            <div className="tech-category">
              <span className="category-label">Languages :</span>
              <div className="tech-items">
                <div className="tech-item">
                  <img src={javaPng} alt="Java" className="tech-icon" />
                  <span>Java</span>
                </div>
                <div className="tech-item">
                  <img src={sqlPng} alt="SQL" className="tech-icon" />
                  <span>SQL</span>
                </div>
              </div>
            </div>
            <div className="tech-category">
              <span className="category-label">Frameworks :</span>
              <div className="tech-items">
                <div className="tech-item">
                  <img src={springSvg} alt="Spring Boot" className="tech-icon" />
                  <span>Spring Boot</span>
                </div>
                <div className="tech-item">
                  <img src={jpaPng} alt="JPA/Hibernate" className="tech-icon" />
                  <span>JPA/Hibernate</span>
                </div>
                <div className="tech-item">
                  <img src={springSecuritySvg} alt="Spring Security" className="tech-icon" />
                  <span>Spring Security</span>
                </div>
              </div>
            </div>
            <div className="tech-category">
              <span className="category-label">Front-End :</span>
              <div className="tech-items">
                <div className="tech-item">
                  <img src={reactSvg} alt="React JS" className="tech-icon" />
                  <span>React JS</span>
                </div>
                <div className="tech-item">
                  <img src={bootstrapPng} alt="Bootstrap" className="tech-icon" />
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>
            <div className="tech-category">
              <span className="category-label">Tools :</span>
              <div className="tech-items">
                <div className="tech-item">
                  <img src={gitPng} alt="Git" className="tech-icon" />
                  <span>Git</span>
                </div>
                <div className="tech-item">
                  <img src={dockerPng} alt="Docker" className="tech-icon" />
                  <span>Docker</span>
                </div>
                <div className="tech-item">
                  <img src={azurePng} alt="Azure" className="tech-icon" />
                  <span>Azure</span>
                </div>
              </div>
            </div>
            <div className="tech-category">
              <span className="category-label">Hidden Skills :</span>
              <div className="tech-items">
                <div className="tech-item">
                  <img src={uiDesignPng} alt="UI Design" className="tech-icon" />
                  <span>UI Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-background">
          <img src={projectsBgPng} alt="Projects Background" className="projects-bg-image" />
        </div>
        <div className="projects-content">
          <h1 className="projects-title">Projects</h1>
          <div className="projects-grid">
            <div className="project-card expense-tracker">
              <div className="project-info">
                <h3 className="project-title">Expense Tracker</h3>
                <div className="project-description">
                  <p>★ A secure web app to track and manage expenses with user authentication and advanced filtering.</p>
                  <p>★ Built with (Spring Boot), (MySQL), (Thymeleaf), and (Bootstrap).</p>
                  <p>★ <a href="#" className="project-link">Demo Link</a></p>
                </div>
              </div>
              <div className="project-image">
                <img src={expenseDemoPng} alt="Expense Tracker Demo" />
              </div>
            </div>
            <div className="project-card chatbot">
              <div className="project-image">
                <img src={chatPng} alt="Spring AI ChatBot Demo" />
              </div>
              <div className="project-info">
                <h3 className="project-title">Spring AI ChatBot</h3>
                <div className="project-description">
                  <p>★ A full-stack AI chatbot app for interactive learning, built with Spring Boot, React, and OpenAI.</p>
                  <p>★ Features real-time Q&A, a modern UI, and easy deployment with Docker.</p>
                  <p>★ <a href="#" className="project-link"> Demo Link</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-cta">
            <p>For more Projects you may find here:</p>
            <a 
              href="https://github.com/rajxsh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button"
            >
              <span className="cta-icon">★</span>
              CHECK IT OUT HERE
            </a>
          </div>
        </div>
      </section>

      <section className="resume-section" id="resume">
        <div className="resume-background">
          <img src={resumeSvg} alt="Resume page background" className="resume-bg-image" />
        </div>
        <div className="resume-container">
          <div className="resume-card">
            <div className="resume-title">Resume</div>
            <div className="resume-preview">
              <img src={resumePreview} alt="Resume Preview" className="resume-preview-image" />
            </div>
            <div className="resume-actions">
              <a href="/Rajesh Software Developer.pdf" download className="resume-btn">Download</a>
              <a href="/Rajesh Software Developer.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">View Online</a>
            </div>
          </div>
          <div className="resume-card">
            <div className="resume-title">Cover Letter</div>
            <div className="resume-preview">
              <img src={coverPreview} alt="Cover Letter Preview" className="resume-preview-image" />
            </div>
            <div className="resume-actions">
              <a href="/Rajesh Cover Letter.pdf" download className="resume-btn">Download</a>
              <a href="/Rajesh Cover Letter.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">View Online</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-background">
          <img src={contactBg} alt="Contact background" className="contact-bg-image" />
        </div>
        <div className="contact-content">
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-subtitle">I'm open to new opportunities and collaborations. Feel free to reach out!</p>
          <div className="contact-details">
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
            
            <form 
              className="contact-form" 
              action="mailto:rajeshmadhan29@gmail.com" 
              method="post" 
              encType="text/plain"
            >
              <label htmlFor="message-input">Mail Me (If Interested) :</label>
              <input 
                type="text" 
                id="message-input"
                name="message" 
                placeholder="Type your message here..."
              />
              <button type="submit" className="send-btn">Send</button>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;