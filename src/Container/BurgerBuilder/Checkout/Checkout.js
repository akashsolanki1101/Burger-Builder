import React,{Component} from 'react'
import CheckoutSummary from '../../../Components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from '../../../Container/ContactData/ContactData'
import {connect} from 'react-redux'

class Checkout extends Component {

    checkoutCancelled = ()=>{
        this.props.history.goBack();
    }
    
    checkoutContinued = ()=>{
        this.props.history.replace(this.props.match.path + '/contact-data')
    }
    
    render(){
        return (
            <div>
                <CheckoutSummary ingredients = {this.props.ingredients}
                checkoutCancelled = {this.checkoutCancelled}
                checkoutContinued = {this.checkoutContinued}/>
            <Route 
                path={this.props.match.path + '/contact-data'} 
                component={ContactData}>
            </Route>            

            </div>

        )
    }
}


const mapStateToProps = state =>{
    return{
        ingredients : state.burgerBuilderReducer.ingredients,
    }
}

export default connect(mapStateToProps)(Checkout);