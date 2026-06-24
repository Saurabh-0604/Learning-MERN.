import React from 'react'

function About() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Awesome App 🚀</h1>
        <p>
          Build amazing experiences with modern React components and clean UI.
        </p>
        <button >
          Click
        </button>
      </section>

      {/* Features Section */}
      {/* <section className="features">
        <h2>Our Features</h2>

        <div className="feature-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-card">
          <h2>10K+</h2>
          <p>Users</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h2>99%</h2>
          <p>Satisfaction</p>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of users already using our platform.</p>
        <button>Get Started</button>
      </section>
    </div>
  )
}

export default About
