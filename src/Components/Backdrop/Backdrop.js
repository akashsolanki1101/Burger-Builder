import React from 'react'

import classes from './Backdrop.module.css'

const backdrop = (props)=>{
    let classees = [classes.Backdrop];
    if(!props.show)
    {
        classees.push(classes.Display);
    }
    return(
        <div className={classees.join(' ')}
              onClick={props.cancel}>
        </div>
    )
}

export default backdrop;