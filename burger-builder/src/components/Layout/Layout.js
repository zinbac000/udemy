import React, { Fragment, useState } from "react";

import classes from "./Layout.module.scss";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

export default function Layout(props) {
  const [showDrawer, setShowDrawer] = useState(false);
  const handleShowDrawer = () => setShowDrawer(true);
  const handleCloseDrawer = () => setShowDrawer(false);
  return (
    <Fragment>
      <Toolbar drawerShown={handleShowDrawer} />
      <SideDrawer show={showDrawer} drawerClosed={handleCloseDrawer} />
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
}
