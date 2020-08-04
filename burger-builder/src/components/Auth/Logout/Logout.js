import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

function Logout(props) {
  useEffect(() => {
    props.onLogout();
  }, []);

  return <Redirect to="/" />;
}

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(actions.authLogout())
});

export default connect(null, mapDispatchToProps)(Logout);
