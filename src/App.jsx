import React, { useEffect, useState } from 'react';
import './App.css';
import profileImage from './assets/Uma_Profile.png';
import exploreRecipes from './assets/ExploreRecipes.png';
import findMovies from './assets/Findmovies.png';
import dashboard from './assets/dashboard.png';
import noteTakingWeb from './assets/Notetakingweb.png';
import Umaportfolio from './assets/Umaportfolio.png';
import sampleEcommerce from './assets/Sampleecomerce.jpg';

const portfolioItems = [
  { image: sampleEcommerce, title: 'Sample E-commerce' },
  { image: dashboard, title: 'Login Using React' },
  { image: findMovies, title: 'Find Movies' },
  { image: noteTakingWeb, title: 'Note Taking Web' },
  { image: Umaportfolio, title: 'Portfolio Satish' },
  { image: exploreRecipes, title: 'Explore Recipes' },
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    
    useEffect(() => { const title = document.querySelector('.title');
       function reapplyAnimation() {
         title.style.animation = 'none'; void title.offsetWidth; // Trigger reflow 
         title.style.animation = 'typing 3s steps(150, end), blink-caret 0.85s step-end infinite';
         } // Reapply typing effect every 10 seconds 
         const interval = setInterval(reapplyAnimation, 5000); 
      return () => clearInterval(interval); // Clean up interval on component unmount 
      }, []);
  
    
  
    // Create a new FormData object from the form element
    const formData = new FormData(event.target);
    formData.append("access_key", "a8c28f72-18cd-4107-b9e7-c042eb814c58");  // Replace with your actual access key
  
    // Convert FormData to an object and then to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await res.json();
  
      if (result.success) {
        alert(`Message sent successfully! Thank you, ${object.name}.`);
        
        // Reset the form fields after successful submission
        event.target.reset();
      } else {
        console.error("Error", result);
        alert("There was an error submitting your message.");
      }
    } catch (error) {
      console.error("There was an error submitting the form", error);
      alert("There was an error submitting your message.");
    }
  };
  
  

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          U<span style={{ color: '#FF007F' }}>ma</span>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="connect-button"> <a href="#contact" className="connect">Connect With Me</a></button>
        <div className="mobile-menu-toggle" onClick={toggleSidebar}>
          ☰
        </div>
      </header>

      {/* Sidebar for small screens */}
      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <span className="close-btn" onClick={toggleSidebar}>×</span>
        <a href="#home" onClick={toggleSidebar}>Home</a>
        <a href="#about" onClick={toggleSidebar}>About Me</a>
        <a href="#services" onClick={toggleSidebar}>Services</a>
        <a href="#portfolio" onClick={toggleSidebar}>Portfolio</a>
        <a href="#contact" onClick={toggleSidebar}>Contact</a>
      </div>
     
<section id="home" className="main-content">
  <img src={profileImage} alt="Satish" className="profile-image" />
  <h1 className="title">
    I’m <span id="satish">Uma</span>, frontend developer <br /> based in India.
  </h1>
  <p className="description">
    I am a frontend developer from India with 3 years of experience at TCS. I specialize in building responsive and visually compelling web applications.
  </p>
  <div className="buttons">
    <button className="connect-button-main">
      <a href="#contact" className="connect">Connect with me</a>
    </button>
    <button className="resume-button" onClick={() => window.open('/Uma-Portfolio/Uma_Resume(1).pdf', '_blank')}>
      My Resume
    </button>
  </div>
</section>


      
      <section id="about" className="about-section">
  <div className="about-content">
    <img src={profileImage} alt="Satish" className="about-image" />
    <div className="about-text">
      <h2 className="about-title">About <span className="highlight">me</span></h2>
      <p className="about-description">
        I am an experienced frontend developer with over 3 years of expertise in the field. Throughout my career, I have collaborated with multiple clients to contribute to their success.
      </p>
      <div className="skills">
        <div className="skill" style={{ '--percentage': 90 }}>
          <div className="outer">
            <div className="inner">
              <span className="skill-name">HTML & CSS</span>
            </div>
          </div>
        </div>
        <div className="skill" style={{ '--percentage': 85 }}>
          <div className="outer">
            <div className="inner">
              <span className="skill-name">JavaScript</span>
            </div>
          </div>
        </div>
        <div className="skill" style={{ '--percentage': 70 }}>
          <div className="outer">
            <div className="inner">
              <span className="skill-name">React JS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-info">
        <div className="experience-item">
          <span className="experience-number">3.5+</span><span>Years of Experience</span>
        </div>
        <div className="experience-item">
          <span className="experience-number">10+</span><span>Projects Completed</span>
        </div>
        <div className="experience-item">
          <span className="experience-number">5+</span><span>Happy Clients</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Services Section */}
<section id="services" className="services-section">
  <h2 className="services-title">My <span className="highlight">Services</span></h2>
  <div className="services-grid">
    <div className="service-card">
      <div className="service-number">01</div>
      <h3 className="service-title">Modern Web Development</h3>
      <p>Utilizing the latest technologies and frameworks to build scalable web applications.</p>
    </div>
    <div className="service-card">
      <div className="service-number">02</div>
      <h3 className="service-title">SEO Optimization</h3>
      <p>Enhancing website visibility and search engine rankings through SEO best practices.</p>
    </div>
    <div className="service-card">
      <div className="service-number">03</div>
      <h3 className="service-title">Unit Testing</h3>
      <p>Writing and executing unit tests to ensure the reliability and stability of applications.</p>
    </div>
    <div className="service-card">
      <div className="service-number">04</div>
      <h3 className="service-title">Responsive Design</h3>
      <p>Ensuring websites work seamlessly across all devices and screen sizes.</p>
    </div>
    <div className="service-card">
      <div className="service-number">05</div>
      <h3 className="service-title">API Integration</h3>
      <p>Connecting React applications to external services and APIs.</p>
    </div>
    <div className="service-card">
      <div className="service-number">06</div>
      <h3 className="service-title">Performance Optimization</h3>
      <p>Improving the speed and efficiency of React applications.</p>
    </div>
  </div>
</section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <h2 className="services-title">My <span className="highlight">Latest Work</span></h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} image={item.image} title={item.title} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      
      {/* Contact Section */} <section id="contact" className="contact-section"> <h2 className="contact-header">Get in <span className="gradient-text">Touch</span></h2> <div className="contact-container"> 
        <div className="contact-info">
           <p className="contact-text"> I'm currently available to take on new projects, so feel free to send me a message about anything you want me to work on. You can contact anytime. </p>
            <div className="contact-details"> 
              <div className="contact-detail">
        <span className="icon">📧</span> 
          <span>Email: <a href="mailto:nagsatish7893@gmail.com">vaka.uma2311@gmail.com</a></span>
        </div> <div className="contact-detail">
        <span className="icon">📞</span> 
       <span>Phone: 6309359915</span> </div>
        <div className="contact-detail"> 
       <span className="icon">📍</span> 
       <span>Location: Machilipatnam, India</span> </div> 
      </div> </div> <form className="contact-form" onSubmit={onSubmit}> 
       <input type="text" name="name" placeholder="Your Name" required className="form-input" /> 
        <input type="email" name="email" placeholder="Your Email" required className="form-input" /> 
      <textarea name="message" placeholder="Write your message here" required className="form-textarea"></textarea> 
      <button type="submit" className="submit-button">Submit now</button> </form> </div> </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('access_key', 'a8c28f72-18cd-4107-b9e7-c042eb814c58'); // replace with your actual key

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        alert('Thank you for subscribing!');
        setEmail(''); // Reset email field after success
      } else {
        alert('There was an issue subscribing. Please try again.');
      }
    } catch (error) {
      alert('Error submitting the form');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2 className="footer-title">U<span style={{ color: '#FF007F' }}>ma</span>.</h2>
          <p>I am a frontend developer with extensive experience in web design and development.</p>
        </div>
        <div className="footer-subscribe">
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={handleEmailChange} 
              className="subscribe-input" 
              required 
            />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Vaka Uma. All rights reserved.</p>
        <div className="footer-links">
          <a href="#terms">Terms of Services</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#connect">Connect with me</a>
        </div>
      </div>
    </footer>
  );
}

// Portfolio Item Component
const PortfolioItem = ({ image, title }) => (
  <div className="portfolio-item">
    <div className="portfolio-image-wrapper">
      <img src={image} alt={title} className="portfolio-image" />
    </div>
  </div>
);

export default App;
