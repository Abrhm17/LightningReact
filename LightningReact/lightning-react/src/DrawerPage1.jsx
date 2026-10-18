import * as React from "react";

import { useEffect } from "react";
import { Link } from "react-router-dom";
//import "./HomePage.css";
//import "./normalize.css";
import "./../css/normalize.css";
import "./../css/webflow.css";

import documentation from "./DocumentationPage";

import {
  styled,
  createTheme,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles";

import {
  Box,
  Drawer,
  CssBaseline,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import DashboardIcon from "@mui/icons-material/Dashboard";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import BuildIcon from "@mui/icons-material/Build";
import SpeedIcon from "@mui/icons-material/Speed";

const drawerWidth = 280;

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0b1020",
      paper: "#131a2e",
    },
    primary: { main: "#7dd3fc" },
    text: {
      primary: "#e8ecff",
      secondary: "#a5b0d6",
    },
  },
  transitions: {
    duration: {
      enteringScreen: 400,
      leavingScreen: 300,
    },
  },
});

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(4),
  marginLeft: `-${drawerWidth}px`,
  transition: theme.transitions.create("margin", {
    duration: 400,
    easing: "ease-in-out",
  }),
  ...(open && {
    marginLeft: 0,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open }) => ({
  background: "rgba(11,16,32,0.78)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "none",
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: "flex",
  justifyContent: "flex-end",
}));

export default function DrawerPage1(){
return (
<div>
<main class="body">
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navigation w-nav">
    <div class="navigation-items">
      <Link to="/" className="logo-link w-nav-brand w--current"><img src="images/LS_arc_logo_blue.png" width="80" sizes="(max-width: 479px) 77vw, 80px" srcset="images/LS_arc_logo_blue-p-500.png 500w, images/LS_arc_logo_blue.png 577w" alt="" class="logo-image"/></Link>
      <div class="navigation-wrap">
        {/* <a href="products.html" class="navigation-item w-nav-link">learning-centre</a> */}
            <Link to="/learning-centre" className="navigation-item w-nav-link">
              Learn More
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
        <p>Welcome to Lighting Start (LS)! LS is a powerful code generation platform which allows you to combine AI-generated portions with deterministically generated, reusable code which has been vetted for quality. This union of the two, exploiting the strengths of each, empowers you to create code faster than before with higher quality. </p>
        <p>In this page we give a high-level overview of LS and ask what problems it is designed to solve.
        </p>
<p>You will probably already be familiar with at least two different kinds of code generation. </p>

<p>For one, there are <i>compilers</i>. Here a source language facilitates the generation of code in another, target language. Thus a C++ compiler, presented with valid C++ code, will generate C, which when presented to a C compiler generates Assembly. TypeScript generates files in JavaScript. And so on and so forth. Compilers have been a fundamental part of programming since the inception of digital electronic computers.</p>

<p>Another is much more recent: AI-assisted programming. 
  Here, an ordinary language prompt is fed into a Large Language Model (LLM) which will return generated code in a language of your choice. This technology is extremely powerful and offers many possible advantages to the modern developer. However, the potential pitfalls are equally daunting. Since AIs created by deep learning methods are essentially 'black boxes', there can be no guarantees on the reliability or quality of LLM-generated code. Since this feature appears to be baked in, we can expect it to be an aspect of AI-assisted development for a long time to come.</p>
    
<p>Another type of code generation is much more niche: scaffolding code generation. These generators take a limited number of inputs, e.g. from a GUI wizard or an OpenAPI specification. They generate scaffolding which helps you to get started in your project. These generators have one big advantage over LLMs in that they are deterministic, so the code they yield is guaranteed to work. We can also assume it has been vetted by a professional developer. Unfortunately, these generators tend to only cover a small number of use cases. They lack flexibility and offer little or no customisability when it comes to more complex requirements. As a result, this type of code generation has only found niche and specialized uses across the industry.</p>

<p>Broadly, we generate code because it is too time-consuming or impractical to write the code by hand ourselves in the target language. The field is constantly evolving its ideas on fruitful code generation methodologies.</p>


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

function StormDrawerInner() {
  const muiTheme = useTheme();
  const [open, setOpen] = React.useState(true);

  const [openSections, setOpenSections] = React.useState({
    "Getting Started": true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const menu = [
    // {
    //   title: "Getting Started",
    //   icon: <DashboardIcon />,
    //   children: ["Overview", "Installation"],
    // },
    {
      title: "What is Lightning Start?",
      icon: <FlashOnIcon />,
      children: ["Why Code Generation?", "Performance"],
    },
    // {
    //   title: "Advanced",
    //   icon: <BuildIcon />,
    //   children: ["Customization", "API"],
    // },
    // {
    //   title: "System",
    //   icon: <SpeedIcon />,
    //   children: ["Status", "Logs"],
    // },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #0b1020 0%, #131a2e 100%)",
        color: "#e8ecff",
      }}
    >
      <CssBaseline />

      {/* 🔝 Top Bar */}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon sx={{ color: "#e8ecff" }} />
          </IconButton>

        {/* <Typography sx={{ fontWeight: 800 }}>
            ⚡ Storm
          </Typography>  */}
        </Toolbar>
      </AppBar>

      {/* 📂 Drawer */}
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "rgba(19,26,46,0.9)",
            backdropFilter: "blur(12px)",
            borderRight: "1px solid rgba(255,255,255,0.12)",
            transition: "transform 400ms ease-in-out",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            {muiTheme.direction === "ltr" ? (
              <ChevronLeftIcon sx={{ color: "#e8ecff" }} />
            ) : (
              <ChevronRightIcon sx={{ color: "#e8ecff" }} />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {menu.map((section) => {
            const isOpen = openSections[section.title];

            return (
              <React.Fragment key={section.title}>
                {/* Section Header */}
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => toggleSection(section.title)}
                    sx={{
                      mx: 1,
                      my: 0.5,
                      borderRadius: "12px",
                      "&:hover": {
                        background: "rgba(255,255,255,0.06)",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#7dd3fc", minWidth: 40 }}>
                      {section.icon}
                    </ListItemIcon>

                    <ListItemText
                      primary={section.title}
                      primaryTypographyProps={{
                        fontWeight: 700,
                      }}
                    />

                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>

                {/* Children */}
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {section.children.map((item) => (
                      <ListItem key={item} disablePadding>
                        <ListItemButton
                          sx={{
                            pl: 5,
                            opacity: 0.85,
                            "&:hover": {
                              background: "rgba(255,255,255,0.04)",
                            },
                          }}
                        >
                          <ListItemText primary={item} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>

      {/* 📄 Main Content */}
       <Main open={open}>

      <learning-centrePage/>

       </Main>
      {/* <Main open={open}>
        <DrawerHeader />

        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: 900,
            mb: 2,
            background:
              "linear-gradient(180deg,#fff,#dbeafe 40%,#93c5fd 70%,#7dd3fc)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Dashboard
        </Typography>

        <Box
          sx={{
            p: 3,
            borderRadius: 3,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          Select an item from the sidebar to begin.
        </Box>
      </Main> */}
    </Box>
  );
}

export function StormDrawer() {
  return (
    <ThemeProvider theme={theme}>
      <StormDrawerInner />
    </ThemeProvider>
  );
}