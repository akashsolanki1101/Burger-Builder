import React from "react";

import classes from "./Modal.module.css";
import Backdrop from '../../Components/Backdrop/Backdrop'
import Aux from "../hoc/Auxiliary";

const modal = props => {
  let clases = [classes.Modal];

  if (!props.show) {
    clases.push(classes.Display);
  }

  return (
    <Aux>
      <div className={clases.join(" ")}>{props.children}</div>
      <Backdrop show={props.show} cancel={props.cancel} />
    </Aux>
  )};


export default modal;