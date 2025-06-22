import React, { useState, useEffect } from "react";
import axios from "axios";
import { Menu, X } from "lucide-react";
import defaultImage from "../../assets/3.webp";

const styles = {
  // Header styles matching HeaderText component
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    color: "#030303",
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "-0.5px",
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  nav: {
    display: "flex",
    gap: "24px",
  },
  navLink: {
    color: "#030303",
    fontSize: "16px",
    textDecoration: "none",
    fontWeight: 500,
    cursor: "pointer",
  },
  mobileMenuButton: {
    background: "none",
    border: "none",
    padding: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  mobileMenu: {
    position: "absolute",
    top: "64px",
    left: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "20px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: "opacity 0.3s ease-in-out",
    zIndex: 999,
  },

  // Hero section styles
  hero: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    padding: "80px 0 60px 0",
    textAlign: "center",
  },
  heroContent: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  },
  heroTitle: {
    fontSize: "3em",
    marginBottom: "15px",
    fontWeight: "600",
    fontFamily: "Lexend Deca, sans-serif",
  },
  heroSubtitle: {
    fontSize: "1.2em",
    marginBottom: "30px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    opacity: 0.9,
  },
  ctaButton: {
    display: "inline-block",
    backgroundColor: "#ffffff",
    color: "#667eea",
    padding: "12px 25px",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "none",
    cursor: "pointer",
    fontSize: "1em",
  },

  // Section styles
  section: {
    padding: "60px 0",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "2.2em",
    marginBottom: "40px",
    color: "#444",
    fontFamily: "Lexend Deca, sans-serif",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  },

  // How it works styles
  howItWorksSteps: {
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  step: {
    flexBasis: "30%",
    minWidth: "250px",
  },
  stepIcon: {
    fontSize: "3em",
    color: "#764ba2",
    marginBottom: "15px",
  },
  stepTitle: {
    fontSize: "1.4em",
    marginBottom: "10px",
    color: "#555",
    fontFamily: "Lexend Deca, sans-serif",
  },

  // Demo grid styles
  demoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  coworkingCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 0,
    paddingBottom: "66.67%",
    overflow: "hidden",
  },
  cardImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  cardContent: {
    padding: "20px",
  },
  cardTitle: {
    marginBottom: "10px",
    fontSize: "1.5em",
    color: "#333",
    fontFamily: "Lexend Deca, sans-serif",
  },
  featuresList: {
    listStyle: "none",
    padding: 0,
    marginBottom: "20px",
    fontSize: "0.95em",
    color: "#555",
  },
  featureItem: {
    marginBottom: "5px",
    paddingLeft: "20px",
    position: "relative",
  },
  featureItemBefore: {
    content: '"✓"',
    position: "absolute",
    left: 0,
    color: "#667eea",
    fontWeight: "bold",
  },
  bookButton: {
    display: "block",
    width: "100%",
    backgroundColor: "#667eea",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },

  // Signup section styles matching ContactForm
  signupSection: {
    backgroundColor: "#202223",
    color: "#ffffff",
    padding: "60px 0",
  },
  signupWrapper: {
    width: "100%",
    margin: "0 auto",
    padding: "30px 20px",
    backgroundColor: "#202223",
    color: "#ffffff",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "stretch",
    justifyContent: "center",
  },
  signupCard: {
    flex: "1 1 48%",
    minWidth: "320px",
    maxWidth: "600px",
    backgroundColor: "#2C2E2F",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  imageWrapper: {
    flex: "1 1 48%",
    minWidth: "320px",
    maxWidth: "600px",
    height: "100%",
    borderRadius: "16px",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
    alignSelf: "center",
    alignItems: "center",
    display: "block",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "16px",
  },
  input: {
    width: "100%",
    height: "44px",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid #cccccc",
    backgroundColor: "#ffffff",
    color: "#030303",
    fontSize: "16px",
    marginBottom: "16px",
  },
  select: {
    width: "100%",
    height: "44px",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid #cccccc",
    backgroundColor: "#ffffff",
    color: "#030303",
    fontSize: "16px",
    marginBottom: "16px",
  },
  button: {
    backgroundColor: "#00C291",
    color: "white",
    border: "none",
    padding: "16px 20px",
    fontSize: "18px",
    borderRadius: "10px",
    cursor: "pointer",
    width: "100%",
    fontWeight: 600,
    transition: "background 0.3s ease",
  },
  success: {
    color: "#00C291",
    fontWeight: 600,
    textAlign: "center",
    fontSize: "20px",
    padding: "40px 0",
  },
  headline: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "12px",
  },
  subheadline: {
    fontSize: "16px",
    marginBottom: "24px",
    lineHeight: "1.6",
  },
  smallText: {
    fontSize: "14px",
    color: "#bbbbbb",
    textAlign: "center",
    marginTop: "12px",
  },
  radioGroup: {
    marginBottom: "16px",
  },
  radioLabel: {
    display: "block",
    marginBottom: "8px",
    fontSize: "16px",
    color: "#ffffff",
    cursor: "pointer",
  },
  radioInput: {
    marginRight: "8px",
    verticalAlign: "middle",
  },

  // Footer styles matching Footer component
  footer: {
    textAlign: "center",
    fontSize: "14px",
    color: "#555",
    marginTop: "20px",
    padding: "20px 0",
    backgroundColor: "#f1f1f1",
  },
};

// Media query to hide image on mobile
const responsiveStyle = `
  @media (max-width: 768px) {
    .hide-on-mobile {
      display: none !important;
    }
  }
`;

const WorkspacesPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
    frequency: "",
    important_factor: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Remove hash if present
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Mobile menu handling
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    // Add responsive styles
    const styleTag = document.createElement("style");
    styleTag.innerHTML = responsiveStyle;
    document.head.appendChild(styleTag);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.head.removeChild(styleTag);
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/demandsubmit", form);
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("There was an issue submitting the form. Please try again.");
    }
  };

  const coworkingSpaces = [
    {
      id: 1,
      name: "Tropical Nomad",
      image: "https://bali.com/wp-content/uploads/2021/12/cworking-2.jpg",
      features: [
        "Fast & Reliable Wi-Fi",
        "Air Conditioned Areas",
        "Networking Events",
        "On-site Cafe",
        "Quiet Zones Available",
      ],
    },
    {
      id: 2,
      name: "The Space Uluwatu",
      image:
        "https://cdn.prod.website-files.com/64b6780f84d27e4bfd91f2d6/66e14140a0e604ac8f2e3479_the-space-%20bali-uluwatu.webp",
      features: [
        "Air-Conditioned Workspaces",
        "Garden & Lounge Areas",
        "Fast Internet (40mbps+)",
        "Free Coffee & Water",
        "Printing Services",
      ],
    },
    {
      id: 3,
      name: "Outpost Ubud",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/257943116.jpg?k=ab3ec6332f9aec58502d65cd30da113cf9c64237d280c2da60195bda31830b43&o=&hp=1",
      features: [
        "Jungle & River Views",
        "Co-living Options",
        "Multiple Work Zones",
        "High-Speed Internet",
        "Cafe & Pool",
      ],
    },
    {
      id: 4,
      name: "Biliq Bali Cosharing",
      image:
        "https://cdn.prod.website-files.com/64b6780f84d27e4bfd91f2d6/67d61c3c5a4273da674ec55a_AF1QipOaBjKKb1WJMpuT1Y10NCIBEh64UnudtJeW6is%3Ds1360-w1360-h1020.jpeg",
      features: [
        "Affordable Options",
        "Outdoor Garden Seating",
        "Meeting Pods",
        "Relaxed Atmosphere",
        "Free Coffee/Tea",
      ],
    },
    {
      id: 5,
      name: "Genesis Creative Centre",
      image: "https://bali.com/wp-content/uploads/2021/12/genesis.jpg",
      features: [
        "Focus on Creatives",
        "Photo/Video Studio Access",
        "Music Recording Booth",
        "Collaborative Environment",
        "Regular Events",
      ],
    },
    {
      id: 6,
      name: "Hub Bali Legian",
      image:
        "https://www.servicedoffice.com/logos/profile/d6fb048e2ad9ef85a7897c269efff1ac.jpeg",
      features: [
        "24/7 Access Available",
        "Central Location",
        "Meeting Rooms",
        "Ergonomic Chairs",
        "Printing Facilities",
      ],
    },
  ];

  const handleBookNow = (spaceName) => {
    alert(`Booking functionality for ${spaceName} will be available soon!`);
  };

  const scrollToSignup = () => {
    const signupSection = document.getElementById("signup");
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Header matching HeaderText component */}
      <div style={styles.header}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={styles.logo}
        >
          BookSpace
        </button>

        {!isMobile ? (
          <nav style={styles.nav}>
            <a href="#how-it-works" style={styles.navLink}>
              How It Works
            </a>
            <a href="#demo" style={styles.navLink}>
              Spaces
            </a>
            <a href="#signup" style={styles.navLink}>
              Sign Up
            </a>
          </nav>
        ) : (
          <>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={styles.mobileMenuButton}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {menuOpen && (
              <div style={styles.mobileMenu}>
                <a
                  href="#how-it-works"
                  style={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="#demo"
                  style={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  Spaces
                </a>
                <a
                  href="#signup"
                  style={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </a>
              </div>
            )}
          </>
        )}
      </div>

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Find Your Perfect Workspace, Instantly.
          </h1>
          <p style={styles.heroSubtitle}>
            Unlock access to inspiring coworking spaces across the globe with
            one simple pass. Discover unique spots and book your desk in
            seconds.
          </p>
          <button onClick={scrollToSignup} style={styles.ctaButton}>
            Get Early Access & Updates
          </button>
        </div>
      </header>

      {/* How It Works Section */}
      <section id="how-it-works" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>How It Works</h2>
          <div style={styles.howItWorksSteps}>
            <div style={styles.step}>
              <div style={styles.stepIcon}>📍</div>
              <h3 style={styles.stepTitle}>1. Discover</h3>
              <p>
                Browse a curated selection of coworking spaces wherever your
                journey takes you.
              </p>
            </div>
            <div style={styles.step}>
              <div style={styles.stepIcon}>🖱️</div>
              <h3 style={styles.stepTitle}>2. Book</h3>
              <p>
                Choose your space, pick a date, and confirm your booking with
                lightning-fast checkout.
              </p>
            </div>
            <div style={styles.step}>
              <div style={styles.stepIcon}>💻</div>
              <h3 style={styles.stepTitle}>3. Work</h3>
              <p>
                Show up, connect, and enjoy a productive day in a vibrant
                workspace environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Explore Spaces in Bali (Demo)</h2>
          <div style={styles.demoGrid}>
            {coworkingSpaces.map((space) => (
              <div key={space.id} style={styles.coworkingCard}>
                <div style={styles.imageContainer}>
                  <img
                    src={space.image}
                    alt={`${space.name} Coworking Space`}
                    style={styles.cardImage}
                  />
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{space.name}</h3>
                  <ul style={styles.featuresList}>
                    {space.features.map((feature, index) => (
                      <li key={index} style={styles.featureItem}>
                        <span style={styles.featureItemBefore}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    style={styles.bookButton}
                    onClick={() => handleBookNow(space.name)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Section matching ContactForm styling */}
      <section id="signup" style={styles.signupSection}>
        <div style={styles.container}>
          {submitted ? (
            <div
              style={{
                width: "100%",
                textAlign: "center",
                padding: "80px 20px",
                backgroundColor: "#2C2E2F",
                borderRadius: "16px",
                color: "#00C291",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Thank you!
              <br />
              We'll notify you upon launch.
            </div>
          ) : (
            <div style={styles.signupWrapper}>
              <div style={styles.signupCard}>
                <form onSubmit={handleSubmit}>
                  <div style={styles.headline}>Be the First to Know!</div>
                  <p style={styles.subheadline}>
                    Sign up to get notified when we launch and receive early
                    bird offers.
                  </p>

                  <input
                    style={styles.input}
                    name="email"
                    type="email"
                    placeholder="Email*"
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-label="Email address"
                  />

                  <input
                    style={styles.input}
                    name="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                    aria-label="Full name"
                  />

                  <input
                    style={styles.input}
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    aria-label="Phone number"
                    type="tel"
                  />

                  <select
                    style={styles.select}
                    name="frequency"
                    value={form.frequency}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      How often do you use coworking spaces?*
                    </option>
                    <option value="daily">Daily</option>
                    <option value="few_times_week">A few times a week</option>
                    <option value="few_times_month">A few times a month</option>
                    <option value="rarely">
                      Rarely (special occasions/travel)
                    </option>
                    <option value="never">Never (but interested)</option>
                  </select>

                  <div style={styles.radioGroup}>
                    <label style={styles.radioLabel}>
                      What's MOST important when choosing a coworking space?*
                    </label>
                    <label style={styles.radioLabel}>
                      <input
                        type="radio"
                        name="important_factor"
                        value="price"
                        checked={form.important_factor === "price"}
                        onChange={handleChange}
                        required
                        style={styles.radioInput}
                      />
                      Price
                    </label>
                    <label style={styles.radioLabel}>
                      <input
                        type="radio"
                        name="important_factor"
                        value="location"
                        checked={form.important_factor === "location"}
                        onChange={handleChange}
                        style={styles.radioInput}
                      />
                      Location/Convenience
                    </label>
                    <label style={styles.radioLabel}>
                      <input
                        type="radio"
                        name="important_factor"
                        value="community"
                        checked={form.important_factor === "community"}
                        onChange={handleChange}
                        style={styles.radioInput}
                      />
                      Community/Events
                    </label>
                    <label style={styles.radioLabel}>
                      <input
                        type="radio"
                        name="important_factor"
                        value="amenities"
                        checked={form.important_factor === "amenities"}
                        onChange={handleChange}
                        style={styles.radioInput}
                      />
                      Amenities (Pool, Cafe, Yoga studio, etc.)
                    </label>
                    <label style={styles.radioLabel}>
                      <input
                        type="radio"
                        name="important_factor"
                        value="wifi"
                        checked={form.important_factor === "wifi"}
                        onChange={handleChange}
                        style={styles.radioInput}
                      />
                      Wi-Fi Speed/Reliability
                    </label>
                    <label style={styles.radioLabel}>
                      <input
                        type="radio"
                        name="important_factor"
                        value="other"
                        checked={form.important_factor === "other"}
                        onChange={handleChange}
                        style={styles.radioInput}
                      />
                      Other
                    </label>
                  </div>

                  <textarea
                    style={styles.textarea}
                    name="comment"
                    placeholder="Additional comments (optional)"
                    value={form.comment}
                    onChange={handleChange}
                    aria-label="Additional comments"
                  />

                  <button type="submit" style={styles.button}>
                    Notify Me!
                  </button>

                  <p style={styles.smallText}>🔒 Your info is safe.</p>
                </form>
              </div>

              <div style={styles.imageWrapper} className="hide-on-mobile">
                <img
                  src={defaultImage}
                  alt="Coworking office with people"
                  style={styles.image}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer matching Footer component */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>© {new Date().getFullYear()} BookSpace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WorkspacesPage;
