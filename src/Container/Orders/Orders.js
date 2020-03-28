import React, { Component } from 'react'

import Order from '../../Components/Order/Order'
// import axios from '../../axios-orders'
import {connect} from 'react-redux'
import * as actionTypes from './store/Actions/Actions'

class Orders extends Component 
{
    componentDidMount(){
        this.props.loadOrders(this.props.token,this.props.userId);
    }

    render(){
        let orders = this.props.orders.map(order => {
            return(
                <Order key={order.id} price ={order.totalPrice} ingredients = {order.ingredients} />
        )})
        return(
            <div>
                {orders}
            </div>
        )
    }
}

const mapStateToProps = state=> {
    return (
        {
            orders  : state.orderReducer.orders,
            loading : state.orderReducer.loading,
            token : state.authReducer.token,
            userId : state.authReducer.userId
        }
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        loadOrders : (token,userId)=>dispatch(actionTypes.loadOrders(token,userId)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders);