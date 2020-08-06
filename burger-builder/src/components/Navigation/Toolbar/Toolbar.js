import React from "react";
import PropTypes from "prop-types";

import classes from "./Toobar.module.scss";
import Logo from "../../Logo/Logo";
import logo from "../../../assets/img/burger-logo.jpg";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggler from "../SideDrawer/DrawerToggler/DrawerToggler";

import { connect } from "react-redux";

function Toolbar(props) {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggler clicked={props.drawerShown} />
      <div className={classes.Logo}>
        <Logo logo={logo} />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems isAuthenticated={props.isAuthenticated} />
      </nav>
    </header>
  );
}

Toolbar.propTypes = {
  drawerShown: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.idToken !== null
});

export default connect(mapStateToProps)(Toolbar);
