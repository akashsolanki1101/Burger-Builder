import React,{Component} from 'react';
import Layout from './Components/hoc/Layout/Layout' 
import classes from './App.module.css';
import Checkout from './Container/BurgerBuilder/Checkout/Checkout';
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder';
import {Route,Switch,Redirect} from 'react-router-dom'
import Orders from './Container/Orders/Orders'
import Auth from './Container/Auth/Auth' 
import LogOut from './Container/Auth/LogOut/LogOut';
import {connect} from 'react-redux'
import  * as actionTypes from './Container/Auth/store/Actions/Actions'

class App extends Component{
    
    componentDidMount(){
        this.props.checkAuthStatus();
    }
    
    render(){
        
        let Routes = 
            (<Switch>
                <Route path="/auth" component={Auth}></Route>
                <Route path="/" exact component={BurgerBuilder}></Route>
                <Redirect to="/" />
            </Switch>)

        if(this.props.isSignUp){
            Routes = (
                <Switch>
                    <Route path="/checkout" component={Checkout}></Route>
                    <Route path="/orders" component={Orders}></Route>
                    <Route path="/logout" component={LogOut}></Route>
                    <Route path="/auth" component={Auth}></Route>
                    <Route path="/" exact component={BurgerBuilder}></Route>
                    <Redirect to="/" />
                </Switch>)
        }

        return(
            <div className={classes.App}>
                <Layout>
                    {Routes}
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        isSignUp : state.authReducer.token
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        checkAuthStatus : ()=>dispatch(actionTypes.checkAuthStatus())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

