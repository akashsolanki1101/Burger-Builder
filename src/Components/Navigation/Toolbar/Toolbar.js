import React, { Component } from 'react'
import classes from './Toolbar.module.css' 
import Logo from '../../../UI/Logo/Logo'
import SideDrawer from './SideDrawer/sideDrawer'
import Aux from '../../../hoc/Auxiliary'
import Backdrop from '../../Backdrop/Backdrop'
import NavigationItems from '../Navigation Items/NavigationItems'

class Toolbar extends Component{
    state ={
        sideDrawer : false
    }

    showSideDrawer = ()=>{  
        this.setState({sideDrawer : true})
    }

    hideSideDrawer = ()=>{
        this.setState({sideDrawer : false})
    }

    render(){
        return(
            <Aux>
                <SideDrawer sideDrawer={this.state.sideDrawer}/>
                <Backdrop cancel={this.hideSideDrawer}
                            show={this.state.sideDrawer}/>
                <header className={classes.Toolbar}>
                    <div onClick ={this.showSideDrawer}>MENU</div>
                    <Logo />
                    
                    <div className={classes.DesktopOnly}><NavigationItems/></div>
                    
                </header>
            </Aux>
    )
    }
}

export default Toolbar;