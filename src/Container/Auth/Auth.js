import React,{Component} from 'react'

import Input from '../../Components/UI/Input/InputElement'
import classes from './Auth.module.css';
import withErrorHandler from '../../Components/hoc/withErrorHandler/withErrorHandler';
import axios from 'axios'
import { connect } from 'react-redux';
import * as actionTypes from './store/Actions/Actions'
import {Redirect} from 'react-router-dom'


class Auth extends Component {
    state = {
        controls :{
            email : 
            {
                elementType : 'input',
                elementConfig : {
                    type : 'email',
                    placeholder : 'Mail Address',
                },
                validation : {
                    required : true,
                    isEmail : true
                },
                errorMessage : 'Please Enter Valid Email Address',
                value : '',
                valid : false,
                touched : false,
            },

            password : 
            {
                elementType : 'input',
                elementConfig : {
                    type : 'password',
                    placeholder : 'Password',
                },
                validation : {
                    required : true,
                    minlength : 7
                },
                errorMessage : 'Please Enter Valid Password',
                value : '',
                valid : false,
                touched : false,
                },
            },
            
            formIsValid : false,
            isSignUp : false
    }

    checkValidation = (value,rules)=>{
        let isValid = true;
 
        if(rules.required)
        {
            isValid = value.trim() !== "" && isValid;
        }
 
        if(rules.minlength)
        {
            isValid = (value.length >=rules.minlength) && isValid;
        }
 
        if(rules.isEmail)
        {
            const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
            isValid = pattern.test(value) && isValid;
 
        }
 
        return isValid;
 
     }

    onChangeHandler(event,id){
        
        let updatedControls = {
            ...this.state.controls
        }

        updatedControls[id].value = event.target.value;
        updatedControls[id].valid = this.checkValidation(updatedControls[id].value,updatedControls[id].validation);
        updatedControls[id].touched = true;

        let formIsValid = true;
        for(let key in this.state.controls)
        {
            formIsValid = updatedControls[key].valid && formIsValid;
        }

        this.setState({controls : updatedControls,formIsValid : formIsValid});
    }
    
    submitHandler = (event)=>{
        event.preventDefault();
        this.props.auth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignUp);
    }

    signUpHandler = (event)=>{
        event.preventDefault();
        this.setState(prevState=>{
            return{isSignUp : !prevState.isSignUp}
        })
    }

    render(){
        let formControls = [];
        for(let key in this.state.controls)
        {
            formControls.push({
                id : key,
                configProperty : this.state.controls[key]
            })
        }

        let errorMessage = null;
        if(this.props.error)
        {
            errorMessage = <p>{this.props.error.message}</p>
        }

        let redirect = null
        if(this.props.token)
        {
            if(this.props.purchaseAble)
            {
                redirect = <Redirect to="/checkout"/>
            }
            else{
                redirect = <Redirect to="/"/>
            }
        }

        return(
            <div className={classes.Auth}>
            {redirect}
            {errorMessage}
            <form >
                {formControls.map(element=>{
                    return <Input
                    errorMessage={element.configProperty.errorMessage}
                    touched={element.configProperty.touched}
                    valid={element.configProperty.valid}
                    key={element.id} 
                    elementConfig={element.configProperty.elementConfig}
                    elementType={element.configProperty.elementType}
                    value={element.configProperty.value}
                    onChange={(event)=>this.onChangeHandler(event,element.id)}/> 
                })
            }
                <button className={[classes.Button,classes.Success].join(' ')} onClick={this.submitHandler}>SUBMIT</button>
                <button className={[classes.Button,classes.Danger].join(' ')} onClick={this.signUpHandler}>{(this.state.isSignUp)?"SWITCH TO LOGIN": "SWITCH TO SIGNUP" }</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return{
        token : state.authReducer.token,
        error : state.authReducer.error,
        purchaseAble : state.burgerBuilderReducer.purchaseable
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        auth : (email,password,isSignUp)=>dispatch(actionTypes.auth(email,password,isSignUp))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Auth,axios));