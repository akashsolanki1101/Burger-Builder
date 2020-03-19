import React,{Component} from 'react'

import classes from './ContactData.module.css'
import axios from '../../axios-orders'
import Backdrop from '../../Components/Backdrop/Backdrop'
import Spinner from '../../UI/Spinner/Spinner'
import Aux from '../../hoc/Auxiliary' 

class ContactData extends Component {
    state = {
        name : "",
        email : "",
        address : {
            street : "",
            postalcode : ""
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
        address: {
            name: "max",
            number: 123,
            city: "local",
            country: "India"
        },
        delivery_method: "fastest"
        };
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
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact-Data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name" required/>
                    <input type="email" name="email" placeholder="Mail" required/>
                    <input type="text" name="street" placeholder="Street" required/>
                    <input type="text" name="postalcode" placeholder="Postal Code" required/>
                    <button className={[classes.Button,classes.Success].join(' ')} onClick={this.orderHandler}>Order</button>
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