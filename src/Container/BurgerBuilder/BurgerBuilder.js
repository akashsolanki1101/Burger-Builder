import React, { Component } from "react";

import Burger from "../../Components/Burger/Burger";
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import classes from "./BurgerBuilder.module.css";
import Modal from '../../Components/Modal/Modal'
import Backdrop from '../../Components/Backdrop/Backdrop'


class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice : 2,
    orderReady : false,
    placeOrder : false,
    showSideDrawer : false
  };

  ingredientsPrice ={
    salad : 1,
    bacon : 2,
    cheese : 1.5,
    meat : 4.5
  }



  placeOrder = ()=>{
    const updatedPlaceOrder = true;
    this.setState({placeOrder : updatedPlaceOrder})
  }

  cancelOrder = ()=>{
    const updatedPlaceOrder = false;
    this.setState({placeOrder : updatedPlaceOrder})
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

    let zero = 0;
    Object.keys(updatedIngredients)
        .map(igkey=>{
          zero = zero + updatedIngredients[igkey];
          return 0;
        })
    if(zero>0)
    {
      this.setState({orderReady : true})
    }
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

    let zero = 0;
    Object.keys(updatedIngredients)
        .map(igkey=>{
          zero = zero + updatedIngredients[igkey];
          return 0;
        })
    if(zero===0)
    {
      this.setState({orderReady : false})
    }
  }
  
  render() {
    return (
      <div className={classes.BurgerBuilder}>
      <Burger ingredients={this.state.ingredients} />
      <BuildControls
            ingredients={this.state.ingredients}
            price = {this.state.totalPrice} 
            addIngredient={this.addIngredient}
            removeIngredient={this.removeIngredient}
            OrderSummary={this.state.orderReady}
            placeorder={this.placeOrder}/>
      <Modal 
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            placeorder = {this.state.placeOrder}
            cancelOrder ={this.cancelOrder}/>
      <Backdrop 
            show={this.state.placeOrder}
            cancel={this.cancelOrder}/>
      </div>
    );
  }
}

export default BurgerBuilder;
