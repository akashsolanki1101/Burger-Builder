import React from 'react'

import classes from './CheckoutSummary.module.css'
import Burger from '../../Burger/Burger'


const checkoutSummary = (props)=>{
    return(
        <div className={classes.checkoutSummary}>
            <h1>Hope it taste well!!</h1>
            <Burger ingredients={props.ingredients}/>
            <div>
                <button className={[classes.Button,classes.Success].join(' ')} onClick={props.checkoutContinued}>Continue</button>
                <button className={[classes.Button,classes.Danger].join(' ')} onClick={props.checkoutCancelled}>Cancel</button>
            </div>
        </div>
    )
}

export default checkoutSummary;