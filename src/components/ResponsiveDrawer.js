import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import userImage from "../assets/user-img.png";
import bellIcon from "../assets/bell-icon.png";
import reddotIcon from "../assets/reddot-icon.png";
import "./ResponsiveDrawer.css";

import Container from "./Container";
import SideMenu from "./SideMenu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#ffffff",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: "#ffffff",
    color: "#000000",
    paddingTop: "20px",
    boxShadow: "0px 0px #ffffff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#eaeaea",
    border: "1px solid #ffffff",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: "#ffffff",
  },
}));

function ResponsiveDrawer(props) {
  const { window, currentPageTitle } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [pageTitle, setPageTitle] = React.useState("Dashboard");

  useEffect(() => {
    switch (currentPageTitle) {
      case "/":
        setPageTitle("Dashboard");
        break;
      case "/balances":
        setPageTitle("Balances");
        break;
      case "/customers":
        setPageTitle("Customers");
        break;
      case "/analytics":
        setPageTitle("Analytics");
        break;
      case "/settings":
        setPageTitle("Settings");
        break;
      case "/team":
        setPageTitle("Team");
        break;
      case "/contact":
        setPageTitle("Conatact");
        break;
      case "/logout":
        setPageTitle("Logout");
        break;
      default:
        setPageTitle("404 Error");
    }
  }, [currentPageTitle]);

  const handlePageTitle = (title) => {
    setPageTitle(title);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <SideMenu handlePageTitle={handlePageTitle} pageTitle={pageTitle} />
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={`${classes.root} "responsiveDrawer"`}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <h2 className="appBar-heading">{pageTitle}</h2>
            <p id="date">Today, 19th October 2020</p>
          </div>
          <div className="navItems">
            <div className="navItems-belldiv">
              <img src={bellIcon} alt="notification icon" />
              <img
                className="navItems-belldiv-reddot"
                src={reddotIcon}
                alt="red dot icon"
              />
            </div>
            <div className="navItems-userdiv">
              <img src={userImage} alt="user" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container />
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
