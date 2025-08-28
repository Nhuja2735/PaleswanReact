import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
<div>
  <header>
    <nav className="navbar">
      <a href="index.html"><img src="img/logo.png" alt="Logo" className="logo" /></a>
      <ul className="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="programs.html">Programs</a></li>
        <li><a href="Contact.html">Contact</a></li>
        <li><a href="Login/login.html">Login</a></li>
      </ul>
    </nav>
  </header>

  <section className="hero home-hero">
    <div className="home-hero-bg"></div>
    <div className="home-hero-content">
      <img src="img/logo.png" alt="Paleswan Nepal Logo" className="home-hero-logo" />
      <h1>Welcome to Paleswan Nepal</h1>
      <p className="home-hero-tagline">Empowering communities, inspiring change.</p>
      <a href="about.html" className="btn">Learn More About Us</a>
    </div>
  </section>
  <section className="mission-section">
    <h2>Our Mission</h2>
    <p>Your organization's mission statement goes here. Explain your purpose and what you aim to achieve with a focus on
      positive impact.</p>
  </section>
  <section className="programs-section">
    <h2>Our Programs</h2>
    <div className="program-cards">
      <div className="program-card">
        <h3>Program Name 1</h3>
        <p>Brief description of program 1. Highlight key activities and goals.</p> <a href="programs.html#program1"
          className="btn-outline">Learn More</a>
      </div>
      <div className="program-card">
        <h3>Program Name 2</h3>
        <p>Brief description of program 2. Explain the impact and benefits.</p> <a href="programs.html#program2"
          className="btn-outline">Learn More</a>
      </div>
    </div>
  </section>
  <section className="testimonials-section">
    <h2>What People Say</h2>
    <div className="testimonial-cards">
      <div className="testimonial-card">
        <p>"Your testimonial text goes here, sharing a positive experience."</p>
        <p className="testimonial-author">- Beneficiary Name</p>
      </div>
      <div className="testimonial-card">
        <p>"Another inspiring testimonial about our impact."</p>
        <p className="testimonial-author">- Supporter Name</p>
      </div>
    </div>
  </section>
  <section className="donate-section">
    <h2>Support Our Cause</h2>
    <p>Join us in making a difference. Your contribution helps us continue our work.</p> <a href="donate.html"
      className="btn">Donate Now</a>
  </section>
  <section className="updates-section">
    <h2>Latest Updates</h2>
    <div className="updates-list">
      <div className="update-item">
        <h3>Update Title 1</h3>
        <p>Brief summary of the latest update or news. Stay informed about our progress.</p> <a href="news.html#update1"
          className="btn-text">Read More</a>
      </div>
      <div className="update-item">
        <h3>Update Title 2</h3>
        <p>Brief summary of another important update or event.</p> <a href="news.html#update2" className="btn-text">Read
          More</a>
      </div>
    </div>
  </section>

  <section className="highlights-section">
    <h2>What We Do</h2>
    <div className="highlights-cards">
      <div className="highlight-card">
        <i className="fas fa-child fa-2x highlight-icon"></i>
        <h3>Children's Programs</h3>
        <p>Workshops, camps, and creative events for youth empowerment.</p>
      </div>
      <div className="highlight-card">
        <i className="fas fa-leaf fa-2x highlight-icon"></i>
        <h3>Sustainability</h3>
        <p>Promoting clean energy, green practices, and environmental awareness.</p>
      </div>
      <div className="highlight-card">
        <i className="fas fa-language fa-2x highlight-icon"></i>
        <h3>Cultural Heritage</h3>
        <p>Preserving Nepal’s languages, traditions, and cultural assets.</p>
      </div>
    </div>
  </section>

  <section className="impact-section">
    <h2>Our Impact</h2>
    <div className="impact-stats">
      <div className="impact-stat">
        <h3>350+</h3>
        <p>Children Reached</p>
      </div>
      <div className="impact-stat">
        <h3>18</h3>
        <p>Programs Organized</p>
      </div>
      <div className="impact-stat">
        <h3>7</h3>
        <p>Trainings Conducted</p>
      </div>
      <div className="impact-stat">
        <h3>25</h3>
        <p>Volunteers</p>
      </div>
    </div>
  </section>

  <footer>
    <div className="footer-container">
      <div className="footer-about">
        <h3>About Paleswan Nepal</h3>
        <p>Empowering communities since 2081. Join us in making a difference.</p>
      </div>
      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="programs.html">Programs</a></li>
          <li><a href="Contact.html">Contact</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p><i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal</p>
        <p><i className="fas fa-phone"></i> +977 981234567</p>
        <p><i className="fas fa-envelope"></i> info@PaleswanNepal.org</p>
      </div>
      <div className="footer-social">
        <h3>Follow Us</h3>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; <span>{currentYear}</span> Paleswan Nepal. All rights reserved.</p>
    </div>
  </footer>
</div>
  );
}

export default App;
