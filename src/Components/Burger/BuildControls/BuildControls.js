import React from 'react'

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls =[
    {label : 'Bacon' , type : 'bacon'},
    {label : 'Cheese' , type : 'cheese'},
    {label : 'Meat' , type : 'meat'},
    {label : 'Salad' , type : 'salad'},
]

const buildControls = (props)=>{
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
            <button className={classes.OrderButton} disabled={!props.purchaseAble} onClick={props.placeorder}>Order Now</button>
        </div>
)}

export default buildControls;