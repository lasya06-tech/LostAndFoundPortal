import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <h1>About FindIt</h1>
          <p>
            FindIt is a lost and found platform designed to help people
            report, discover, and recover lost belongings through a simple
            and structured system.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-section">
        <div className="container grid">
          <div className="card">
            <h2>Mission</h2>
            <p>
              To create a reliable system where lost items can be reported
              and recovered efficiently using community-driven discovery.
            </p>
          </div>

          <div className="card">
            <h2>Vision</h2>
            <p>
              To build a unified platform that connects people and reduces
              permanent loss of personal belongings.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="about-section gray">
        <div className="container">
          <h2 className="section-title">How it works</h2>

          <div className="steps">
            <div className="step">
              <div className="num">01</div>
              <h3>Report Item</h3>
              <p>User submits details of lost item through a structured form.</p>
            </div>

            <div className="step">
              <div className="num">02</div>
              <h3>Search System</h3>
              <p>Items are listed and searchable across the platform.</p>
            </div>

            <div className="step">
              <div className="num">03</div>
              <h3>Contact Owner</h3>
              <p>Users can directly connect via contact or email system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>

          <div className="features">
            <div className="feature-card">
              Centralized item reporting system
            </div>
            <div className="feature-card">
              Search and filtering capabilities
            </div>
            <div className="feature-card">
              Direct communication between users
            </div>
            <div className="feature-card">
              Secure and scalable backend architecture
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;