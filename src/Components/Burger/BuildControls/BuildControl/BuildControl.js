import React from 'react'

import classes from './BuildControl.module.css'

const buildControl = (props)=>{
    const disabled = props.count?null:"disabled"
    return(<div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.More} onClick={props.addIngredient}>+</button>
        <button className={classes.Less} disabled={disabled} onClick={props.removeIngredient}>-</button>
    </div>
    )};

export default buildControl