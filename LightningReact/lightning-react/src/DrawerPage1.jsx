import * as React from "react";

import { useEffect } from "react";
import { Link } from "react-router-dom";
//import "./HomePage.css";
//import "./normalize.css";
import "./../css/normalize.css";
import "./../css/webflow.css";

import DocumentationPage from "./DocumentationPage";

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
      <a href="index.html" class="logo-link w-nav-brand"><img src="images/LS_arc_logo_blue.png" width="80" sizes="(max-width: 479px) 77vw, 80px" srcset="images/LS_arc_logo_blue-p-500.png 500w, images/LS_arc_logo_blue.png 577w" alt="" class="logo-image"/></a>
      <div class="navigation-wrap">
        <a href="products.html" class="navigation-item w-nav-link">Documentation</a>
        <a href="about.html" class="navigation-item w-nav-link">About</a>
        <a href="contact.html" class="navigation-item w-nav-link">Contact</a>
      </div>
      <a href="#" class="button w-button">Get Started</a>
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
        <h2>What’s a Rich Text element?</h2>
        <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. </p>
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
    {
      title: "Getting Started",
      icon: <DashboardIcon />,
      children: ["Overview", "Installation"],
    },
    {
      title: "Features",
      icon: <FlashOnIcon />,
      children: ["Lightning", "Performance"],
    },
    {
      title: "Advanced",
      icon: <BuildIcon />,
      children: ["Customization", "API"],
    },
    {
      title: "System",
      icon: <SpeedIcon />,
      children: ["Status", "Logs"],
    },
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

      <DocumentationPage/>

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