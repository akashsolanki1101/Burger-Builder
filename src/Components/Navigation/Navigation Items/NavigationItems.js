import React from 'react'

import NavigationItem from './Navigation Item/NavigationItem'
import classes from './NavigationItems.module.css';

const navigationItems = (props)=>(
                <ul className={classes.NavigationItems} >
                        <NavigationItem hideSideDrawer={props.hideSideDrawer} link="/" exact>Burger Builder</NavigationItem>
                        {props.isSignUp?<NavigationItem hideSideDrawer={props.hideSideDrawer} link="/orders">Orders</NavigationItem> : null} 
                        {
                        !props.isSignUp ? <NavigationItem hideSideDrawer={props.hideSideDrawer} link="/auth">Authenticate</NavigationItem> 
                        : <NavigationItem hideSideDrawer={props.hideSideDrawer} link="/logout">Log Out</NavigationItem>
                        }
                </ul>
)

export default navigationItems;