import React, { useState } from "react";
import { Github, Linkedin, Facebook, Mail, Phone, MapPin, Download, Send, ChevronDown, User, GraduationCap, Briefcase, Code, MessageCircle } from "lucide-react";
import mockData from "../data/mock";

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">
              HEY THERE! I'M {mockData.personalInfo.name.toUpperCase()}
            </h1>
            <p className="hero-title">{mockData.personalInfo.title}</p>
            
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Github">
                <Github size={24} />
              </a>
              <a href="#" className="social-link" aria-label="Linkedin">
                <Linkedin size={24} />
              </a>
              <a href={mockData.personalInfo.social.facebook} className="social-link" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href={`mailto:${mockData.personalInfo.contact.email}`} className="social-link" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>

            <div className="hero-buttons">
              <button className="btn btn-primary">
                <Download size={18} />
                View My CV
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                <MessageCircle size={18} />
                Contact
              </button>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="profile-placeholder">
                <User size={80} />
              </div>
            </div>
            <div className="about-text">
              <h2 className="section-title">About me</h2>
              <p className="about-description">
                {mockData.personalInfo.bio}
              </p>
              <div className="interests">
                <h4>Interests:</h4>
                <p>{mockData.personalInfo.interests.join(", ")}</p>
              </div>
              <div className="languages">
                <h4>Languages:</h4>
                <p>{mockData.personalInfo.languages.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education" id="education">
        <div className="container">
          <div className="section-header">
            <GraduationCap className="section-icon" size={32} />
            <h2 className="section-title">EDUCATION</h2>
          </div>
          
          <div className="timeline">
            {mockData.education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <div className="timeline-meta">
                    <span className="timeline-institution">{edu.institution}</span>
                    <span className="timeline-date">{edu.date}</span>
                  </div>
                  {edu.achievement && (
                    <p className="timeline-achievement">{edu.achievement}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="work" id="work">
        <div className="container">
          <div className="section-header">
            <Briefcase className="section-icon" size={32} />
            <h2 className="section-title">PROJECTS & EXPERIENCES</h2>
          </div>
          
          <div className="work-grid">
            {mockData.projects.map((project, index) => (
              <div key={index} className="work-item">
                <h3 className="work-title">{project.name}</h3>
                <div className="work-meta">
                  <span className="work-tech">{project.technology}</span>
                  <span className="work-date">{project.date}</span>
                </div>
                <p className="work-description">{project.description}</p>
                {project.features && (
                  <ul className="work-features">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="container">
          <div className="section-header">
            <Code className="section-icon" size={32} />
            <h2 className="section-title">SKILLS</h2>
          </div>
          
          <div className="skills-grid">
            {Object.entries(mockData.skills).map(([category, skillList]) => (
              <div key={category} className="skill-category">
                <h3 className="skill-category-title">
                  {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </h3>
                <div className="skill-list">
                  {skillList.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-section">
              <div className="section-header">
                <MessageCircle className="section-icon" size={32} />
                <h2 className="section-title">Get in touch.</h2>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="form-textarea"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="contact-info">
              <p className="contact-description">
                Here's a good spot for a message to your readers to let them know how best to reach out to you.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={20} />
                  <span>{mockData.personalInfo.contact.email}</span>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <span>{mockData.personalInfo.contact.phone}</span>
                </div>
                <div className="contact-item">
                  <Facebook size={20} />
                  <span>facebook.com/keithyyii</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-top" onClick={() => scrollToSection('hero')}>
          <ChevronDown size={24} style={{ transform: 'rotate(180deg)' }} />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Linkedin">
                <Linkedin size={20} />
              </a>
              <a href={mockData.personalInfo.social.facebook} className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href={`mailto:${mockData.personalInfo.contact.email}`} className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="footer-text">© Copyright 2025 Angel Keith Carbon</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;