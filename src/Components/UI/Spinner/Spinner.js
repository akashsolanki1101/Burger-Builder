import React from 'react'
import { FulfillingBouncingCircleSpinner } from 'react-epic-spinners'

import classes from './Spinner.module.css'
// import Aux from '../../hoc/Auxiliary';

const spinner  =()=> {
    return(
        <div className={classes.loader}>
            <FulfillingBouncingCircleSpinner color="#74FF54"/>
        </div>
    )
    
};

export default spinner;