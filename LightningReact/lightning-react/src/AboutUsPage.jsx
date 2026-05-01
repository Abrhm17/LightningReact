import "./../css/normalize.css";
import "./../css/webflow.css";
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
        <h2>What’s a Rich Text element?</h2>
        <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. </p>
        <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
        <ul role="list">
          <li>The rich text element allows you to create and format headgsgsdgsdgsdgsdgsdgsdgsdgsdgsdgsdgsdgdgdgings</li>
          <li>Headings, paragraphs, blockquotes, figures, images, and figure captions</li>
          <li>A rich text element can be used with static or dynamic content.</li>
        </ul>
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