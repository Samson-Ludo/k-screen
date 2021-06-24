import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import dashboardIcon from "../assets/dashboard-icon.png";
import customersIcon from "../assets/customers-icon.png";
import balancesIcon from "../assets/balances-icon.png";
import analyticsIcon from "../assets/analytics-icon.png";
import settingsIcon from "../assets/settings-icon.png";
import teamIcon from "../assets/team-icon.png";
import contactIcon from "../assets/contact-icon.png";
import logoutIcon from "../assets/logout-icon.png";
import klashaLogo from "../assets/klasha-logo.png";
import "./SideMenu.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

const mainPages = [
  { path: "/", icon: dashboardIcon, text: "Dashboard" },
  {
    path: "/balances",
    icon: balancesIcon,
    text: "Balances",
  },
  {
    path: "/customers",
    icon: customersIcon,
    text: "Customers",
  },
  {
    path: "/analytics",
    icon: analyticsIcon,
    text: "Analytics",
  },
];

const general = [
  { path: "/settings", icon: settingsIcon, text: "Settings" },
  {
    path: "/team",
    icon: teamIcon,
    text: "Team",
  },
  {
    path: "/contact",
    icon: contactIcon,
    text: "Contact",
  },
  {
    path: "/logout",
    icon: logoutIcon,
    text: "Logout",
  },
];

function SideMenu({ handlePageTitle, pageTitle }) {
  const classes = useStyles();
  return (
    <div className="sideMenu">
      <div className={classes.toolbar}>
        <img className="klashaLogo" src={klashaLogo} alt="klasha logo" />
      </div>
      {/* className={item.text === pageTitle ? "white-bg" : ""} */}
      <List>
        <h3 className="sideMenu-heading">Main Pages</h3>
        {mainPages.map((item) => (
          <Link to={item.path} key={item.text}>
            <ListItem
              className={item.text === pageTitle ? "white-bg" : ""}
              onClick={() => handlePageTitle(item.text)}
              button
            >
              <ListItemIcon>
                <img src={item.icon} alt={item.text} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <h3 className="sideMenu-heading">General</h3>
        {general.map((item) => (
          <Link to={item.path} key={item.text}>
            <ListItem
              className={item.text === pageTitle ? "white-bg" : ""}
              onClick={() => handlePageTitle(item.text)}
              button
            >
              <ListItemIcon>
                <img src={item.icon} alt={item.text} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}

export default SideMenu;
