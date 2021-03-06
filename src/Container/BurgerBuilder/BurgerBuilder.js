import React, { Component } from "react";

import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import classes from "./BurgerBuilder.module.css";
import Modal from "../../Components/Modal/Modal";
// import Backdrop from "../../Components/Backdrop/Backdrop";
import axios from "../../axios-orders";
import Spinner from "../../Components/UI/Spinner/Spinner";
import Aux from "../../Components/hoc/Auxiliary";
import withErrorHandler from '../../Components/hoc/withErrorHandler/withErrorHandler'
import OrderSummary from '../../Components/OrderSummary/OrderSummary'
import {connect} from 'react-redux'
import * as actionType from './store/Actions/Actions'

class BurgerBuilder extends Component {
  state = {
    placeOrder: false,
    showSideDrawer: false,
    orderplaced: true,
    ingredientsLoaded: true,
    checkout : false
  };

  
  componentDidMount() {
    this.props.loadIngredient();
  }
  
  purchaseAble=()=>{
    let check = 0;
    
    for(let key in this.props.ingredients)
    {
      check = check + this.props.ingredients[key];
    }

    this.props.purchaseableHandler(check>0)

    return check > 0;
  }

  readyToCheckout = ()=>{
    this.props.history.push('/checkout')
  }

  placeOrder = () => {
    const updatedPlaceOrder = true;
    this.setState({ placeOrder: updatedPlaceOrder });
  };

  redirectToAuth = ()=>{
    this.props.history.push("/auth");
  }

  cancelOrder = () => {
    const updatedPlaceOrder = false;
    this.setState({ placeOrder: updatedPlaceOrder });
  };

  finaliseOrder = ()=>{
    this.setState({checkout : false})
  }

  render() {

    let orderSummary = null;
    
    if(!this.state.checkout)
    {
      orderSummary = (
        <OrderSummary  show={this.state.checkout} 
                        ingredients = {this.props.ingredients}
                        cancelOrder = {this.cancelOrder}
                        Checkout = {this.readyToCheckout}
                        price={this.props.totalPrice}
    />)  
    }
    
    let burger =this.props.error ? <p>Ingredients can't be loaded</p>: <Spinner />;

    if (this.props.ingredients) {
      burger = (
        
        <Aux>
        <div className={classes.block}>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredients={this.props.ingredients}
            price={this.props.totalPrice}
            addIngredient={this.props.addIngredient}
            removeIngredient={this.props.removeIngredient}
            purchaseAble={this.purchaseAble()}
            placeorder={this.props.isSignUp ? this.placeOrder : this.redirectToAuth}
            isSignUp={this.props.isSignUp}
          />
          </div>
          <Modal show={this.state.placeOrder} cancel={this.cancelOrder}>
              {orderSummary}
          </Modal>
        
        </Aux>
      );
    }

    return (
      <div className={classes.BurgerBuilder}>
        {burger}
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    ingredients : state.burgerBuilderReducer.ingredients,
    totalPrice : state.burgerBuilderReducer.totalPrice,
    error : state.burgerBuilderReducer.error,
    isSignUp : state.authReducer.token
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    addIngredient : (ingredientName)=> dispatch(actionType.addIngredient(ingredientName)),
    removeIngredient : (ingredientName)=> dispatch(actionType.removeIngredient(ingredientName)),
    loadIngredient : ()=> dispatch(actionType.loadIngredient()),
    purchaseableHandler : (value)=>dispatch(actionType.purchaseableHandler(value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));
