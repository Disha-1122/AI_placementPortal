import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav className="navbar">
        <h2>AI Placement Pro</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>
      </nav>

      <div className="news-ticker">
        <marquee>
          📢 New Coding Practice Module Added |
          🚀 AI Interview Feature Coming Soon |
          🎯 Resume Analyzer Updated |
          💼 Internship Opportunities Updated Weekly |
          🧠 New Aptitude Questions Added
        </marquee>
      </div>

      <section id="home" className="hero">

        <div className="hero-content">

          <h1>
            Crack Your Dream Job with
            <span> AI-Powered Preparation</span>
          </h1>

          <p>
            Practice coding, aptitude, interviews,
            resume building and get AI-driven
            recommendations to maximize your
            placement success.
          </p>

          <div className="buttons">

            <Link to="/register">
              <button className="start-btn">
                Start Preparation
              </button>
            </Link>

            <button
              className="demo-btn"
              onClick={() =>
                document
                  .getElementById("features")
                  .scrollIntoView({
                    behavior: "smooth"
                  })
              }
            >
              Watch Demo
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
            alt="AI"
          />

        </div>

      </section>

      <section className="notices">

        <h2>📢 Latest Notices</h2>

        <div className="notice-container">

          <div className="notice-card">
            TCS Internship Applications Open
          </div>

          <div className="notice-card">
            Resume Building Workshop This Sunday
          </div>

          <div className="notice-card">
            New Aptitude Questions Added
          </div>

          <div className="notice-card">
            Mock Interview Module Updated
          </div>

        </div>

      </section>

      <section id="features" className="features">

        <h2>Platform Features</h2>

        <div className="cards">

          <div className="card">
            <h3>🤖 AI Interview</h3>
            <p>
              Real-time AI mock interviews with
              detailed feedback.
            </p>
          </div>

          <div className="card">
            <h3>💻 Coding Practice</h3>
            <p>
              Solve coding questions and track
              performance.
            </p>
          </div>

          <div className="card">
            <h3>📄 Resume Analyzer</h3>
            <p>
              AI-powered resume review and
              improvement suggestions.
            </p>
          </div>

          <div className="card">
            <h3>📊 Placement Dashboard</h3>
            <p>
              Track progress and placement
              readiness scores.
            </p>
          </div>

        </div>

      </section>

      <section className="gallery">

        <h2>
          🚀 Placement Preparation Journey
        </h2>

        <div className="gallery-grid">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
            alt="Coding"
          />

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
            alt="Students"
          />

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
            alt="Interview"
          />

        </div>

      </section>

      <section className="updates">

        <h2>🔥 Latest Updates</h2>

        <div className="cards">

          <div className="card">
            Resume Analyzer Improved
          </div>

          <div className="card">
            Coding Practice Module Added
          </div>

          <div className="card">
            New Mock Interview Questions Added
          </div>

          <div className="card">
            Dashboard Upgrade Coming Soon
          </div>

        </div>

      </section>

      <section id="about" className="about">

        <h2>About AI Placement Pro</h2>

        <p>
          AI Placement Pro is a smart platform
          designed to help students prepare for
          placements through resume analysis,
          coding practice, mock interviews,
          aptitude tests and AI-driven
          recommendations.
        </p>

      </section>

      <section id="contact" className="contact">

        <h2>Contact Us</h2>

        <p>Email: support@aiplacementpro.com</p>

        <p>Phone: +91 9876543210</p>

        <p>Location: New Delhi, India</p>

      </section>
    </>
  );
}

export default Home;