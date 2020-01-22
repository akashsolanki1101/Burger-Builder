import React from 'react'
import classes from './sideDrawer.module.css'

const sideDrawer = (props)=>{
    return <div 
    className={classes.sideDrawer}
    onClick={props.clicked}>{props.children}</div>
}

export default sideDrawer;