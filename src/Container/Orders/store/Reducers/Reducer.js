import * as actionTypes from '../Actions/Actions'

const initialStore ={
    orders : [],
    loading : true
}

const orderReducer = (state = initialStore , action) =>{
    switch(action.type)
    {
        case(actionTypes.Loadorders) :
        {
            return {
                ...state,
                orders : action.orders,
                loading : action.loadingValue 
            }
        }

        default : 
        return state
    }
}

export default orderReducer;
