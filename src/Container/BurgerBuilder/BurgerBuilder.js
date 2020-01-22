import React, { Component } from "react";

import Burger from "../../Components/Burger/Burger";
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import classes from "./BurgerBuilder.module.css";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <div className={classes.BurgerBuilder}>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </div>
    );
  }
}

export default BurgerBuilder;
