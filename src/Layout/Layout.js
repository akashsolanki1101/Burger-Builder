import React from 'react'
// import classes from './Layout.module.css'
import Aux from '../hoc/Auxiliary'
import Toolbar from '../Components/Navigation/Toolbar/Toolbar'
import Burger from '../Components/Burger/BurgerBuilder'

const layout = ()=>(
    <Aux >
        <Toolbar />
        <Burger />        
        <div>Burger Contents</div>
    </Aux> 
)

export default layout;