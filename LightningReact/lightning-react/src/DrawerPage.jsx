import * as React from "react";
import DocumentationPage from "./DocumentationPage";
import "./../css/documentation.css";
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

export default function StormDrawer() {
  return (
    <ThemeProvider theme={theme}>
      <StormDrawerInner />
    </ThemeProvider>
  );
}