import React from 'react'

import classes from './Order.module.css'

const order = (props)=>(
    <div className={classes.Order}>
        <p>Ingredients : Salad (1)</p>
        <p>Price: 11<strong>$</strong></p>
    </div>
)

export default order;