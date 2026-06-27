import "./Home.css";
export default function Home() {
  const lostItems = [
    { name: "iPhone 15 Pro", location: "Library Block", time: "2 hours ago" },
    { name: "College ID Card", location: "Canteen", time: "5 hours ago" },
    { name: "Black Wallet", location: "Parking Area", time: "Yesterday" },
  ];

  const foundItems = [
    { name: "Car Keys", location: "Main Gate", time: "1 hour ago" },
    { name: "Smart Watch", location: "Sports Ground", time: "Today" },
    { name: "Backpack", location: "Bus Stop", time: "Yesterday" },
  ];

  return (
    <div className="home">


      {/* HERO */}
      <section className="hero">

        <div className="hero-left">
          <span className="tag">
            Trusted by Students, Offices & Communities
          </span>

          <h1>
            Lost Something?
            <br />
            <span>Find It Faster.</span>
          </h1>

          <p>
            Report lost items, discover found belongings,
            and reconnect people with what matters most.
            A smarter way to recover your valuables.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Report Lost Item
            </button>

            <button className="secondary-btn">
              Browse Items
            </button>
          </div>
        </div>

        <div className="hero-right">

          <div className="floating-card card1">
            <h3>📱 iPhone 15</h3>
            <p>Lost near Library</p>
            <span>2 hours ago</span>
          </div>

          <div className="floating-card card2">
            <h3>🔑 Car Keys</h3>
            <p>Found near Gate</p>
            <span>Today</span>
          </div>

          <div className="floating-card card3">
            <h3>🎒 Backpack</h3>
            <p>Recovered Successfully</p>
            <span>Owner Found</span>
          </div>

          <div className="hero-circle"></div>

        </div>

      </section>

      {/* STATS */}
      <section className="stats-section">

        <div className="stat-box">
          <h2>1500+</h2>
          <p>Items Reported</p>
        </div>

        <div className="stat-box">
          <h2>900+</h2>
          <p>Items Returned</p>
        </div>

        <div className="stat-box">
          <h2>5000+</h2>
          <p>Active Users</p>
        </div>

        <div className="stat-box">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="section">

        <div className="section-header">
          <h2>How It Works</h2>
          <p>
            Recover belongings in just three simple steps.
          </p>
        </div>

        <div className="how-grid">

          <div className="how-card">
            <div className="icon">📤</div>
            <h3>Report Item</h3>
            <p>
              Upload item details with image and location.
            </p>
          </div>

          <div className="how-card">
            <div className="icon">🔍</div>
            <h3>Search & Match</h3>
            <p>
              Browse listings and discover possible matches.
            </p>
          </div>

          <div className="how-card">
            <div className="icon">🤝</div>
            <h3>Connect</h3>
            <p>
              Contact the owner and complete recovery.
            </p>
          </div>

        </div>

      </section>

      {/* CATEGORIES */}
      <section className="section gray">

        <div className="section-header">
          <h2>Popular Categories</h2>
        </div>

        <div className="categories">

          <div className="category">📱 Electronics</div>
          <div className="category">🎒 Bags</div>
          <div className="category">🔑 Keys</div>
          <div className="category">💳 ID Cards</div>
          <div className="category">⌚ Watches</div>
          <div className="category">📚 Books</div>

        </div>

      </section>

      {/* LOST ITEMS */}
      <section className="section">

        <div className="section-header">
          <h2>Recently Lost Items</h2>
        </div>

        <div className="items-grid">
          {lostItems.map((item, index) => (
            <div className="item-card" key={index}>
              <div className="item-image">📦</div>

              <h3>{item.name}</h3>

              <p>{item.location}</p>

              <span>{item.time}</span>

              <button>View Details</button>
            </div>
          ))}
        </div>

      </section>

      {/* FOUND ITEMS */}
      <section className="section gray">

        <div className="section-header">
          <h2>Recently Found Items</h2>
        </div>

        <div className="items-grid">
          {foundItems.map((item, index) => (
            <div className="item-card" key={index}>
              <div className="item-image">✅</div>

              <h3>{item.name}</h3>

              <p>{item.location}</p>

              <span>{item.time}</span>

              <button>View Details</button>
            </div>
          ))}
        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="section">

        <div className="section-header">
          <h2>Success Stories</h2>
        </div>

        <div className="testimonial-grid">

          <div className="testimonial">
            <p>
              "Recovered my wallet within a day. Amazing platform!"
            </p>
            <h4>- Rahul</h4>
          </div>

          <div className="testimonial">
            <p>
              "Found my ID card after losing it during exams."
            </p>
            <h4>- Priya</h4>
          </div>

          <div className="testimonial">
            <p>
              "Easy to use and helped me return a lost phone."
            </p>
            <h4>- Arjun</h4>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta">

        <h2>
          Help Someone Find What Matters Most
        </h2>

        <p>
          Join thousands of users helping recover lost belongings.
        </p>

        <button className="cta-btn">
          Get Started
        </button>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div>
          <h3>FindIt</h3>
          <p>
            Connecting people with their lost belongings.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Lost Items</p>
          <p>Found Items</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Contact</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>

      </footer>

    </div>
  );
}