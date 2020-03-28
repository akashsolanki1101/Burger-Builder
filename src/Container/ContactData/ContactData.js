import React,{Component} from 'react'

import classes from './ContactData.module.css'
import axios from '../../axios-orders'
import Backdrop from '../../Components/Backdrop/Backdrop'
import Spinner from '../../Components/UI/Spinner/Spinner'
import Aux from '../../Components/hoc/Auxiliary' 
import Input from '../../Components/UI/Input/InputElement'
import Gif from '../../Components/UI/TickMark/TickMark'
import {connect} from 'react-redux'
import * as actionTypes from './store/Actions/Actions'
import WithErrorHandler from '../../Components/hoc/withErrorHandler/withErrorHandler'


class ContactData extends Component {
    state = {
        orderForm : {
            name : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Your Full Name'
                },
                validation : {
                    required : true
                },
                errorMessage : 'Please Enter Valid Name',
                value : '',
                valid : false,
                touched : false,
            },

            country : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Country'
                },
                validation : {
                    required : true
                },
                errorMessage : 'Please Enter Valid Country Name',
                value : '',
                valid : false,
                touched : false,
            },

            street : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Your Street'
                },
                validation : {
                    required : true
                },
                errorMessage : 'Please Enter Valid Street Name',
                value : '',
                valid : false,
                touched : false,
                },

            zipcode : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Postal Code'
                },
                validation : {
                    required : true,
                    minlength : 6,
                    maxlength : 6,
                    isNumeric : true
                },
                errorMessage : 'Please Enter Valid 6 Digit Postal Code',
                value : '',
                valid : false,
                touched : false,
                },

            email : {
                elementType : 'input',
                elementConfig : {
                    type : 'email',
                    placeholder : 'Your E-Mail',
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

            deliverymode : {
                elementType : 'select',
                elementConfig : {
                    options : [
                        {value : 'fastest' , displayvalue  : 'Fastest'},
                        {value : 'cheapest' , displayvalue  : 'Cheapest'}
                ]
                },
                validation : {
                    required : true
                },
                value : 'Fastest',
                valid : 'true'
                }
        },
        placeOrder : false,
        requestProceed : true,
        orderplaced : false,
        formIsValid : false
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
       
       if(rules.maxlength)
       {
           isValid = (value.length <= rules.maxlength) && isValid;
       }

       if(rules.isEmail)
       {
           const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
           isValid = pattern.test(value) && isValid;

       }
       
       if(rules.isNumeric)
       {
           const pattern = /^\d+$/ ;
           isValid = pattern.test(value) && isValid;
       }

       return isValid;

    }

    onChangeHandler(event,id){
        
        let updatedOrderForm = {
            ...this.state.orderForm
        }

        let updatedConfig = {
            ...updatedOrderForm[id]
        }
        updatedConfig.value = event.target.value;
        updatedConfig.valid = this.checkValidation(updatedConfig.value,updatedConfig.validation ) 
        updatedConfig.touched = true;
        updatedOrderForm[id] = updatedConfig;

        let formIsValid = true;
        for(let key in this.state.orderForm)
        {
            formIsValid = formIsValid && updatedOrderForm[key].valid;
        }
        this.setState({orderForm : updatedOrderForm,formIsValid : formIsValid})
    }

    orderHandler = (event)=>{
        event.preventDefault();
        let ContactData = {}
                
        this.setState({ placeOrder: false});
        this.props.requestProceedHandler()
        
        for(let key in this.state.orderForm)
        {
            ContactData[key] = this.state.orderForm[key].value
        }

        const order = {
        ingredients: this.props.ingredients,
        totalPrice: this.props.price,
        contactData : ContactData,
        userId : this.props.userId
        }

        this.props.placeOrder(order,this.props.token)
    }

    redirectToHome= ()=>{
        this.props.orderPlacedHandler();
        this.props.history.replace('/')
    }

    render(){
        let inputElement = [];
        for(let key in this.state.orderForm)
        {
            inputElement.push({
                id : key,
                configProperty : this.state.orderForm[key]
            })
        }

        let orderConfirmationMessage = null;

        if(this.props.orderPlaced)
        {
            orderConfirmationMessage = <div><Backdrop show={this.props.orderPlaced} cancel={this.redirectToHome}/>
                <Gif /></div>
        }

        return (
            <Aux>
            <div className={classes.ContactData}>
                <h3>Enter your Contact Data</h3>
                <form >
                    {
                        inputElement.map(element=>{
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
                    <button disabled={!this.state.formIsValid} className={classes.Button} onClick={this.orderHandler}>ORDER</button>
                </form>
                </div>
                
                {!this.props.requestProceed
                    ?(
                        <Aux>
                            <Backdrop show={!this.props.requestProceed} />
                            <Spinner />
                        </Aux>
                    ) 
                    : null
                }
                <div>
                    {orderConfirmationMessage}
                </div>
        </Aux>
        )
    }
}


const mapStateToProps = state =>{
    return{
        ingredients : state.burgerBuilderReducer.ingredients,
        price : state.burgerBuilderReducer.totalPrice,
        requestProceed : state.contactDataReducer.requestProceed,
        orderPlaced : state.contactDataReducer.orderPlaced,
        error : state.contactDataReducer.error,
        token : state.authReducer.token,
        userId : state.authReducer.userId
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        placeOrder : (order,token)=>dispatch(actionTypes.placeOrder(order,token)),
        requestProceedHandler : ()=>dispatch(actionTypes.requestProceed()),
        orderPlacedHandler : ()=>dispatch(actionTypes.orderPlaced())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(ContactData,axios));