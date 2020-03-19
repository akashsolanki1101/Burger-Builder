import React, { Component } from "react";

import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import classes from "./BurgerBuilder.module.css";
import Modal from "../../Components/Modal/Modal";
// import Backdrop from "../../Components/Backdrop/Backdrop";
import axios from "../../axios-orders";
import Spinner from "../../UI/Spinner/Spinner";
import Aux from "../../hoc/Auxiliary";
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import OrderSummary from '../../Components/OrderSummary/OrderSummary'

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 2,
    orderReady: false,
    placeOrder: false,
    showSideDrawer: false,
    orderplaced: true,
    ingredientsLoaded: false,
    checkout : false
  };

  ingredientsPrice = {
    salad: 1,
    bacon: 2,
    cheese: 1.5,
    meat: 4.5
  };

  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then(response => {
        this.setState({ ingredients: response.data, ingredientsLoaded: true });
      })
      .catch(error => {
        console.log(error);
      });
  }



  readyToCheckout = ()=>{
    const queryParams = [];
    for(let i in this.state.ingredients)
    {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }

    queryParams.push('price=' + this.state.totalPrice)
    const queryString = queryParams.join('&')

    this.props.history.push({
      pathname : '/checkout',
      search : '?' + queryString
    })
  }

  placeOrder = () => {
    const updatedPlaceOrder = true;
    this.setState({ placeOrder: updatedPlaceOrder });
  };

  cancelOrder = () => {
    const updatedPlaceOrder = false;
    this.setState({ placeOrder: updatedPlaceOrder });
  };

  finaliseOrder = ()=>{
    this.setState({checkout : false})
  }

  addIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const additionalPrice = this.ingredientsPrice[type];
    const updatedPrice = oldPrice + additionalPrice;
    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients
    });

    let zero = 0;
    Object.keys(updatedIngredients).map(igkey => {
      zero = zero + updatedIngredients[igkey];
      return 0;
    });
    if (zero > 0) {
      this.setState({ orderReady: true });
    }
  };

  removeIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const deductionPrice = this.ingredientsPrice[type];
    const updatedPrice = oldPrice - deductionPrice;
    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients
    });

    let zero = 0;
    Object.keys(updatedIngredients).map(igkey => {
      zero = zero + updatedIngredients[igkey];
      return 0;
    });
    if (zero === 0) {
      this.setState({ orderReady: false });
    }
  };

  render() {
    let orderSummary = null;
    if(!this.state.checkout)
    {
      orderSummary = (
        <OrderSummary  show={this.state.checkout} 
                        ingredients = {this.state.ingredients}
                        cancelOrder = {this.cancelOrder}
                        Checkout = {this.readyToCheckout}
                        price={this.state.totalPrice}
    />)  
    }
    
    let burger = <Spinner />;
    if (this.state.ingredientsLoaded) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            addIngredient={this.addIngredient}
            removeIngredient={this.removeIngredient}
            OrderSummary={this.state.orderReady}
            placeorder={this.placeOrder}
          />
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

export default withErrorHandler(BurgerBuilder,axios);
