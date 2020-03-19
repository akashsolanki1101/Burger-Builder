import React, { Component } from 'react'

import Order from '../../Components/Order/Order'
import {withRouter} from 'react-router-dom'
import axios from '../../axios-orders'

class Orders extends Component {
    state = {
        orders : [],
        loading : true
    }

    componentDidMount(){
        axios.get("/orders.json")
        .then(res=>{
            this.setState({loading:false})
            let orders = []
            for(let ingredientname in res.data)
            {
                orders.push({
                    ...res.data[ingredientname],
                    id : ingredientname
                })
            }
            this.setState({orders : orders})
        })
        .catch(err=>{
            console.log(err)
            this.setState({loading:false})
        }
        )
    }

    render(){
        let orders = this.state.orders.map(order => {
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

export default withRouter(Orders);