import { useEffect } from "react";
import { Link } from "react-router-dom";
//import "./HomePage.css";
//import "./normalize.css";
import "./../css/normalize.css";
import "./../css/webflow.css";
import "./../css/documentation.css";

export function BasicConcepts(){
  <div class="section">
    <div class="container">
      <div class="rich-text w-richtext">
        <h2>Introduction</h2>
        <h3 class="documentation-subheader">Overview</h3>


        <pre contenteditable="false" class="w-code-block" style={{
  display: "block",
  overflowX: "auto",
  background: "#2b2b2b",
  color: "#f8f8f2",
  padding: "0.5em"
}}><code class="language-javascript" style={{ whiteSpace: "pre-wrap" }}><span><span>Yo, dis is a code insert</span></span></code></pre>
        <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
        <ul role="list">
          <li>The rich text element allows you to create and format headgsgsdgsdgsdgsdgsdgsdgsdgsdgsdgsdgsdgdgdgings</li>
          <li>Headings, paragraphs, blockquotes, figures, images, and figure captions</li>
          <li>A rich text element can be used with static or dynamic content.</li>
        </ul>
      </div>
    </div>
  </div>
}

export default function DocumentationPage(){
return (
<div>
<main class="body">
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navigation w-nav">
    <div class="navigation-items">
<Link to="/" className="logo-link w-nav-brand">
  <img
    src="images/LS_arc_logo_blue.png"
    width="80"
    sizes="(max-width: 479px) 77vw, 80px"
    srcSet="images/LS_arc_logo_blue-p-500.png 500w, images/LS_arc_logo_blue.png 577w"
    alt="Home"
    className="logo-image"
  />
</Link>      <div class="navigation-wrap">
  <Link to="/documentation" className="navigation-item w-nav-link">
  Learn More
</Link>
<Link to="/about" className="navigation-item w-nav-link">
  About
</Link>
<Link to="/contact" className="navigation-item w-nav-link">
  Contact
</Link>
      </div>
      {/* <a href="#" class="button w-button">Get Started</a> */}
      <div class="navigation-wrap">
        <div class="menu-button w-nav-button"><img src="images/menu-icon_1menu-icon.png" width="22" alt="" class="menu-icon"/></div>
      </div>
    </div>
  </div>
  <div class="code-embed w-embed">
{/* <button
  onClick={() => window.history.back()}
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    textDecoration: "none",
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    background: "none",
    border: "none",
    cursor: "pointer"
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
  <span>Back</span>
</button> */}
  </div> 
  <div class="section">
    <div class="container">
      <div class="rich-text w-richtext">
        <h2>What is Lightning Start?</h2>
        <h3 class="documentation-subheader" id="overview" href="#overview">Overview</h3>
        <p>Welcome to Lighting Start (LS)! LS is a powerful code generation platform which allows you to combine AI-generated portions with deterministically generated, reusable code which has been vetted for quality. This union of the two, exploiting the strengths of each, empowers you to create code faster than before with higher quality. </p>
<p>
In this page we give a high-level overview of LS and ask what problems it is designed to solve.
</p>

<h3 class="documentation-subheader" id="codegeneration" href="#codegeneration" >Why Code Generation?</h3>
<p>You will probably already be familiar with at least two different kinds of code generation. </p>

<p>For one, there are <i>compilers</i>. Here a source language facilitates the generation of code in another, target language. Thus a C++ compiler, presented with valid C++ code, will generate C, which when presented to a C compiler generates Assembly. TypeScript generates files in JavaScript. And so on and so forth. Compilers have been a fundamental part of programming since the inception of digital electronic computers.</p>

<p>Another is much more recent: AI-assisted programming. 
  Here, an ordinary language prompt is fed into a Large Language Model (LLM) which will return generated code in a language of your choice. This technology is extremely powerful and offers many possible advantages to the modern developer. However, the potential pitfalls are equally daunting. Since AIs created by deep learning methods are essentially 'black boxes', there can be no guarantees on the reliability or quality of LLM-generated code. Since this feature appears to be baked in, we can expect it to be an aspect of AI-assisted development for a long time to come.</p>
    
<p>Another type of code generation is much more niche: scaffolding code generation. These generators take a limited number of inputs, e.g. from a GUI wizard or an OpenAPI specification. They generate scaffolding which helps you to get started in your project. These generators have one big advantage over LLMs in that they are deterministic, so the code they yield is guaranteed to work. We can also assume it has been vetted by a professional developer. Unfortunately, these generators tend to only cover a small number of use cases. They lack flexibility and offer little or no customisability when it comes to more complex requirements. As a result, this type of code generation has only found niche and specialized uses across the industry.</p>

<p>Broadly, we generate code because it is too time-consuming or impractical to write the code by hand ourselves in the target language. The field is constantly evolving its ideas on fruitful code generation methodologies.</p>


<h3 class="documentation-subheader" id="lightningstart" href="#lightningstart" >Why Lightning Start?</h3>
<p>LS is a code generation framework which promotes iterative and experimental development - especially suited for the modern developer who, more and more, is expected to be conversant with many technologies and to produce demoable work consistently. It is intended to allow you to focus your time on solving problems and doing creative work, rather than spending a large percentage of every day 'fighting the AI' - or giving up and writing the boilerplate yourself! With LS you can draw up a high-level schema and generate a starter project from it. You can do things like experiment with different libraries, even languages, that normally would not be possible due to time constraints. Using this framework, you learn more, and each time you hit Generate you will have a demoable project. Whenever you want to extend the generated project, the framework may provide a faster way of doing so. And if not, it gives you the freedom to write whatever custom code you like rather than constraining you to always stay on the rails.</p>

      </div>
    </div>
  </div>
  <div class="section footer">
    <div class="container">
      <div class="w-layout-grid footer">
        <a href="index.html" id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2971b-87e29718" class="logo-link w-inline-block"></a>
        <div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2971d-87e29718" class="label">Menu</div>
        <div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2971f-87e29718" class="links-section-footer">
          <a href="index.html" class="footer-link">Home</a>
          <a href="about.html" class="footer-link">Documentation</a>
          <a href="contact.html" class="footer-link">About</a>
          <a href="products.html" class="footer-link">Contact</a>
        </div>
        <div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29724-87e29718" class="label">PRODUCTS</div>
        <div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29726-87e29718" class="links-section-footer">
          <a href="index.html" class="footer-link">LS Desktop</a>
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
  <script src="js/webflow.js" type="text/javascript"></script>
</main>
</div>
);
}