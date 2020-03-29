import React, { Component } from 'react'
import classes from './Toolbar.module.css' 
import Logo from '../../UI/Logo/Logo'
import SideDrawer from './SideDrawer/sideDrawer'
import Aux from '../../hoc/Auxiliary'
import Backdrop from '../../Backdrop/Backdrop'
import NavigationItems from '../Navigation Items/NavigationItems'
import Hamburger from '../../UI/Hamburger/Hamburger'
import {connect} from 'react-redux'


class Toolbar extends Component{
    state ={
        sideDrawer : false,
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
                <SideDrawer sideDrawer={this.state.sideDrawer} isSignUp={this.props.token} hideSideDrawer={this.hideSideDrawer}/>
                <Backdrop cancel={this.hideSideDrawer}
                            show={this.state.sideDrawer}/>
                <header className={classes.Toolbar}>
                    <div className = {classes.Hamburger} style={{height : "100%"}} onClick={this.showSideDrawer} disabled><Hamburger/></div>
                    <Logo />
                    <div className={classes.DesktopOnly}>
                        <NavigationItems 
                            isSignUp={this.props.token}/>
                    </div>
                </header>
            </Aux>
    )
    }
}

const mapStateToProps = state=>{
    return{
        token : state.authReducer.token
    }
}


export default connect(mapStateToProps)(Toolbar);