import "./../css/normalize.css";
import "./../css/webflow.css";
import ".//../css/jamess-groovy-site-7ad661.webflow.css";
import { Link } from "react-router-dom";

export default function ContactPage(){
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
  <div class="section">
    <div class="container cc-heading-wrap contact-headline">
      <h1>Get in touch</h1>
      <div class="paragraph-bigger cc-bigger-light">Hey there, fill out this form</div>
    </div>
    <div class="container">
      <div class="get-in-touch-form-wrap w-form">
        <form id="wf-form-Get-In-Touch-Form" name="wf-form-Get-In-Touch-Form" data-name="Get In Touch Form" method="get" class="get-in-touch-form" data-wf-page-id="69e7719b4b54becd42e9d97c" data-wf-element-id="ecbd41cd-5b2d-78be-ec94-d855601f627b">
          <div class="credentials-inputs-wrap">
            <div class="contact-name-field-wrap"><label for="name">Name</label><input class="text-field cc-contact-field w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter your name" type="text" id="Name"/></div>
            <div class="email-name-field-wrap"><label for="Email-2">Email Address</label><input class="text-field cc-contact-field w-input" maxlength="256" name="Email" data-name="Email" placeholder="Enter your email" type="email" id="Email-2" required=""/></div>
          </div><label for="">Message</label><textarea id="field" name="field" placeholder="Enter your message" maxlength="5000" data-name="Field" class="text-field cc-textarea cc-contact-field w-input"></textarea><input type="submit" data-wait="Please wait..." class="primary-button w-button" value="Submit"/>
        </form>
        <div class="status-message cc-success-message w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="status-message cc-error-message w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      {/* <div class="map w-widget w-widget-map" data-widget-style="roadmap" data-widget-latlng="" data-enable-scroll="true" role="" title="" data-enable-touch="true" data-widget-zoom="12" data-widget-tooltip=""></div> */}
    </div>
  </div>
  <div class="section">
    <div class="container contact-headline">
      <div class="contacts-section">
        <h2>Main contacts</h2>
        <div class="w-layout-grid grid">
          <div id="w-node-_016410b9-f46c-d5d0-c671-ed1d7aa23d84-42e9d97c" class="number-contact-wrap">
            <div class="paragraph-bigger">Support</div>
            <div class="paragraph-contact-text">+61 8372 4662<br/></div>
            <div class="paragraph-tiny cc-paragraph-tiny-light">Mon - Fri, 9am - 5pm<br/></div>
          </div>
          <div id="w-node-_016410b9-f46c-d5d0-c671-ed1d7aa23d8d-42e9d97c" class="number-contact-wrap">
            <div class="paragraph-bigger">Marketing</div>
            <div class="paragraph-contact-text">+61 8372 4662<br/></div>
            <div class="paragraph-tiny cc-paragraph-tiny-light">Mon - Fri, 9am - 5pm<br/></div>
          </div>
          <div id="w-node-_016410b9-f46c-d5d0-c671-ed1d7aa23d96-42e9d97c" class="number-contact-wrap">
            <div class="paragraph-bigger">Office Hotline</div>
            <div class="paragraph-contact-text">+61 8372 4662<br/></div>
            <div class="paragraph-tiny cc-paragraph-tiny-light">Mon - Fri, 9am - 5pm<br/></div>
          </div>
          <div id="w-node-_016410b9-f46c-d5d0-c671-ed1d7aa23d9f-42e9d97c" class="number-contact-wrap">
            <div class="paragraph-bigger">Email</div>
            <a href="mailto:support@store.com?subject=You&#x27;ve%20got%20mail" class="support-link">support@store.com</a>
          </div>
        </div>
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