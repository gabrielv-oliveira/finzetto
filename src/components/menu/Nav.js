import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { Component } from "./styled";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    borderBottom: "1px solid transparent",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Component>
      <AppBar position="static" className="navBar">
        <CssBaseline />
        <Toolbar className="toolbar">
          <Typography variant="h3" >
            <a href="/">
              <img src="/logo.png" alt="Logo" />
            </a>

          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/quem-somos" className={classes.link}>
                Sobre nós
              </Link>
              <Link to="/" onClick={() => scrollToSection('faq')} className={classes.link}>
                FAQ
              </Link>
              <Link to="/" onClick={() => scrollToSection('contact')} className={classes.link}>
                Contato
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Component>
  );
}
export default Navbar;