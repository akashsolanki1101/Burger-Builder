import React from 'react'

import Aux from '../Auxiliary'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import BurgerBuilder from '../../Container/BurgerBuilder/BurgerBuilder'

const layout = ()=>(
    <Aux>
        <Toolbar />
        <BurgerBuilder />
    </Aux> 
)

export default layout;