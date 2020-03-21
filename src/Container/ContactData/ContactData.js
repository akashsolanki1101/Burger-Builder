import React,{Component} from 'react'

import classes from './ContactData.module.css'
import axios from '../../axios-orders'
import Backdrop from '../../Components/Backdrop/Backdrop'
import Spinner from '../../Components/UI/Spinner/Spinner'
import Aux from '../../Components/hoc/Auxiliary' 
import Input from '../../Components/UI/Input/InputElement'
import Gif from '../../Components/UI/TickMark/TickMark'
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
                value : '',
                valid : true
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
                value : '',
                valid : true
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
                value : '',
                valid : true
                },

            zipcode : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Postal Code'
                },
                validation : {
                    required : true
                },
                value : '',
                valid : true
                },

            email : {
                elementType : 'input',
                elementConfig : {
                    type : 'email',
                    placeholder : 'Your E-Mail'
                },
                validation : {
                    required : true
                },
                value : '',
                valid : true
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
                valid : true
                }
        },
        placeOrder : false,
        requestProceed : true,
        orderplaced : false,
        ingredients : null,
        totalprice : null
    }

    checkValidation = ()=>{
        if()
    }

    onChangeHandler(event,id){
        
        let updatedOrderForm = {
            ...this.state.orderForm
        }

        let updatedConfig = {
            ...updatedOrderForm[id]
        }
        updatedConfig.value = event.target.value;
        updatedConfig.valid = 
        updatedOrderForm[id].value = updatedConfig.value;

        this.setState({orderForm : updatedOrderForm})
    }

    orderHandler = (event)=>{
        event.preventDefault();
        let ingredients ={}
        let ContactData = {}
        
        for(let ingredientname in this.props.ingredients)
        {
            if(ingredientname==="price")
            {
                this.setState({totalprice : this.props.ingredients[ingredientname]})
            }
            else
            {
                 ingredients[ingredientname] = this.props.ingredients[ingredientname]
            }
        }
        
        this.setState({ placeOrder: false,requestProceed: false,ingredients : ingredients });        
        
        for(let key in this.state.orderForm)
        {
            ContactData[key] = this.state.orderForm[key].value
        }

        console.log(ContactData);
        

        const order = {
        ingredients: ingredients,
        totalprice: this.props.ingredients.price,
        ContactData : ContactData
        }

        axios
        .post("/orders.json", order)
        .then(response => {
            this.setState({ requestProceed: true ,orderplaced : true});
        })
        .catch(error => {
            console.log(error);
        });
    }

    redirectToHome= ()=>{
        this.setState({orderplaced : false})
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

        return (
            <Aux>
            <div className={classes.ContactData}>
                <h3>Enter your Contact Data</h3>
                <form >
                    {
                        inputElement.map(element=>{
                            return <Input
                            key={element.id} 
                            elementConfig={element.configProperty.elementConfig}
                            elementType={element.configProperty.elementType}
                            value={element.configProperty.value}
                            onChange={(event)=>this.onChangeHandler(event,element.id)}/> 
                        })
                    }
                    <button className={[classes.Button,classes.Success].join(' ')} onClick={this.orderHandler}>ORDER</button>
                </form>

                {!this.state.requestProceed
                    ?(
                        <Aux>
                            <Backdrop show={!this.state.requestProceed} />
                            <Spinner />
                        </Aux>
                    ) 
                    : null
                }
                </div>
                {this.state.orderplaced
                    ?(
                        <Aux>
                            <Backdrop show={this.state.orderplaced} cancel={this.redirectToHome}/>
                            <Gif />
                        </Aux>
                    )
                    :null
                }

            
        </Aux>
        )
    }
}

export default ContactData;