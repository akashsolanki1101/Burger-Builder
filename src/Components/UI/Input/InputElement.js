import React from 'react'
import classes from './InputElement.module.css';

const input = (props)=>
{
    let validationError = null;
    let inputElement = null;
    let styleClasses = [classes.Input];
    if(!props.valid && props.touched)
    {
        validationError = <p className={classes.validationError}>{props.errorMessage}</p>
        styleClasses.push(classes.ValidationFeedback);
    }

    switch(props.elementType)
    {
        case("input") :
            inputElement = <input 
                onChange={props.onChange}
                className={styleClasses.join('')} 
                {...props.elementConfig}
                value={props.value}/>
            break;
        case("textarea") :
            inputElement = <textarea
                onChange={props.onChange} 
                className={styleClasses.join('')} 
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
            className={styleClasses.join('')} 
            {...props.elementConfig}
            value={props.value}/>
            break;
    }

    return (
        <div className={classes.InputElement}>
            {inputElement}
            {validationError}
        </div>
    )
}

export default input;