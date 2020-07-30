import React from "react";
import { connect } from "react-redux";

import classes from "./Persons.module.css";
import AddPerson from "../../components/AddPerson/AddPerson";
import Person from "../../components/Person/Person";

function Persons({ persons }) {
  const personsJsx = persons.map((person, i) => <Person key={i} name={person.name} age={person.age} />);
  return (
    <div className={classes.Persons}>
      <AddPerson />
      {personsJsx}
    </div>
  );
}

const mapStateToProps = (state) => ({
  persons: state.personReducer.persons
});

export default connect(mapStateToProps)(Persons);
