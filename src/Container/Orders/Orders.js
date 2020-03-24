import React, { Component } from 'react'

import Order from '../../Components/Order/Order'
import {withRouter} from 'react-router-dom'
// import axios from '../../axios-orders'
import {connect} from 'react-redux'
import * as actionTypes from './store/Actions/Actions'

class Orders extends Component {

    componentDidMount(){
        this.props.loadOrders();
    }

    render(){
        let orders = this.props.orders.map(order => {
            return(
                <Order key={order.id} price ={order.totalprice} ingredients = {order.ingredients} />
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
            loading : state.orderReducer.loading
        }
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        loadOrders : ()=>dispatch(actionTypes.loadOrders())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Orders));