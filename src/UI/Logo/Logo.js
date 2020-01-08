import React from 'react'
import image from '../../Assets/burger-logo.png'
import classes from './Logo.module.css';

const logo = ()=>(
    <div className={classes.Logo}>
        <img src={image} alt="LOGO" style={{height : "80%"}}/>
    </div>
)

export default logo;