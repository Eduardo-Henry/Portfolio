import React from 'react'
import '../../styles/footer.css'
import iconInstagram from '../../assets/iconInstagram.svg'
import iconLinkedin from '../../assets/iconLinkedin.svg'
import iconGithub from '../../assets/iconGithub.svg'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-layout">
        {/* Left: big headings list */}
        <div className="footer-left">
          <ul className="footer-headings">
            <li>Education</li>
            <li>Certifications</li>
            <li>Inspirations</li>
            <li>Hobbies</li>
          </ul>
        </div>

        {/* Middle: small list items */}
        <div className="footer-middle">
          <ul className="footer-mini">
            <li>Certifications</li>
            <li>Education</li>
          </ul>
        </div>

        {/* Right: copyright + contact + pills */}
        <div className="footer-right">
          <div className="copyright">Eduardo Carvalho© 2025 — Copyright</div>
          <div className="contact-block">
            <div className="contact-lines">
              <span>du.h.c.oliveira17@gmail.com</span>
            </div>
            <div className="footer-pills">
              <a href="https://www.instagram.com/ocarvalho.dzn/" className="pill small" target="_blank" rel="noopener noreferrer">
                <img src={iconInstagram} alt="Instagram" className="pill-icon" />
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/eduardohenrycarvalho/" className="pill small" target="_blank" rel="noopener noreferrer">
                <img src={iconLinkedin} alt="LinkedIn" className="pill-icon" />
                Linkedin
              </a>
              <a href="https://github.com/Eduardo-Henry" className="pill small" target="_blank" rel="noopener noreferrer">
                <img src={iconGithub} alt="GitHub" className="pill-icon" />
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
