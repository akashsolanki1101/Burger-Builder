import React from 'react'
import classes from './Modal.module.css'

const modal = (props)=>{
    let classees = [classes.Modal];
    if(!props.placeorder)
    {
        classees.push(classes.Display);
    }
    const content = Object.keys(props.ingredients)
        .map(igkey=>{
            return <li style={{textTransform:"capitalize",fontWeight : "600"}} key={igkey}>{igkey}-{props.ingredients[igkey]}</li>
        })
    return(
        <div className={classees.join(' ')}>
            <h2 style={{textAlign:"center"}}>Your order contains</h2>
            <h4>A delicious burger with ingredients :</h4>
            <ul>
                {content}
            </ul>
            <h4>Price-${props.price}</h4>
            <button className={[classes.Success,classes.Button].join(' ')}>Checkout</button>
            <button className={[classes.Danger,classes.Button].join(' ')} onClick={props.cancelOrder}>Cancel</button>
        </div>
    )
}

export default modal