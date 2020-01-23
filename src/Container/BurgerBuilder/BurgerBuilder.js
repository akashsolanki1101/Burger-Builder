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
    },
    totalPrice : 2,
  };

  ingredientsPrice ={
    salad : 1,
    bacon : 2,
    cheese : 1.5,
    meat : 4.5
  }

  addIngredient = (type)=>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const additionalPrice = this.ingredientsPrice[type];
    const updatedPrice = oldPrice + additionalPrice;
    this.setState({totalPrice : updatedPrice,ingredients : (updatedIngredients)})
  }

  removeIngredient = (type)=>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const deductionPrice = this.ingredientsPrice[type];
    const updatedPrice = oldPrice - deductionPrice;
    this.setState({totalPrice : updatedPrice,ingredients : (updatedIngredients)})
  }

  render() {
    return (
      <div className={classes.BurgerBuilder}>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
            ingredients={this.state.ingredients}
            price = {this.state.totalPrice} 
            addIngredient={this.addIngredient}
            removeIngredient={this.removeIngredient}/>
      </div>
    );
  }
}

export default BurgerBuilder;
