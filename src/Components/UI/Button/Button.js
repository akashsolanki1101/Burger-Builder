import React from 'react'
import classes from './Button.module.css'


const button = (props)=>{
    console.log(props.class)
    return (
        <button className={[classes.props.class,classes.Button].join(' ')}>{props.children}</button>

    )
}

export default button;