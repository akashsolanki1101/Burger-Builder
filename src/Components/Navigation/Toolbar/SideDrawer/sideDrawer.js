import React from "react";

import classes from "./sideDrawer.module.css";
import Aux from '../../../hoc/Auxiliary'
import NavigationItems from '../../Navigation Items/NavigationItems'

const sideDrawer = props => {
  let classees = [classes.SideDrawer];
  
  if (!props.sideDrawer) {
    classees.push(classes.Close)
  }

  else{
    classees.push(classes.Open);
  }
  
  return (
      <Aux>
        <div className={classees.join(" ")}>{props.children}
          <NavigationItems isSignUp={props.isSignUp}/>
        </div>
      </Aux>
    );
};

export default sideDrawer;
