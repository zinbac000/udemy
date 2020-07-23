import React from "react";
import PropTypes from "prop-types";

import classes from "./Toobar.module.scss";
import Logo from "../../Logo/Logo";
import logo from "../../../assets/img/burger-logo.jpg";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggler from "../SideDrawer/DrawerToggler/DrawerToggler";

export default function Toolbar(props) {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggler clicked={props.drawerShown} />
      <div className={classes.Logo}>
        <Logo logo={logo} />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}

Toolbar.propTypes = {
  drawerShown: PropTypes.func.isRequired
};
