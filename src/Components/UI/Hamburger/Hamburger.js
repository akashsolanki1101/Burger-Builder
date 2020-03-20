import React from 'react'

import image from '../../../Assets/hamburger.png'
import classes from './Hamburger.module.css';

const hamburger = ()=>{
    return <div className={classes.Hamburger}><img style={{height:"100%"}} src={image} alt="MENU"></img></div>
}

export default hamburger;