import { useEffect } from "react";
import { Link } from "react-router-dom";
//import "./HomePage.css";
//import "./normalize.css";
import "./../css/normalize.css";
import "./../css/webflow.css";
//import "../js/webflow.js"
import { startInfoCards } from "../js/info_cards.js";
import ".//../css/jamess-groovy-site-7ad661.webflow.css";

export default function HomePage(){
    useEffect(() => {
    startInfoCards();
  }, []);

return (
<div>
<main class="body">
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navigation w-nav">
    <div class="navigation-items">
      <Link to="/" className="logo-link w-nav-brand w--current"><img src="images/LS_arc_logo_blue.png" width="80" sizes="(max-width: 479px) 77vw, 80px" srcset="images/LS_arc_logo_blue-p-500.png 500w, images/LS_arc_logo_blue.png 577w" alt="" class="logo-image"/></Link>
      <div class="navigation-wrap">
        {/* <a href="products.html" class="navigation-item w-nav-link">Documentation</a> */}
            <Link to="/documentation" className="navigation-item w-nav-link">
              Documentation
            </Link>
           <Link to="/about" className="navigation-item w-nav-link">
              About
            </Link>
               <Link to="/contact" className="navigation-item w-nav-link">
              Contact
            </Link>
                  <a href="https://apps.microsoft.com/detail/9p9vwp5ght82?hl=en-GB&gl=GB" class="button w-button ">Get Started</a>

      </div>
      {/* <div class="navigation-wrap">
        <div class="menu-button w-nav-button"><img src="images/menu-icon_1menu-icon.png" width="22" alt="" class="menu-icon"/></div>
      </div> */}
    </div>
  </div>
  <div class="section cc-store-home-wrap">
    <div class="columns w-row">
      <div class="column w-col w-col-6">
              <div id="stage">

        </div>
      </div>
      <div class="column-2 w-col w-col-6">
        <div class="div-block-9">
          <div class="div-block-7"> Electrify your workflow </div>
          <div class="div-block-8"> With Lighting Start Desktop</div>
                <div class="div-block-5">
   
       <Link to="/documentation" className="button-2 w-button">Explore Features   </Link>
          <a href="#" class="button-3 w-button">What is Lightning Start?</a>
        </div>
        </div>
  
      </div>
    </div>
    <div class="w-layout-blockcontainer container-2 w-container">
      <div class="text-block-4">Lightning Start allows you to leverage AI more effectively and create code with fewer commands than ever before. Leave AI to the tasks to which it is best suited. Lightning Start is a rich framework which allows this to happen.</div>
    </div>
    <div id="w-node-_644e3780-15d4-01d0-e8fd-5cfac0e341ef-42e9d972" class="w-layout-layout quick-stack-3 wf-layout-layout">
      <div id="w-node-_76b46e81-837e-e5b8-a26d-207c10d2b7b9-42e9d972" class="w-layout-cell">
<img src="images/output.png" width="15" alt="" class="webflow-logo-tiny"/>

      </div>
            <div class="fancy-cell cell-top w-layout-cell">
                    <div class="cell-text-overlay">
            More reliable use of AI
            </div>
             <div class="fancy-cell-overlay">
    <p>Lightning Start, used correctly, will generate good code with a higher probability than a bare, user-prompted LLM</p>
  </div>
    <svg viewBox="0 0 577 577" preserveAspectRatio="none">
      <rect class="base" width="577" height="577" />

      <path
        class="shape"
        d="
          M220 560
          L300 330
          L270 330
          L350 40
          L300 270
          L330 270
          Z
        "
      />
    </svg>
</div>
           <div class="fancy-cell cell-top w-layout-cell">
            <div class="cell-text-overlay">
            Reduce stress and tedium
            </div>
             <div class="fancy-cell-overlay">
    <p>Lightning Start integrates AI in a much more symbiotic way than existing products. This can have incalculable benefits to a dev team's morale.</p>
  </div>
    <svg viewBox="0 0 577 577" preserveAspectRatio="none">
      <rect class="base" width="577" height="577" />

      <path
        class="shape"
        d="
          M220 560
          L300 330
          L270 330
          L350 40
          L300 270
          L330 270
          Z
        "
      />
    </svg>
</div>
    </div>
  </div>
  <div class="section cc-subscribe-form">
    <div class="container cc-subscription-form">
      <div class="heading-jumbo-small">Lightning Start Newsletter</div>
      <div class="paragraph-light cc-subscribe-paragraph">Sign up to receive updates on the latest developments from Lightning Start</div>
      <div class="form-block w-form">
        <form id="wf-form-Monthly-Newsletter-Form" name="wf-form-Monthly-Newsletter-Form" data-name="Monthly Newsletter Form" method="get" class="subscribe-form" data-wf-page-id="69e7719b4b54becd42e9d972" data-wf-element-id="2df3695a-ff87-37fa-7ac7-63d4f4891940"><input class="text-field cc-subscribe-text-field w-input" maxlength="256" name="Newsletter-Email" data-name="Newsletter Email" placeholder="Enter your email" type="email" id="Newsletter-Email" required=""/><input type="submit" data-wait="Please wait..." class="primary-button w-button" value="Submit"/></form>
        <div class="status-message w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="status-message w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="container">
      <div class="w-layout-grid footer">
        <a href="index.html" id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2971b-87e29718" aria-current="page" class="logo-link w-inline-block w--current"></a>
        <div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2971d-87e29718" class="label">Menu</div>
        <div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2971f-87e29718" class="links-section-footer">
          <a href="index.html" aria-current="page" class="footer-link w--current">Home</a>

            <Link to="/documentation" className="footer-link">
              Documentation
            </Link>
          {/* <a href="about.html" class="footer-link">Documentation</a> */}          
            <Link to="/about" className="footer-link">
              About
            </Link>          
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
        </div>
        <div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29724-87e29718" class="label">PRODUCTS</div>
        <div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29726-87e29718" class="links-section-footer">
          <a href="index.html" aria-current="page" class="footer-link w--current">LS Desktop</a>
        </div>
        <div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2972d-87e29718" class="label">Help</div>
        <div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2972f-87e29718" class="links-section-footer">
          <a href="contact.html" class="footer-link">What is LS?</a>
          <a href="contact.html" class="footer-link">How to use LS?</a>
        </div>
        <div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29736-87e29718" class="label">Follow</div>
        <a id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2973f-87e29718" href="https://webflow.com/" target="_blank" class="made-with-webflow w-inline-block"><img src="images/webflow-w-small2x_1webflow-w-small2x.png" width="15" alt="" class="webflow-logo-tiny"/>
          <div class="paragraph-tiny">Powered by Webflow</div>
        </a>
        <div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29738-87e29718" class="links-section-footer">
          <a href="https://www.instagram.com/webflowapp/" target="_blank" class="footer-link">Twitter</a>
          <a href="https://www.facebook.com/webflow/" target="_blank" class="footer-link">Facebook</a>
          <a href="https://twitter.com/webflow" target="_blank" class="footer-link">Twitter</a>
        </div>
      </div>
    </div>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69e7719a4b54becd42e9d8f6" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
</main>
</div>
);
}


// export default function HomePage() {
//   useEffect(() => {
//     console.log("hello");
//   }, []);

//   return (
//     <div>
//         {/* <header>
//     <div class="container nav" role="navigation" aria-label="Main">
//       <a class="brand" href="#">
//         <svg class="logo" viewBox="0 0 64 64" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><path fill="#FFD76B" d="M38 2 10 36h16l-4 26 32-40H38z"/></svg>
//         <span>Lightning Start</span>
//       </a>
//       <ul>
// <li>
//   <Link to="/features">Features</Link>
// </li>
//         <li><a href="#about">About</a></li>
//         <li><a class="btn" href="#cta">Get Started</a></li>
//       </ul>
//     </div>
//   </header> */}
  
//       <header style={styles.topbar}>
//         {/* <div style={styles.topbarInner}> */}
//           {/* <div style={styles.brand}>⚡ Storm</div> */}
//           {/* <a href="/" style={styles.homeButton}>
//             Home
//           </a> */}
//           <div style={styles.topbarInner}>
//   <div style={styles.brand}>⚡ Lightning Start</div>

//   <div style={styles.navGroup}>
//     <Link to="/" style={styles.navLink}>Home</Link>
//     <Link to="/features" style={styles.navLink}>Features</Link>
//     <Link to="/about" style={styles.navLink}>About</Link>
//     <Link to="/get-started" style={styles.homeButton}>Get Started</Link>
//   </div>
// {/* </div> */}
// {/* <div style={styles.topbarInnerInner}>
//   <Link to="/" style={styles.navLink}>
//       Home
//     </Link>

//     <Link to="/features" style={styles.navLink}>
//       Features
//     </Link>

//     <a href="#about" style={styles.navLink}>
//       About
//     </a>
 
//     <a href="#cta" style={styles.homeButton}>
//       Get Started
//     </a>
// </div> */}
  

//         </div>
//       </header>

//  <main id="main">
//   <a href="#main" class="skip-link">Skip to main content</a>
//     <section class="hero" aria-label="Lightning hero">
//       <div class="lightning" aria-hidden="true">
//         <div class="bolt bolt--1">
//           <svg viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
//             <defs>
//               <linearGradient id="boltGrad" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stop-color="var(--bolt-core)" />
//                 <stop offset="60%" stop-color="var(--bolt-electric)" />
//               </linearGradient>
//             </defs>
//             <polyline points="50,0 64,58 42,58 68,132 46,132 74,208 30,160 52,160 40,118 60,118 48,80 70,80" fill="none" stroke="url(#boltGrad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
//           </svg>
//         </div>
//         <div class="bolt bolt--2">
//           <svg viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
//             <use href="#bshape" />
//             <defs>
//               <linearGradient id="boltGrad2" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stop-color="var(--bolt-core)" />
//                 <stop offset="60%" stop-color="var(--bolt-electric)" />
//               </linearGradient>
//             </defs>
//             <polyline points="50,0 60,54 44,54 66,120 48,120 70,190 34,154 52,154 42,114 58,114 52,88 68,88" fill="none" stroke="url(#boltGrad2)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
//           </svg>
//         </div>
//         <div class="bolt bolt--3">
//           <svg viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
//             <defs>
//               <linearGradient id="boltGrad3" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stop-color="var(--bolt-core)" />
//                 <stop offset="60%" stop-color="var(--bolt-electric)" />
//               </linearGradient>
//             </defs>
//             <polyline points="50,0 64,60 40,60 66,132 46,132 74,206 28,160 56,160 40,116 60,116 48,82 74,82" fill="none" stroke="url(#boltGrad3)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
//           </svg>
//         </div>
//       </div>

//       <div class="hero-inner">
//         <p class="eyebrow">Electrify your workflow</p>
//         <h1 class="title">Lightning Start Desktop⚡</h1>
//         <p class="subtitle">The fastest way to create software</p>
//         <div class="cta-row" id="cta">
//           <a class="btn" href="features.html">Explore Features</a>
//           <a class="cta-secondary" href="#about">What is Lightning Start?</a>
//         </div>
//       </div>
//     </section>

//     <section id="features" class="container features">
//       <div class="grid">
//         <article class="card">
//           <h3>Faster turnaround</h3>
//           <p>Lightning Start increases turnaround time of a project and simplifies a code base, reducing bugs  </p>
//         </article>
//         <article class="card">
//           <h3>Standardize code across developers and teams </h3>
//           <p>Cut down on fatigue from laborious copy-pasting and checking line-by-line .</p>
//         </article>
//         <article class="card">
//           <h3>New framework for AI code generation</h3>
//           <p>LS is an exciting new way to use the tools you will already be familiar with</p>
//         </article>
//       </div>
//     </section>

//     <section id="about" class="container">
//       <div class="grid">
//    <article className="card" style={{ gridColumn: "span 12" }}>
//           <h2>What is Lightning Start Desktop?</h2>
//           <p>Lightning Start is a framework for generating a starter project from a high-level architectural description, which could be a YAML file or a UML diagram. This offers considerable advantages: </p>
//           <ul style={{textAlign: "left"}}>
//             <li>Faster time to first iteration.</li>
//             <li>Use scaffolding which has already vetted for code quality.</li>
//             <li>Leverage AI tools more creatively</li>
//           </ul>
//         </article>
//       </div>
//     </section>
//   </main>
//   <footer>
//     <div class="container">© <span id="y"></span> LightningStartTech Ltd.</div>
//   </footer>
//   </div>
//   );
// }
// const styles = {

//     navList: {
//     listStyle: "none",
//     display: "flex",
//     gap: "1.2rem",
//     margin: 0,
//     padding: 0,
//     alignItems: "center",
//   },


//   navLink: {
//     color: "#e8ecff",
//     textDecoration: "none",
//     opacity: 0.9,
//   },
//   pageShell: {
//     position: "relative",
//     minHeight: "100vh",
//     color: "#e8ecff",
//     background:
//       "radial-gradient(1000px 500px at 50% -10%, #1c2648 0%, transparent 60%), linear-gradient(180deg, #0b1020 0%, #131a2e 100%)",
//     fontFamily:
//       'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//     overflowX: "hidden",
//   },

//   lightningBg: {
//     position: "fixed",
//     inset: 0,
//     pointerEvents: "none",
//     zIndex: 0,
//     overflow: "hidden",
//   },

//   skyFlash: {
//     position: "absolute",
//     inset: "-20%",
//     background:
//       "radial-gradient(50% 40% at 50% 0%, rgba(255,255,255,0.24), transparent 60%)",
//     mixBlendMode: "screen",
//     opacity: 0,
//     animation: "flash 8s linear infinite",
//   },

//   bolt: {
//     position: "absolute",
//     width: "140px",
//     height: "420px",
//     opacity: 0,
//     animation: "strike 8s linear infinite",
//   },

//   boltSvg: {
//     width: "100%",
//     height: "100%",
//     filter: "drop-shadow(0 0 6px #b5f3ff) drop-shadow(0 0 18px #7dd3fc)",
//   },

//   topbar: {
//     position: "sticky",
//     top: 0,
//     zIndex: 10,
//     backdropFilter: "blur(10px)",
//     background: "rgba(11, 16, 32, 0.78)",
//     borderBottom: "1px solid rgba(255,255,255,0.12)",
//   },
//     navLinks: {
//     display: "flex",
//     gap: "1.2rem",
//     alignItems: "center",
//     marginLeft: "auto",
//   },
//     navGroup: {
//   marginLeft: "auto",
//   display: "flex",
//   gap: "1.2rem",
//   alignItems: "center",
// },
// topbarInner: {
//   // width: "fit-content",
//   // display: "flex",
//   // alignItems: "center",
//   // gap: "1.2rem",
//   // padding: "0.8rem 0",
//    width: "min(1200px, 94vw)",
//   margin: "0 auto",            // centers the whole bar
//   display: "flex",
//   alignItems: "center",
//   padding: "0.8rem 0",
// },
// topbarInnerInner: {
//   marginLeft: "auto",
//   marginRight: "0"

// },
//   brand: {
//     fontWeight: 800,
//     fontSize: "1.1rem",
//   },

//   homeButton: {
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "0.75rem 1rem",
//     borderRadius: "1rem",
//     background: "linear-gradient(135deg, #7dd3fc, #c084fc)",
//     color: "#0b1020",
//     fontWeight: 800,
//     textDecoration: "none",
//   },

//   hero: {
//     position: "relative",
//     zIndex: 1,
//     padding: "4rem 0 2rem",
//     borderBottom: "1px solid rgba(255,255,255,0.12)",
//     background: "radial-gradient(50% 40% at 50% 0%, rgba(255,255,255,0.05), transparent 70%)",
//   },

//   heroInner: {
//     width: "min(1200px, 94vw)",
//     margin: "0 auto",
//   },

//   eyebrow: {
//     margin: "0 0 0.5rem",
//     color: "#a5b0d6",
//     textTransform: "uppercase",
//     letterSpacing: "0.16em",
//     fontSize: "0.8rem",
//   },

//   pageTitle: {
//     margin: "0 0 0.75rem",
//     fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
//     lineHeight: 1.05,
//     background:
//       "linear-gradient(180deg, #ffffff, #dbeafe 40%, #93c5fd 70%, #7dd3fc 100%)",
//     WebkitBackgroundClip: "text",
//     backgroundClip: "text",
//     color: "transparent",
//   },

//   heroCopy: {
//     maxWidth: "760px",
//     color: "#a5b0d6",
//     margin: 0,
//   },

//   layout: {
//     position: "relative",
//     zIndex: 1,
//     width: "min(1200px, 94vw)",
//     margin: "0 auto",
//     display: "grid",
//     gridTemplateColumns: "280px minmax(0, 1fr)",
//     gap: "1.5rem",
//     padding: "2rem 0 4rem",
//     alignItems: "start",
//   },

//   sidebar: {
//     position: "sticky",
//     top: "5.5rem",
//     background: "rgba(255,255,255,0.05)",
//     border: "1px solid rgba(255,255,255,0.12)",
//     borderRadius: "1.25rem",
//     backdropFilter: "blur(6px)",
//     padding: "1rem",
//   },

//   sidebarHeading: {
//     margin: "0 0 0.75rem",
//     color: "#a5b0d6",
//     fontSize: "0.95rem",
//     textTransform: "uppercase",
//     letterSpacing: "0.12em",
//   },

//   navList: {
//     display: "grid",
//     gap: "0.4rem",
//   },

// navButton: {
//   width: "100%",
//   textAlign: "left",
//   padding: "0.75rem 0.9rem",
//   borderRadius: "0.9rem",
//   border: "0px solid transparent",
//   background: "transparent",
//   color: "#e8ecff",
//   cursor: "pointer",
//   fontSize: "1rem",
//   outline: "none",
//   boxShadow: "none",
// },

// navButtonActive: {
//   background: "rgba(255,255,255,0.08)",
//   borderColor: "rgba(255,255,255,0.12)",
//   outline: "none",
//   boxShadow: "none",
// },

//   content: {
//     minWidth: 0,
//   },

//   sectionCard: {
//     background: "rgba(255,255,255,0.05)",
//     border: "1px solid rgba(255,255,255,0.12)",
//     borderRadius: "1.25rem",
//     backdropFilter: "blur(6px)",
//     padding: "1.5rem",
//   },

//   sectionTitle: {
//     marginTop: 0,
//     marginBottom: "0.65rem",
//     fontSize: "1.6rem",
//   },

//   sectionText: {
//     margin: 0,
//     color: "#a5b0d6",
//     lineHeight: 1.7,
//   },
// };