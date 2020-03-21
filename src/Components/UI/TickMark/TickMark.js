import React from 'react'

import classes from './TickMark.module.css'
import gif from '../../../Assets/tick-1.gif'

const Gif =()=>
{
    return(
        <div className={classes.Block}>
            <img className={classes.Gif} src={gif} alt="Order Received"/>
            <h3>ORDER PLACED</h3>
        </div> 
    ) 
}

export default Gif;