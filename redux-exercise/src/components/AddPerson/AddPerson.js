import React from "react";
import { connect } from "react-redux";

import classes from "./AddPerson.module.css";
import personAction from "../../redux/actions/personAction";

function AddPerson({ addPerson }) {
  const person = {
    name: "Max",
    age: 28
  };
  return (
    <div className={classes.AddPerson}>
      <button onClick={() => addPerson(person)}>Add Person</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addPerson: (person) => dispatch({ type: personAction.ADD_PERSON, payload: person })
});

export default connect(null, mapDispatchToProps)(AddPerson);
