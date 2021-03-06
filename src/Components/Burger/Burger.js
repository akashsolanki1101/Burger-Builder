import React from 'react'

import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.module.css'

const burger = (props)=> {
        let ingredients = Object.keys(props.ingredients)
            .map((ingredient=> {
                    let a=[];
                    for(var i=0;i<(props.ingredients)[ingredient];i++)
                        {
                            a.push(<BurgerIngredients type={ingredient} key={ingredient+i.toString()}/>)
                        }
                    return a;
        }));
        let len = 0;
        
        ingredients.forEach(element =>{
            len = len + element.length;
        })  
        
        if(!len)
        {
            ingredients = (<div style={{fontWeight : "bolder"}}>Please start adding ingredients!!</div>)
        }
     
        return(
            <div className={classes.Burger}>
               <BurgerIngredients type="bread-top"/>
                    {ingredients}
               <BurgerIngredients type="bread-bottom"/>
            </div>
    ) 
}

export default burger;