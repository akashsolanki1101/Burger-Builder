import React from 'react'
import classes from './Toolbar.module.css' 
import Logo from '../../../UI/Logo/Logo'

const toolbar = (props)=>(
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <div>....</div>
    </header>
)

export default toolbar;