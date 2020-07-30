import React from "react";

import classes from "./Header.module.css";
import Navigation from "./Navigation/Navigation";
import NavigationItem from "./Navigation/NavigationItem/NavigationItem";

export default function Header() {
  return (
    <header className={classes.Header}>
      <nav>
        <Navigation>
          <NavigationItem link="/posts" exact>
            Home
          </NavigationItem>
          <NavigationItem link="/new-post">New Post</NavigationItem>
        </Navigation>
      </nav>
    </header>
  );
}
