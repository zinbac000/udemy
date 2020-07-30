import React, { useState } from "react";
import { connect } from "react-redux";

import classes from "./AddPerson.module.css";
import personAction from "../../redux/actions/personAction";

function AddPerson({ addPerson }) {
  const [{ name, age }, setPerson] = useState({ name: "", age: "" });

  const handleChange = (event) => {
    setPerson({
      name,
      age,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className={classes.AddPerson}>
      <input type="text" value={name} onChange={handleChange} name="name" placeholder="Name..." />
      <input type="text" value={age} onChange={handleChange} name="age" placeholder="Age..." />
      <button onClick={() => addPerson({ name, age })}>Add Person</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addPerson: (person) => dispatch({ type: personAction.ADD_PERSON, payload: person })
});

export default connect(null, mapDispatchToProps)(AddPerson);
