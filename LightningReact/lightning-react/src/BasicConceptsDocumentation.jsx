import { useEffect } from "react";
import { Link } from "react-router-dom";
//import "./HomePage.css";
//import "./normalize.css";
import "./../css/normalize.css";
import "./../css/webflow.css";
import "./../css/learning-centre.css";

// export function BasicConceptslearning-centre(){
//   <div class="section">
//     <div class="container">
//       <div class="rich-text w-richtext">
//         <h2>What is Lightning Start?</h2>
//         <h3 class="learning-centre-subheader">Overview</h3>
//         <p>Welcome to Lighting Start (LS)! LS is a powerful code generation platform which allows you to combine AI-generated portions with deterministically generated, reusable code which has been vetted for quality. This union of the two, exploiting the strengths of each, empowers you to create code faster than before with higher quality. </p>
// <p>
// In this page we give a high-level overview of LS and ask what problems it is designed to solve.
// </p>

// <h3 class="learning-centre-subheader">Why Code Generation?</h3>
// <p>You will probably already be familiar with at least two different kinds of code generation. </p>

// <p>For one, there are <i>compilers</i>. Here a source language facilitates the generation of code in another, target language. Thus a C++ compiler, presented with valid C++ code, will generate C, which when presented to a C compiler generates Assembly. TypeScript generates files in JavaScript. And so on and so forth. Compilers have been a fundamental part of programming since the inception of digital electronic computers.</p>

// <p>Another is much more recent: AI-assisted programming. 
//   Here, an ordinary language prompt is fed into a Large Language Model (LLM) which will return generated code in a language of your choice. This technology is extremely powerful and offers many possible advantages to the modern developer. However, the potential pitfalls are equally daunting. Since AIs created by deep learning methods are essentially 'black boxes', there can be no guarantees on the reliability or quality of LLM-generated code. Since this feature appears to be baked in, we can expect it to be an aspect of AI-assisted development for a long time to come.</p>
    
// <p>Another type of code generation is much more niche: scaffolding code generation. These generators take a limited number of inputs, e.g. from a GUI wizard or an OpenAPI specification. They generate scaffolding which helps you to get started in your project. These generators have one big advantage over LLMs in that they are deterministic, so the code they yield is guaranteed to work. We can also assume it has been vetted by a professional developer. Unfortunately, these generators tend to only cover a small number of use cases. They lack flexibility and offer little or no customisability when it comes to more complex requirements. As a result, this type of code generation has only found niche and specialized uses across the industry.</p>

// <p>Broadly, we generate code because it is too time-consuming or impractical to write the code by hand ourselves in the target language. The field is constantly evolving its ideas on fruitful code generation methodologies.</p>


// <h3 class="learning-centre-subheader">What is Lightning Start?</h3>
// <p>LS is a code generation framework which promotes iterative and experimental development - especially suited for the modern developer who, more and more, is expected to be conversant with many technologies and to produce demoable work consistently. It is intended to allow you to focus your time on solving problems and doing creative work, rather than spending a large percentage of every day 'fighting the AI' - or giving up and writing the boilerplate yourself! With LS you can draw up a high-level schema and generate a starter project from it. You can do things like experiment with different libraries, even languages, that normally would not be possible due to time constraints. Using this framework, you learn more, and each time you hit Generate you will have a demoable project. Whenever you want to extend the generated project, the framework may provide a faster way of doing so. And if not, it gives you the freedom to write whatever custom code you like rather than constraining you to always stay on the rails.</p>

//         <pre contenteditable="false" class="w-code-block" style={{
//   display: "block",
//   overflowX: "auto",
//   background: "#2b2b2b",
//   color: "#f8f8f2",
//   padding: "0.5em"
// }}><code class="language-javascript" style={{ whiteSpace: "pre-wrap" }}><span><span>Yo, dis is a code insert</span></span></code></pre>
//         <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
//         <ul role="list">
//           <li>The rich text element allows you to create and format headgsgsdgsdgsdgsdgsdgsdgsdgsdgsdgsdgsdgdgdgings</li>
//           <li>Headings, paragraphs, blockquotes, figures, images, and figure captions</li>
//           <li>A rich text element can be used with static or dynamic content.</li>
//         </ul>
//       </div>
//     </div>
//   </div>
// }

const consoleAppCode = `using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello World");
    }
}
`;
const loggerCode = `{{Log(message: "===Hello World!!!===")}}
`;

const codeWithSimpleLogger = `using System;

class Program
{
    static void Main(string[] args)
    {
      {{Log(message: "===Hello World!!!===")}};
    }
}
`;
export default function BasicConceptslearning-centre(){
return (
<div>
<main class="body">
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navigation w-nav">
    <div class="navigation-items">
      <a href="index.html" class="logo-link w-nav-brand"><img src="images/LS_arc_logo_blue.png" width="80" sizes="(max-width: 479px) 77vw, 80px" srcset="images/LS_arc_logo_blue-p-500.png 500w, images/LS_arc_logo_blue.png 577w" alt="" class="logo-image"/></a>
      <div class="navigation-wrap">
        <a href="products.html" class="navigation-item w-nav-link">learning-centre</a>
        <a href="about.html" class="navigation-item w-nav-link">About</a>
        <a href="contact.html" class="navigation-item w-nav-link">Contact</a>
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
        <h2>Basic Concepts</h2>
        <h3 class="learning-centre-subheader">Create a Console App</h3>
<p>
  After starting up Lightning Start Desktop, select New Project and click Next.
  </p>

<p>You should see a list of projects which will include the Starter  and Empty Projects. Note that the location of your project template folder can be configured by pressing on the cog icon at the top. If you have not touched this setting before, it should be fine to leave it to the default. Select Empty Project and click Next.</p>

<p>You will be prompted to select the Project Name and a Workspace. Enter ConsoleApp for the Project Name and as a workspace chooser any folder on your hard disc.</p>

<p>On the left you will see your project Schema, which so far is empty. This is the YAML file in which you give a high-level overview of your project structure. Leave it blank for now. We are going to add a template for the main console app program. You can add this file to the workspace folder. If you wish to use a different folder, please ensure it is added to your template store paths. To modify them, open the Templates tab on the left-hand pane and press the Edit Folders button. A dialog will appear which allows you to add a new template store path.</p>

<p>Using Visual Studio Code, Notepad++ or any other IDE, create the following file and name it <b>console.mustache</b>: 
</p>

  <pre contenteditable="false" class="w-code-block" style={{
  display: "block",
  overflowX: "auto",
  textAlign: "left",
  background: "#2b2b2b",
  color: "#f8f8f2",
  padding: "0.5em"
}}><code class="language-javascript" style={{ whiteSpace: "pre-wrap" }}>
{consoleAppCode}
 </code></pre>

<h3 class="learning-centre-subheader">Create a Logger Template</h3>
<p>Let's create a mustache template for a simple logger. Create a file, call it <b>logger.mustache</b> and paste in the following: m,  </p>

  <pre contenteditable="false" class="w-code-block" style={{
  display: "block",
  overflowX: "auto",
  textAlign: "left",
  background: "#2b2b2b",
  color: "#f8f8f2",
  padding: "0.5em"
}}><code class="language-javascript" style={{ whiteSpace: "pre-wrap" }}>
%%string message%%
<br/><br/>
logger.LogInformation(message);
 </code></pre>
<h3 class="learning-centre-subheader">Use Mustache Notation</h3>
<p>Now let's use this simple logger. Paste the following over the <code class="inline-code">Console.WriteLine</code> statement: <code class="inline-code">{loggerCode}</code>. You should have the following:
</p>

  <pre contenteditable="false" class="w-code-block" style={{
  display: "block",
  overflowX: "auto",
  textAlign: "left",
  background: "#2b2b2b",
  color: "#f8f8f2",
  padding: "0.5em"
}}><code class="language-javascript" style={{ whiteSpace: "pre-wrap" }}>
  {codeWithSimpleLogger}
 </code></pre>

 <h3 class="learning-centre-subheader">Use Logger Library</h3>
<p>
  Now let us change the template to use a logging library. Replace your <b>logger.mustache</b> template with the following:
</p>
  <pre contenteditable="false" class="w-code-block" style={{
  display: "block",
  overflowX: "auto",
  textAlign: "left",
  background: "#2b2b2b",
  color: "#f8f8f2",
  padding: "0.5em"
}}><code class="language-javascript" style={{ whiteSpace: "pre-wrap" }}>
%%string message%%
<br/><br/>
logger.LogInformation(message);
 </code></pre>

 <h3 class="learning-centre-subheader">Add Setup</h3>

 <p>We have not added the code for setting up the logger. Let us quickly fix this. First, let's set up your AI. Click File and go to Preferences. Here you can choose your default LLM model. In AI Settings, enter your API Key which is a unqiue, secret code that will allow you to securely access an LLM. You generate your API key from your account on the provider’s platform (for example, from your OpenAI dashboard under “API keys”).

When this is done, you can quickly add an LLM-generated snippet into the code using the notation of triple curly braces (<code class="inline-code">{"{{{ ... }}}"}</code>). Using the treble bracket notation, add the following command to the top of the program: <b>Within a .NET Core console application, within the main method, give me only the setup code for a Microsoft.Extensions.Logging logger. Logger variable name should be "logger"</b>. The command passes context-specific information to the LLM which greatly increases the likelihood that it will return a valid answer. The LLM is already provided with context but generally speaking, the more information you provide will only make the LLM's job easier. Here is the program with this alteration:</p>
  <pre contenteditable="false" class="w-code-block" style={{
  display: "block",
  overflowX: "auto",
  textAlign: "left",
  background: "#2b2b2b",
  color: "#f8f8f2",
  padding: "0.5em"
}}><code class="language-javascript" style={{ whiteSpace: "pre-wrap" }}>

 </code></pre>
 
<h3 class="learning-centre-subheader">Next Step</h3>
<p>We introduced the concept of a schema, which is a high-level description of the project to be generated. We also explored mustache notation, template arguments, and LLM snippet insertion. These are themn m elementary building blocks out of which you can create much more complex applications. LS facilitates companies in creating common standards between developers to ensure consistency and avoid reinventing the wheel — and it does it without relying on abstractions that might appear counter-intuitive. By downloading template libraries, you can create applications just from a schema. It is not only more reliable than feeding instructions directly to an AI, but the engineer has more control at every step.
</p>
<p>Next, learn about schema definitions and parameters. These allow more high-level use of schemas. For example, using a schema definition the whole console app above could be referenced in the schema as simply "console-app". Parameters can be set in the YAML which are leveraged in templates to turn on and off various features. </p>

      
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
          <a href="about.html" class="footer-link">learning-centre</a>
          <a href="contact.html" class="footer-link">About</a>
          <a href="products.html" class="footer-link">Contact</a>
        </div>
        <div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29724-87e29718" class="label">PRODUCTS</div>
        <div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29726-87e29718" class="links-section-footer">
          <a href="https://apps.microsoft.com/detail/9p9vwp5ght82?hl=en-GB&gl=GB" class="footer-link">LS Desktop</a>
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
              <a href="https://x.com/LightningStartX" target="_blank" class="footer-link">X</a>
          <a href="https://www.threads.net/@lightningstarttech," target="_blank" class="footer-link">Threads</a>
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