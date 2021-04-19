import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  Container,
  Typography,
} from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  title: {
    marginLeft: 0,
    paddingLeft: 0,
    flexGrow: 1,
  },
  navlink: {
    textDecoration: "none",
  },
});

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="secondary" className={classes.root}>
      <Container disableGutters>
        <Toolbar>
          <Typography className={classes.title}>Bank Balance</Typography>
          <NavLink className={classes.navlink} to="/credit">
            <Button>Credit</Button>
          </NavLink>
          <NavLink className={classes.navlink} to="/debit">
            <Button>Debit</Button>
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
