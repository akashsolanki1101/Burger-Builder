import React from 'react'
import classes from './Toolbar.module.css' 
import Logo from '../../../UI/Logo/Logo'
import SideDrawer from './SideDrawer/sideDrawer'

const sideDrawerClicked= ()=>{
    alert('Hello');
}

const toolbar = (props)=>(
    <header className={classes.Toolbar}>
        <SideDrawer clicked={sideDrawerClicked}>MENU</SideDrawer>
        <Logo />
        <div>....</div>
    </header>
)

export default toolbar;