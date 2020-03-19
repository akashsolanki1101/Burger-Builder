import React,{Component} from 'react';
import Layout from './hoc/Layout/Layout' 
import classes from './App.module.css';
import Checkout from './Container/BurgerBuilder/Checkout/Checkout';
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder';
import {Route,Switch} from 'react-router-dom'
import Orders from './Container/Orders/Orders' 

class App extends Component{
    render(){
        return(
            <div className={classes.App}>
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout}></Route>
                        <Route path="/" exact component={BurgerBuilder}></Route>
                        <Route path="/orders" component={Orders}></Route>
                    </Switch>
                </Layout>
            </div>
        )
    }
}

export default App;

