import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from '../store/Actions/Actions'


class Logout extends Component {
    componentDidMount(){
        this.props.logOut();
    }
    render(){
        return <Redirect to="/"/>
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        logOut : ()=>dispatch(actionTypes.logOut())
    }
}

export default connect(null,mapDispatchToProps)(Logout);