import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import classes from "./Courses.module.css";
import Course from "../../components/Course/Course";

export default function Courses(props) {
  const handleCourseSelect = () => {
    props.history.push(props.match.url + "/1?title=Angular");
  };
  return (
    <Fragment>
      <section className={classes.Courses}>
        <h3>Courses List</h3>
        <div className={classes.CourseList}>
          <div className={classes.CoursesWrapper}>
            <div className={classes.CoursesItem}>
              <img src="https://picsum.photos/200" alt="course" />
              <div className={classes.CoursesContent}>
                <h5>Angular Development</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, quae.</p>
                <button onClick={handleCourseSelect}>More Detail</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Route path={props.match.url + "/:id"} component={Course} />
    </Fragment>
  );
}
