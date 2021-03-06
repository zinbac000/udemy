import React, { useRef, useEffect } from "react";

import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

function NavigationItems(props) {
  let navRef = useRef();
  const { isAuthenticated } = props;

  useEffect(() => {
    if (!props.drawerClosed) {
      return;
    }
    let navEl = navRef.current;

    const handleNavLinkClick = () => {
      props.drawerClosed();
    };

    navEl.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      navEl.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, [isAuthenticated]);

  let authLink = <NavigationItem link="/auth">Authenticate</NavigationItem>;
  if (isAuthenticated) {
    authLink = <NavigationItem link="/logout">Logout</NavigationItem>;
  }

  return (
    <ul className={classes.NavigationItems} ref={navRef}>
      <NavigationItem exact link="/">
        Burger Builder
      </NavigationItem>
      {isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
      {authLink}
    </ul>
  );
}

export default NavigationItems;
