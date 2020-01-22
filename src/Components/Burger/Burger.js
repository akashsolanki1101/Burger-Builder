import React from 'react'

import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.module.css'

const burger=(props)=> {
        let ingredients = Object.keys(props.ingredients).forEach(key=> {
            return <BurgerIngredients type={key} />
        });

        return(
            <div className={classes.Burger}>
               <BurgerIngredients type="bread-top"/>
                    {ingredients}
               <BurgerIngredients type="bread-bottom"/>
            </div>
    ) 
}

export default burger;