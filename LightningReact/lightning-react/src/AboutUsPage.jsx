import "./../css/normalize.css";
import "./../css/webflow.css";
import "./../css/about.css";
import ".//../css/jamess-groovy-site-7ad661.webflow.css";
import { Link } from "react-router-dom";

export default function AboutUsPage(){
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
      </div>
      <a href="#" class="button w-button">Get Started</a>
      <div class="navigation-wrap">
        <div class="menu-button w-nav-button"><img src="images/menu-icon_1menu-icon.png" width="22" alt="" class="menu-icon"/></div>
      </div>
    </div>
  </div>
  <div class="code-embed w-embed">
  </div>

<div class="section">
  <div class="container">
    <div class="rich-text w-richtext">
      <h2>About Our Company</h2>
      <p>We are a forward-thinking company dedicated to technological innovation that works for human beings. Built on a foundation of trust, quality, and professionalism, we strive to make a meaningful difference through everything we do.</p>
      <p>Our pioneering Lightning Start framework is more than an AI harness or "AI on the rails": it is a powerful new concept that allows us to leverage the new tools to supercharge our creativity, avoiding employee burnout and many of the other drawbacks associated with AI.</p>
      <p>Our team combines industry expertise, creativity, and a customer-first approach to help businesses and individuals achieve their goals. We believe in building strong relationships, embracing new opportunities, and continuously improving our services to meet the evolving needs of our customers.</p>

      <h3>What Sets Us Apart</h3>
<ul class="about-features" role="list">
  <li>
    <h4>Human-centred</h4>
    <p>We are particularly interested in the underlying problems. If AI is to be a success, the technology must reach a kind of equilibrium where it becomes a vibrant part of our world, like smartphones, graphical user interfaces, the Internet and World Wide Web. If we all do converge on a sane and stable system that makes people happy, then at Lightning Start we feel it is better to get there sooner than later. We would love to contribute to that dialog and that endeavour.</p>
  </li>
  <li>
    <h4>Quality</h4>
    <p>We maintain high standards in every project, product, and service we provide. Our multi-tiered quality assurance process evaluates every aspect of our work from multiple perspectives, ensuring adherence to the highest standards.</p>
  </li>
    <li>
    <h4>Innovation</h4>
    <p>We are an exciting company with new ideas and technologies. We operate in a greenfield market where the lack of entrenched convention creates lots of new possibilities.</p>
  </li>
  <li>
    <h4>Customer Committment</h4>
    <p>We are dedicated to our customers. We aim to give our customers exactly the kind of user experience they want. We will embrace their suggestions to the best of our abilities to give them the products they need to meet their unique needs.</p>
  </li>
</ul>
      <h3>Our Mission</h3>
      <p>Our mission is to empower our customers through our innovative products, through attention to detail, and exceptional customer experiences. We are committed to creating long-term partnerships built on integrity, transparency, and mutual success.</p>

      <h3>Our Vision</h3>
      <p>We aim to become a trusted leader in the European tech ecosystem, recognized for our dedication to excellence, customer satisfaction, and positive impact. With the Lightning Start framework as starting point, there are many adjacent markets for us to move into, with the same ethos as before, and the expertise gained and lessons learned.</p>
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
)
}