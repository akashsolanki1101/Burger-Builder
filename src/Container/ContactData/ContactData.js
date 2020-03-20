import React,{Component} from 'react'

import classes from './ContactData.module.css'
import axios from '../../axios-orders'
import Backdrop from '../../Components/Backdrop/Backdrop'
import Spinner from '../../Components/UI/Spinner/Spinner'
import Aux from '../../Components/hoc/Auxiliary' 
import Input from '../../Components/UI/Input/InputElement'

class ContactData extends Component {
    state = {
        orderForm : {
            name : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Your Name'
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
                    placeholder : 'Zip Code'
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
        orderplaced : true,
        ingredients : null,
        totalprice : null 
}

    orderHandler = (event)=>{
        event.preventDefault();
        let ingredients ={}
        
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
        
        this.setState({ placeOrder: false,orderplaced: false,ingredients : ingredients });        
        
        const order = {
        ingredients: ingredients,
        totalprice: this.props.ingredients.price,
        }

        axios
        .post("/orders.json", order)
        .then(response => {
            this.setState({ orderplaced: true });
        })
        .catch(error => {
            console.log(error);
        });
        
        if(this.state.orderplaced)
        {
            this.props.history.replace('/')
        }
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

        console.log(inputElement);

        return (
            <div className={classes.ContactData}>
                <h3>Enter your Contact Data</h3>
                <form >
                    {
                        inputElement.map(element=>{
                            return <Input
                            key={element.id} 
                            elementConfig={element.configProperty.elementConfig}
                            elementType={element.configProperty.elementType}
                            value={element.configProperty.value}/> 
                        })
                    }
                    <button className={[classes.Button,classes.Success].join(' ')} onClick={this.orderHandler}>ORDER</button>
                </form>

                {!this.state.orderplaced  
                    ?(
                      <Aux>
                        <Backdrop show={!this.state.orderplaced} />
                        <Spinner />
                      </Aux>
                    ) 
                    : null}

            </div>
        )
    }
}

export default ContactData;