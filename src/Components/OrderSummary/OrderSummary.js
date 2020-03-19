import React from 'react'

import classes from './OrderSummary.module.css'
const orderSummary = (props)=>{

    let classees = [];
    // if(!props.show)
    // {
    //     classees.push(".Display");
    // }

    const content = Object.keys(props.ingredients)
        .map(igkey=>{
            return <li style={{textTransform:"capitalize",fontWeight : "600"}} key={igkey}>{igkey}-{props.ingredients[igkey]}</li>
        })

    return(
        <div className={classees}>
            <h2 style={{textAlign:"center"}}>Your order contains</h2>
            <h4>A delicious burger with ingredients :</h4>
            <ul>
                {content}
            </ul>
            <h4>Price-${props.price}</h4>
            <button className={[classes.Success,classes.Button].join(' ')} onClick={props.Checkout}>Checkout</button>
            <button className={[classes.Danger,classes.Button].join(' ')} onClick={props.cancelOrder}>Cancel</button>
        </div>
    )
}

export default orderSummary