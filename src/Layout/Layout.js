import React from 'react'

import Aux from '../hoc/Auxiliary'
import Toolbar from '../Components/Navigation/Toolbar/Toolbar'
import BurgerBuilder from '../Container/BurgerBuilder/BurgerBuilder'
// import Modal from '../Components/Modal/Modal'
// import classes from './Layout.module.css'

const layout = ()=>(
    <Aux>
        <Toolbar />
        <BurgerBuilder />
    </Aux> 
)

export default layout;