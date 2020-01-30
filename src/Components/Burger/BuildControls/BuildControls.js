import React from 'react'

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls =[
    {label : 'Salad' , type : 'salad'},
    {label : 'Bacon' , type : 'bacon'},
    {label : 'Cheese' , type : 'cheese'},
    {label : 'Meat' , type : 'meat'},
]

const buildControls = (props)=>{
    let  disabled = props.OrderSummary ? null : "disabled";
    return(
        <div className={classes.BuildControls}>
            <h4 style={{textAlign:"center"}}>Current Price : ${props.price}</h4>
            {
                controls.map(ctrl=>
                    <BuildControl
                        count = {props.ingredients[ctrl.type]}
                        key={ctrl.label} 
                        label={ctrl.label} 
                        addIngredient={()=>props.addIngredient(ctrl.type)}
                        removeIngredient={()=>props.removeIngredient(ctrl.type)}/>)
            }
            <button className={classes.OrderButton} disabled={disabled} onClick={props.placeorder}>Order Now</button>
        </div>
)}

export default buildControls;