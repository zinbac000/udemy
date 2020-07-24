import React, { Fragment } from "react";
import PropTypes from "prop-types";

import classes from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div style={{ transform: props.show ? "translateY(0)" : "translateY(-100vh)", opacity: props.show ? "1" : "0" }} className={classes.Modal}>
        {props.children}
      </div>
    </Fragment>
  );
};

const propsAreEqual = (prevProps, nextProps) => {
  return nextProps.show === prevProps.show;
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired
};

export default React.memo(Modal, propsAreEqual);
