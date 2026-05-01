import { useEffect, useMemo, useState } from "react";

function Section({ title, children }) {
  return (
    <section style={styles.sectionCard}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <p style={styles.sectionText}>{children}</p>
    </section>
  );
}

function LightningBackground() {
  const bolts = useMemo(
    () => [
      {
        id: 1,
        style: { left: "7%", top: "-8%", transform: "rotate(8deg)" },
        points:
          "50,0 64,58 42,58 68,132 46,132 74,208 30,160 52,160 40,118 60,118 48,80 70,80",
      },
      {
        id: 2,
        style: { left: "55%", top: "-14%", transform: "rotate(-10deg)" },
        points:
          "50,0 60,54 44,54 66,120 48,120 70,190 34,154 52,154 42,114 58,114 52,88 68,88",
      },
      {
        id: 3,
        style: { left: "82%", top: "-16%", transform: "rotate(4deg)" },
        points:
          "50,0 64,60 40,60 66,132 46,132 74,206 28,160 56,160 40,116 60,116 48,82 74,82",
      },
    ],
    []
  );

  return (
    <div style={styles.lightningBg} aria-hidden="true">
      <div style={styles.skyFlash} />
      {bolts.map((bolt) => (
        <div
          key={bolt.id}
          className="lightning-bolt"
          style={{ ...styles.bolt, ...bolt.style }}
        >
          {/* <svg
            viewBox="0 0 100 300"
            xmlns="http://www.w3.org/2000/svg"
            style={styles.boltSvg}
          >
            <defs>
              <linearGradient id={`boltGradient-${bolt.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#7dd3fc" />
              </linearGradient>
            </defs>
            <polyline
              points={bolt.points}
              fill="none"
              stroke={`url(#boltGradient-${bolt.id})`}
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
        </div>
      ))}
    </div>
  );
}

export default function FeaturesPage() {
  const sections = [
    { id: "overview", title: "Overview" },
    { id: "lightning", title: "Lightning Effects" },
    { id: "accessibility", title: "Accessibility" },
    { id: "customization", title: "Customization" },
    { id: "performance", title: "Performance" },
    { id: "getting-started", title: "Getting Started" },
  ];

  const content = {
    overview: {
      title: "Overview",
      text:
        "This page uses a documentation-style layout with a React-powered left navigation menu, a full-screen storm background, and a clean content area for feature descriptions.",
    },
    lightning: {
      title: "Lightning Effects",
      text:
        "The background uses handmade SVG bolt shapes, glow effects, and timed flashes to recreate the same lightning idea from the original HTML version.",
    },
    accessibility: {
      title: "Accessibility",
      text:
        "The layout is simple and readable, with clear headings, obvious navigation, strong contrast, and a structure that is easy to expand later.",
    },
    customization: {
      title: "Customization",
      text:
        "You can add more sections, swap colors, move the sidebar, introduce icons, or split the page into separate components as your app grows.",
    },
    performance: {
      title: "Performance",
      text:
        "The interaction is lightweight: React only swaps the content panel, while the lightning stays in the background as a visual layer.",
    },
    "getting-started": {
      title: "Getting Started",
      text:
        "Use this as your first real React page. Once it is working, the next step is usually adding React Router so Home and Features become separate routes.",
    },
  };

  const [active, setActive] = useState("overview");

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      @keyframes strike {
        0%, 9% { opacity: 0; }
        10% { opacity: 1; }
        10.6% { opacity: 0.18; }
        11.2% { opacity: 1; }
        13% { opacity: 0; }
        52% { opacity: 0; }
        53% { opacity: 1; }
        54% { opacity: 0.2; }
        55% { opacity: 1; }
        57% { opacity: 0; }
        100% { opacity: 0; }
      }

      @keyframes flash {
        0%, 9.6% { opacity: 0; }
        10% { opacity: 0.65; }
        10.6% { opacity: 0.12; }
        11.2% { opacity: 0.55; }
        13% { opacity: 0; }
        52.5% { opacity: 0.55; }
        54% { opacity: 0.14; }
        55% { opacity: 0.55; }
        57% { opacity: 0; }
        100% { opacity: 0; }
      }
    `;
    document.head.appendChild(styleTag);

    const boltElements = document.querySelectorAll(".lightning-bolt");
    boltElements.forEach((bolt) => {
      const jitter = (Math.random() * 1.6).toFixed(2);
      const duration = (6 + Math.random() * 4).toFixed(2);
      bolt.style.animationDelay = `${jitter}s`;
      bolt.style.animationDuration = `${duration}s`;
    });

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div style={styles.pageShell}>
      <LightningBackground />

      <header style={styles.topbar}>
        <div style={styles.topbarInner}>
          <div style={styles.brand}>⚡ Storm</div>
          <a href="/" style={styles.homeButton}>
            Home
          </a>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <p style={styles.eyebrow}>Documentation-style overview</p>
          <h1 style={styles.pageTitle}>Features</h1>
          <p style={styles.heroCopy}>
            Explore the Storm template with a React sidebar navigation and a
            full-page lightning background.
          </p>
        </div>
      </section>

      <div style={styles.layout}>
        <aside style={styles.sidebar}>
          <h2 style={styles.sidebarHeading}>On this page</h2>
          <div style={styles.navList}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActive(section.id)}
                style={{
                  ...styles.navButton,
                  ...(active === section.id ? styles.navButtonActive : {}),
                }}
              >
                {section.title}
              </button>
            ))}
          </div>
        </aside>

        <main style={styles.content}>
          <Section title={content[active].title}>
            {content[active].text}
          </Section>
        </main>
      </div>
    </div>
  );
}

const styles = {
  pageShell: {
    position: "relative",
    minHeight: "100vh",
    color: "#e8ecff",
    background:
      "radial-gradient(1000px 500px at 50% -10%, #1c2648 0%, transparent 60%), linear-gradient(180deg, #0b1020 0%, #131a2e 100%)",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    overflowX: "hidden",
  },

  lightningBg: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
    overflow: "hidden",
  },

  skyFlash: {
    position: "absolute",
    inset: "-20%",
    background:
      "radial-gradient(50% 40% at 50% 0%, rgba(255,255,255,0.24), transparent 60%)",
    mixBlendMode: "screen",
    opacity: 0,
    animation: "flash 8s linear infinite",
  },

  bolt: {
    position: "absolute",
    width: "140px",
    height: "420px",
    opacity: 0,
    animation: "strike 8s linear infinite",
  },

  boltSvg: {
    width: "100%",
    height: "100%",
    filter: "drop-shadow(0 0 6px #b5f3ff) drop-shadow(0 0 18px #7dd3fc)",
  },

  topbar: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backdropFilter: "blur(10px)",
    background: "rgba(11, 16, 32, 0.78)",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
  },

  topbarInner: {
    width: "min(1200px, 94vw)",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.8rem 0",
  },

  brand: {
    fontWeight: 800,
    fontSize: "1.1rem",
  },

  homeButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.75rem 1rem",
    borderRadius: "1rem",
    background: "linear-gradient(135deg, #7dd3fc, #c084fc)",
    color: "#0b1020",
    fontWeight: 800,
    textDecoration: "none",
  },

  hero: {
    position: "relative",
    zIndex: 1,
    padding: "4rem 0 2rem",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    background: "radial-gradient(50% 40% at 50% 0%, rgba(255,255,255,0.05), transparent 70%)",
  },

  heroInner: {
    width: "min(1200px, 94vw)",
    margin: "0 auto",
  },

  eyebrow: {
    margin: "0 0 0.5rem",
    color: "#a5b0d6",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    fontSize: "0.8rem",
  },

  pageTitle: {
    margin: "0 0 0.75rem",
    fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
    lineHeight: 1.05,
    background:
      "linear-gradient(180deg, #ffffff, #dbeafe 40%, #93c5fd 70%, #7dd3fc 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  },

  heroCopy: {
    maxWidth: "760px",
    color: "#a5b0d6",
    margin: 0,
  },

  layout: {
    // position: "relative",
    // zIndex: 1,
    // width: "min(1200px, 94vw)",
    // margin: "0 auto",
    // display: "grid",
    // gridTemplateColumns: "280px minmax(0, 1fr)",
    // gap: "1.5rem",
    // padding: "2rem 0 4rem",
    // alignItems: "start",
      display: "grid",
  gridTemplateColumns: "280px 1fr",
  gap: "1.5rem",
  width: "100%",
  margin: "0.3rem",
  padding: 0,
  },

  sidebar: {
    position: "sticky",
    top: "5.5rem",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "1.25rem",
    backdropFilter: "blur(6px)",
    padding: "1rem",
  },

  sidebarHeading: {
    margin: "0 0 0.75rem",
    color: "#a5b0d6",
    fontSize: "0.95rem",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  },

  navList: {
    display: "grid",
    gap: "0.4rem",
  },

navButton: {
  width: "100%",
  textAlign: "left",
  padding: "0.75rem 0.9rem",
  borderRadius: "0.9rem",
  border: "0px solid transparent",
  background: "transparent",
  color: "#e8ecff",
  cursor: "pointer",
  fontSize: "1rem",
  outline: "none",
  boxShadow: "none",
},

navButtonActive: {
  background: "rgba(255,255,255,0.08)",
  borderColor: "rgba(255,255,255,0.12)",
  outline: "none",
  boxShadow: "none",
},

  content: {
    minWidth: 0,
  },

  sectionCard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "1.25rem",
    backdropFilter: "blur(6px)",
    padding: "1.5rem",
  },

  sectionTitle: {
    marginTop: 0,
    marginBottom: "0.65rem",
    fontSize: "1.6rem",
  },

  sectionText: {
    margin: 0,
    color: "#a5b0d6",
    lineHeight: 1.7,
  },
};