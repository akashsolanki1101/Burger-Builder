import React from 'react'
import classes from './InputElement.module.css';

const input = (props)=>
{
    let inputElement = null;

    switch(props.elementType)
    {
        case("input") :
            inputElement = <input 
                onChange={props.onChange}
                className={classes.Input} 
                {...props.elementConfig}
                value={props.value}/>
            break;
        case("textarea") :
            inputElement = <textarea
                onChange={props.onChange} 
                className={classes.Input}
                {...props.elementConfig}
                value={props.value}/>
            break;
        case("select") :
            inputElement =
            ( 
            <select
                onChange={props.onChange}
                className={classes.Select}
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
            inputElement = <input 
            onChange={props.onChange}
            className={classes.Input}
            {...props.elementConfig}
            value={props.value}/>
            break;
    }

    return (
        <div className={classes.InputElement}>
            {inputElement}
        </div>
    )
}

export default input;