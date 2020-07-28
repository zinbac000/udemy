import React from "react";

import classes from "./Users.module.css";

export default function Users() {
  return (
    <section className={classes.Users}>
      <h3>User List</h3>
      <div className={classes.Users__List}>
        <div className={classes.Users__Wrapper}>
          <div className={classes.Users__Item}>
            <img src="https://picsum.photos/64" alt="user" />
            <p>Vick Nguyen</p>
            <span className={classes.StudentUser}>student</span>
          </div>
        </div>
        <div className={classes.Users__Wrapper}>
          <div className={classes.Users__Item}>
            <img src="https://picsum.photos/64" alt="user" />
            <p>Vick Nguyen</p>
            <span className={classes.AdminUser}>admin</span>
          </div>
        </div>
      </div>
    </section>
  );
}
