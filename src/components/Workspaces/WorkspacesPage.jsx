import React, { useState, useEffect } from "react";
import axios from "axios";
import { Menu, X } from "lucide-react";
import defaultImage from "../../assets/3.webp";

// Re-using the HeaderText component for a consistent header
import HeaderText from "../Header/HeaderText";
import Footer from "../Footer";

import appScreen1 from "../appScreens/1 - Launch BookSpace.png";
import appScreen2 from "../appScreens/2 - Top up.png";
import appScreen3 from "../appScreens/3 - Find spaces.png";
import appScreen4 from "../appScreens/4 - Check features.png";
import appScreen5 from "../appScreens/5 - Book & check in.png";

const styles = {
  // Global styles from index.css
  page: {
    fontFamily: "'Space Grotesk', sans-serif",
    color: "#3f3d3d",
    backgroundColor: "#ffffff", // Default background
  },
  pageContainer: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  },
  h1: {
    fontFamily: "'Lexend Deca', sans-serif",
    fontSize: "32px",
    fontWeight: 700,
    color: "#353232",
  },
  h2: {
    fontFamily: "'Lexend Deca', sans-serif",
    fontSize: "28px",
    fontWeight: 700,
    color: "#353232",
    textAlign: "center",
    marginBottom: "40px",
  },
  h3: {
    fontFamily: "'Lexend Deca', sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    color: "#353232",
  },

  // Hero section styles - aligned with HomePage's feel
  hero: {
    backgroundColor: "#f9f9f9", // A light grey like other sections
    color: "#3f3d3d",
    padding: "60px 0",
    textAlign: "center",
  },
  heroTitle: {
    fontFamily: "'Lexend Deca', sans-serif",
    fontSize: "3em",
    marginBottom: "15px",
    fontWeight: 700,
    color: "#353232",
  },
  heroSubtitle: {
    fontSize: "1.2em",
    marginBottom: "30px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  // CTA button matching HeroButton and ContactForm
  ctaButton: {
    cursor: "pointer",
    minWidth: "183px",
    height: "48px",
    padding: "12px 25px",
    border: "0",
    borderRadius: "8px",
    backgroundColor: "#00C291", // Primary green
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: 500,
    transition: "background-color 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
  },

  // Section styles
  section: {
    padding: "60px 0",
    borderTop: "1px solid #e0e0e0",
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
    color: "#00C291", // Using primary green
    marginBottom: "15px",
  },

  // Demo grid styles (coworking cards)
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
    width: "100%",
    height: "200px", // Fixed height for consistency
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cardContent: {
    padding: "20px",
  },
  featuresList: {
    listStyle: "none",
    padding: 0,
    marginBottom: "20px",
    fontSize: "0.95em",
    color: "#555",
  },
  featureItem: {
    marginBottom: "8px",
    paddingLeft: "20px",
    position: "relative",
  },
  featureCheck: {
    position: "absolute",
    left: 0,
    color: "#00C291", // Primary green
    fontWeight: "bold",
  },
  bookButton: {
    cursor: "pointer",
    width: "100%",
    height: "44px",
    padding: "0px 8px",
    border: "0",
    borderRadius: "8px",
    backgroundColor: "#030303", // Dark button for contrast inside card
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: 500,
    transition: "background-color 0.3s ease",
  },

  // Signup form styles matching ContactForm.jsx exactly
  signupSection: {
    backgroundColor: "#202223",
    color: "#ffffff",
    // The padding is now handled by the wrapper inside
  },
  signupWrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "30px 20px", // Exact padding match with ContactForm
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
  formImageWrapper: {
    flex: "1 1 48%",
    minWidth: "320px",
    maxWidth: "600px",
    borderRadius: "16px",
    overflow: "hidden",
    height: "100%", // Added missing height to ensure equal column size
  },
  formImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
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
    fontFamily: "'Space Grotesk', sans-serif",
  },
  select: {
    width: "100%",
    height: "44px",
    padding: "0 14px",
    borderRadius: "10px",
    border: "1px solid #cccccc",
    color: "#030303",
    fontSize: "16px",
    marginBottom: "16px",
    fontFamily: "'Space Grotesk', sans-serif",
    backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width='20'%20height='20'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M5%208l5%205%205-5z'%20fill='%23555'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 14px center",
    appearance: "none",
  },
  textarea: {
    width: "100%",
    minHeight: "80px",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid #cccccc",
    backgroundColor: "#ffffff",
    color: "#030303",
    fontSize: "16px",
    fontFamily: "'Space Grotesk', sans-serif",
    marginBottom: "16px",
  },
  formButton: {
    // The green one
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
  formHeadline: {
    fontFamily: "'Lexend Deca', sans-serif",
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#ffffff",
  },
  formSubheadline: {
    fontSize: "16px",
    marginBottom: "24px",
    lineHeight: "1.6",
    color: "#e0e0e0",
  },
  smallText: {
    fontSize: "14px",
    color: "#bbbbbb",
    textAlign: "center",
    marginTop: "12px",
  },
  radioGroup: {
    marginBottom: "16px",
    color: "#e0e0e0",
  },
  radioLabel: {
    display: "block",
    marginBottom: "12px",
    fontSize: "16px",
    cursor: "pointer",
  },
  radioInput: {
    marginRight: "10px",
    verticalAlign: "middle",
    accentColor: "#00C291", // Green radio button
  },

  // A container style to constrain section width, like .page-container
  sectionContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
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

  useEffect(() => {
    // Prevent scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Scroll to top
    window.scrollTo(0, 0);

    // Add responsive styles
    const styleTag = document.createElement("style");
    styleTag.innerHTML = responsiveStyle;
    document.head.appendChild(styleTag);

    return () => {
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

  const isFrequencyPlaceholder = form.frequency === "";

  return (
    <div style={styles.page}>
      {/* All content is within the main div, no extra wrappers */}
      <HeaderText text="BookSpace" />

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.sectionContainer}>
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
      <section style={styles.section}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.h2}>How It Works</h2>
          <div style={styles.howItWorksSteps}>
            <div style={styles.step}>
              <div style={styles.stepIcon}>📍</div>
              <h3 style={styles.h3}>1. Discover</h3>
              <p>
                Browse a curated selection of coworking spaces wherever your
                journey takes you.
              </p>
            </div>
            <div style={styles.step}>
              <div style={styles.stepIcon}>🖱️</div>
              <h3 style={styles.h3}>2. Book</h3>
              <p>
                Choose your space, pick a date, and confirm your booking with
                lightning-fast checkout.
              </p>
            </div>
            <div style={styles.step}>
              <div style={styles.stepIcon}>💻</div>
              <h3 style={styles.h3}>3. Work</h3>
              <p>
                Show up, connect, and enjoy a productive day in a vibrant
                workspace environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section style={styles.section}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.h2}>App Preview</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "32px",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {[
              { file: appScreen1, label: "Home Screen" },
              { file: appScreen2, label: "Membership page" },
              { file: appScreen3, label: "Search page" },
              { file: appScreen4, label: "Workspace profile" },
              { file: appScreen5, label: "Booking confirmation" },
            ].map((screen, idx) => (
              <div
                key={idx}
                style={{
                  maxWidth: 300,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "#fff",
                  borderRadius: 16,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                  padding: 16,
                }}
              >
                <img
                  src={screen.file}
                  alt={screen.label}
                  style={{
                    width: "100%",
                    maxWidth: 270,
                    height: "auto",
                    borderRadius: 12,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                  }}
                />
                <div
                  style={{
                    marginTop: 12,
                    fontFamily: "'Lexend Deca', sans-serif",
                    fontWeight: 600,
                    fontSize: 18,
                    textAlign: "center",
                    color: "#353232",
                  }}
                >
                  {screen.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Section - full width background, centered content */}
      <section id="signup" style={styles.signupSection}>
        {submitted ? (
          <div
            style={{
              ...styles.signupWrapper,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                ...styles.signupCard,
                maxWidth: "600px",
                textAlign: "center",
                padding: "80px 20px",
                color: "#00C291",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Thank you!
              <br />
              We'll notify you upon launch.
            </div>
          </div>
        ) : (
          <div style={styles.signupWrapper}>
            <div style={styles.signupCard}>
 <form onSubmit={handleSubmit}>
  <div style={styles.formHeadline}>Be the First to Know!</div>
  <p style={{ ...styles.formSubheadline, marginBottom: "20px" }}>
    Get notified when we launch and access early bird perks.
  </p>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      justifyContent: "space-between",
    }}
  >
    <input
      style={{ ...styles.input, flex: "1 1 100%" }}
      name="email"
      type="email"
      placeholder="Email*"
      value={form.email}
      onChange={handleChange}
      required
    />

    <input
      style={{ ...styles.input, flex: "1 1 48%" }}
      name="name"
      placeholder="Full name"
      value={form.name}
      onChange={handleChange}
    />

    <input
      style={{ ...styles.input, flex: "1 1 48%" }}
      name="phone"
      placeholder="Phone"
      value={form.phone}
      onChange={handleChange}
      type="tel"
    />
  </div>

  <select
    style={{
      ...styles.select,
      marginTop: "12px",
      color: isFrequencyPlaceholder ? "#555" : "#030303",
    }}
    name="frequency"
    value={form.frequency}
    onChange={handleChange}
  >
    <option value="" disabled>
      How often do you use coworking spaces?
    </option>
    <option value="daily">Daily</option>
    <option value="few_times_week">A few times a week</option>
    <option value="few_times_month">A few times a month</option>
    <option value="rarely">Rarely (travel only)</option>
    <option value="never">Never (but curious)</option>
  </select>

  <select
    style={styles.select}
    name="important_factor"
    value={form.important_factor}
    onChange={handleChange}
  >
    <option value="" disabled>
      What matters most in a workspace?
    </option>
    <option value="price">Price</option>
    <option value="location">Location</option>
    <option value="community">Community & Events</option>
    <option value="amenities">Amenities (Pool, Cafe, etc.)</option>
    <option value="wifi">Wi-Fi Reliability</option>
    <option value="other">Other</option>
  </select>

  <textarea
    style={styles.textarea}
    name="comment"
    placeholder="Any thoughts or suggestions? (optional)"
    value={form.comment}
    onChange={handleChange}
  />

  <button type="submit" style={{ ...styles.formButton, marginTop: "8px" }}>
    Notify Me
  </button>
  <p style={styles.smallText}>🔒 We respect your privacy.</p>
</form>


            </div>

            <div style={styles.formImageWrapper} className="hide-on-mobile">
              <img
                src={defaultImage}
                alt="Coworking office with people"
                style={styles.formImage}
              />
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default WorkspacesPage;
