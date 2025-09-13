import React, { useState, useEffect } from "react";
import axios from "axios";
import { Menu, X } from "lucide-react";
import defaultImage from "../../assets/6.jpg";

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
    fontSize: "32px",
    fontWeight: 700,
    color: "#353232",
  },
  h2: {
    fontSize: "28px",
    fontWeight: 700,
    color: "#353232",
    textAlign: "center",
    marginBottom: "40px",
  },
  h3: {
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
  },

  // Demo grid styles (coworking cards)
  demoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "40px",
    justifyItems: "center",
    alignItems: "start",
    width: "100%",
    maxWidth: "1100px",
    margin: "0 auto",
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
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px",
    display: "flex",
    flexWrap: "nowrap", // <<< key to keeping them next to each other
    gap: "40px",
    alignItems: "center", // center vertically
    justifyContent: "space-between",
  },

  signupCard: {
    flex: "1 1 50%",
    minWidth: "320px",
    maxWidth: "500px",
    backgroundColor: "#2C2E2F",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  formImageWrapper: {
    flex: "1 1 50%", // slightly more width than the form
    minWidth: "320px",
    maxWidth: "600px", // wider on large screens
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: "0", // no internal padding needed for image
  },

  formImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "16px", // ✨ just enough to soften edges
    maxHeight: "500px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)", // ✨ soft, natural lift
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
    padding: "0 14px",
    borderRadius: "10px",
    border: "1px solid #cccccc",
    color: "#030303",
    fontSize: "16px",
    marginBottom: "16px",
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
    tracking_code: "", // Add tracking code field
  });
  const [submitted, setSubmitted] = useState(false);

  // Function to get URL parameters
  const getUrlParameter = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  };

  // Function to validate tracking code format
  const validateTrackingCode = (code) => {
    if (!code) return null;

    // Check if it's a valid 16-character hex string
    const isValid = /^[A-F0-9]{16}$/.test(code.toUpperCase());
    return isValid ? code.toUpperCase() : null;
  };

  useEffect(() => {
    // Prevent scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Scroll to top
    window.scrollTo(0, 0);

    // Capture tracking code from URL parameter 'ref'
    const trackingParam = getUrlParameter("ref");
    const validatedTrackingCode = validateTrackingCode(trackingParam);

    if (validatedTrackingCode) {
      setForm((prevForm) => ({
        ...prevForm,
        tracking_code: validatedTrackingCode,
      }));

      // Store in localStorage for persistence
      localStorage.setItem("flexSpacesTrackingCode", validatedTrackingCode);
    } else {
      // Check localStorage as fallback
      const storedCode = localStorage.getItem("flexSpacesTrackingCode");
      if (storedCode && validateTrackingCode(storedCode)) {
        setForm((prevForm) => ({
          ...prevForm,
          tracking_code: storedCode,
        }));
      }
    }

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
      <header
        style={{
          backgroundColor: "#202223",
          color: "#ffffff",
          padding: "80px 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "48px",
        }}
      >
        {/* Text Section */}
        <div style={{ flex: "1 1 500px", maxWidth: "600px" }}>
          <h1
            style={{ fontSize: "3.2em", fontWeight: "700", lineHeight: "1.2" }}
          >
            <span style={{ color: "#ffffff" }}>Find Your </span>{" "}
            <span style={{ color: "#00C291" }}>Perfect Workspace</span>
            <br />
            <span style={{ color: "#ffffff" }}>Instantly.</span>
          </h1>
          <p
            style={{
              fontSize: "1.1em",
              color: "#cccccc",
              marginTop: "16px",
              lineHeight: "1.6",
            }}
          >
            Unlock inspiring coworking spaces around the world with one smart
            pass. Discover, book, and get working in seconds.
          </p>
          <button
            onClick={scrollToSignup}
            style={{
              marginTop: "32px",
              backgroundColor: "#00C291",
              color: "#fff",
              padding: "14px 28px",
              fontSize: "1em",
              fontWeight: "600",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#00a97f")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#00C291")}
          >
            Get Early Access
          </button>
        </div>

        {/* Image Section */}
        <div
          className="hide-on-mobile"
          style={{
            flex: "1 1 400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={appScreen3}
            alt="BookSpace App Preview"
            id="app-preview"
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "24px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      </header>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        style={{
          padding: "60px 0",
          backgroundColor: "#ffffff",
          color: "black",
          textAlign: "center",
        }}
      >
        <div
          style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              marginBottom: "48px",
            }}
          >
            How It Works
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              gap: "40px",
            }}
          >
            {[
              {
                icon: "📍",
                title: "Discover",
                desc: "Browse a curated selection of coworking spaces wherever your journey takes you.",
              },
              {
                icon: "🖱️",
                title: "Book",
                desc: "Choose your space, pick a date, and confirm your booking with lightning-fast checkout.",
              },
              {
                icon: "💻",
                title: "Work",
                desc: "Show up, connect, and enjoy a productive day in a vibrant workspace environment.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  flex: "1 1 280px",
                  maxWidth: "300px",
                  minWidth: "240px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "50%",
                    width: "64px",
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "32px",
                    margin: "0 auto 20px auto",
                  }}
                >
                  {step.icon}
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "12px",
                  }}
                >
                  {idx + 1}. {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",

                    lineHeight: "1.6",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section style={styles.section}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.h2}>App Preview</h2>

          <div style={{ position: "relative" }}>
            {/* Left Arrow */}
            <button
              onClick={() =>
                document
                  .getElementById("carousel")
                  .scrollBy({ left: -300, behavior: "smooth" })
              }
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.95)",
                border: "none",
                fontSize: "20px",
                padding: "8px 12px",
                cursor: "pointer",
                zIndex: 10,
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              ←
            </button>

            {/* Carousel */}
            <div
              id="carousel"
              style={{
                display: "flex",
                overflowX: "auto",
                gap: "32px",
                padding: "16px 32px 24px 32px",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
              }}
            >
              {[
                { file: appScreen1, label: "Home Screen" },
                { file: appScreen3, label: "Search page" },
                { file: appScreen4, label: "Workspace profile" },
                { file: appScreen2, label: "Membership page" },
                { file: appScreen5, label: "Booking confirmation" },
              ].map((screen, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: "0 0 auto",
                    width: "260px",
                    scrollSnapAlign: "center",
                    backgroundColor: "#ffffff",
                    borderRadius: "20px",
                    padding: "16px",
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={screen.file}
                    alt={screen.label}
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      objectFit: "contain",
                    }}
                  />
                  <div
                    style={{
                      marginTop: "10px",
                      fontWeight: 500,
                      fontSize: "14px",
                      textAlign: "center",
                      color: "#333",
                    }}
                  >
                    {screen.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() =>
                document
                  .getElementById("carousel")
                  .scrollBy({ left: 300, behavior: "smooth" })
              }
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.95)",
                border: "none",
                fontSize: "20px",
                padding: "8px 12px",
                cursor: "pointer",
                zIndex: 10,
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              →
            </button>
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
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Thanks for joining us! 🙌
              <br />
              You’ll be the first to know when we launch.
            </div>
          </div>
        ) : (
          <div style={styles.signupWrapper}>
            <div style={styles.signupCard}>
              <form id="contact" onSubmit={handleSubmit}>
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
                    color: form.frequency === "" ? "#555" : "#030303",
                  }}
                  name="frequency"
                  value={form.frequency}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Coworking Frequency
                  </option>
                  <option value="daily">Daily</option>
                  <option value="few_times_week">A few times a week</option>
                  <option value="few_times_month">A few times a month</option>
                  <option value="rarely">Rarely (travel only)</option>
                  <option value="never">Never (but curious)</option>
                </select>

                <select
                  style={{
                    ...styles.select,
                    color: form.important_factor === "" ? "#555" : "#030303",
                  }}
                  name="important_factor"
                  value={form.important_factor}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    What Matters Most?
                  </option>
                  <option value="price">Price</option>
                  <option value="location">Location</option>
                  <option value="community">Community & Events</option>
                  <option value="amenities">
                    Amenities (Pool, Cafe, etc.)
                  </option>
                  <option value="wifi">Wi-Fi Reliability</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  style={styles.textarea}
                  name="comment"
                  placeholder="Any thoughts or suggestions?"
                  value={form.comment}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  style={{ ...styles.formButton, marginTop: "8px" }}
                >
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
