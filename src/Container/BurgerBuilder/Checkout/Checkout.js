import React,{Component} from 'react'
import CheckoutSummary from '../../../Components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from '../../../Container/ContactData/ContactData'
import {connect} from 'react-redux'

class Checkout extends Component {

    // componentWillMount(){
    //     const query = new URLSearchParams(this.props.location.search)
    //     console.log(query)
    //     const ingredients = {}
    //     let price = 0
    //     for(let i of query.entries())
    //     { 
    //         if(i[0]===price)
    //         {
    //             price = i[1]
    //         }
    //         else{
    //             ingredients[i[0]] = +i[1];
    //         }
    //     }
    //     this.setState({ingredients : ingredients,price : price})
    // }
    
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
        ingredients : state.ingredients,
    }
}

export default connect(mapStateToProps)(Checkout);