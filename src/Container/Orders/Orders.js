import React, { Component } from 'react'

import Order from '../../Components/Order/Order'
import {withRouter} from 'react-router-dom'


class Orders extends Component {
    
    render(){
        console.log(this.props)
        return(
            <div>
                <Order/>
                <Order/>
            </div>
        )
    }
}

export default withRouter(Orders);