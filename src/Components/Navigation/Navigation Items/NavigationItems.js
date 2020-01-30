import React from 'react'

import NavigationItem from './Navigation Item/NavigationItem'
import classes from './NavigationItems.module.css';

const navigationItems = (props)=>(
        <ul className={classes.NavigationItems}>
                <NavigationItem link="../../App.js" active>Burger Builder</NavigationItem>
                <NavigationItem link="#">Checkout</NavigationItem>
        </ul>
)

export default navigationItems;