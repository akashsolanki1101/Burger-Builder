import React from 'react'

import NavigationItem from './Navigation Item/NavigationItem'
import classes from './NavigationItems.module.css';

const navigationItems = (props)=>(
        <ul className={classes.NavigationItems}>
                <NavigationItem link="/" exact>Burger Builder</NavigationItem>
                {props.isSignUp?<NavigationItem link="/orders">Orders</NavigationItem> : null} 
                {
                       !props.isSignUp ? <NavigationItem link="/auth">Authenticate</NavigationItem> 
                                : <NavigationItem link="/logout">Log Out</NavigationItem>
                }
        </ul>
)

export default navigationItems;