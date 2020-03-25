//Contact Data Reducer

import * as actionTypes from '../Actions/Actions'

const initialState = {
    requestProceed : true,
    orderPlaced : false,
    error : false
}

const contactData = (state = initialState , action) =>{
    switch(action.type)
    {
        case(actionTypes.Uploadorder) :
        {
            return{
                ...state,
                requestProceed : true,
                orderPlaced : true,
                error : false
            }
        }

        case(actionTypes.Requestproceed) :{
            return{
                ...state,
                requestProceed : false
            }
        }

        case(actionTypes.Orderplaced) :{
            return{
                ...state,
                orderPlaced : false
            }
        }

        case(actionTypes.Errorinuploading) :{
            return{
                ...state,
                error : true,
            }
        }

        default : 
        return state;
    }
}

export default contactData;