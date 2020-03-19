import React from 'react'

import classes from './Order.module.css'

const order = (props)=>{
    let ingredients = []
    for(let ingredient in props.ingredients)
    {
        ingredients.push({
            name : ingredient,
            amount : props.ingredients[ingredient]
        })
    }
    const ingredientlist = ingredients.map(ingredient=>{
        return <span key={ingredient.name} style={{textTransform : "capitalize"}}>{ingredient.name}({ingredient.amount}) </span>
    })
   
    return(
    <div className={classes.Order}>
        <p>Ingredients :{ingredientlist}</p>
        <p>Price: {props.price}<strong>$</strong></p>
    </div>
)}

export default order;