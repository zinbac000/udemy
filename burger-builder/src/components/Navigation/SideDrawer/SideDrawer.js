import React, { Fragment } from "react";
import PropTypes from "prop-types";

import classes from "./SideDrawer.module.scss";
import Logo from "../../Logo/Logo";

import logo from "../../../assets/img/burger-logo.jpg";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

export default function SideDrawer(props) {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.drawerClosed} />
      <div className={[classes.SideDrawer, props.show ? classes.Open : classes.Close].join(" ")}>
        <div className={classes.Logo}>
          <Logo logo={logo} />
        </div>
        <NavigationItems drawerClosed={props.drawerClosed} />
      </div>
    </Fragment>
  );
}

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  drawerClosed: PropTypes.func.isRequired
};
