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
        return <span className={classes.Ingredient} key={ingredient.name} style={{textTransform : "capitalize"}}>{ingredient.name}({ingredient.amount}) </span>
    })
   
    return(
    <div className={classes.Order}>
        <p>Ingredients :{ingredientlist}</p>
        <p>Price: <strong> {props.price}$</strong></p>
    </div>
)}

export default order;