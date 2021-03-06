import React from 'react'

import Aux from '../Auxiliary'
import Toolbar from '../../Navigation/Toolbar/Toolbar'

const layout = (props)=>(
    <Aux>
        <Toolbar />
        {props.children}
    </Aux> 
)

export default layout;