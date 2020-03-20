import React from 'react'
import classes from './InputElement.module.css';

const input = (props)=>
{
    console.log("Akash",props)
    let inputElement = null;

    switch(props.elementType)
    {
        case("input") :
            inputElement = <input 
                className={classes.Input} 
                {...props.elementConfig}
                value={props.value}/>
            break;
        case("textarea") :
            inputElement = <textarea 
                className={classes.Input}
                {...props.elementConfig}
                value={props.value}/>
            break;
        case("select") :
            inputElement =
            ( 
            <select 
                className={classes.Input}
                value={props.value}>
                {
                    props.elementConfig.options.map(option=>{
                        return <option 
                        value={option.value}
                        key={option.displayvalue}
                        >{option.displayvalue}</option>
                    }
                        )
                }
            </select>
            )
            break;
        default:
            inputElement = <input className={classes.Input}/>
            break;
    }

    return (
        <div className={classes.InputElement}>
            {inputElement}
        </div>
    )
}

export default input;