import React from "react";
import Navigation from "../Navigation/Navigation";
import NavigationItem from "../Navigation/NavigationItem/NavigationItem";

export default function Header() {
  return (
    <header style={{ marginBottom: "15px" }}>
      <nav>
        <Navigation>
          <NavigationItem exact link="/">
            Home
          </NavigationItem>
          <NavigationItem link="/users">Users</NavigationItem>
          <NavigationItem link="/courses">Courses</NavigationItem>
        </Navigation>
      </nav>
    </header>
  );
}
