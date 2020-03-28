import * as actionTypes from '../Actions/Actions'

const initialState = {
    token : null,
    userId : null,
    error : null,
    expiresIn : null,
    loading : false
}

const reducer = (state = initialState,action)=>{
    switch(action.type)
    {
        case(actionTypes.AUTH_START):
        {
            return {
                ...state,
                loading : true
            }
        }

        case(actionTypes.AUTH_SUCCESS):
        {
            return {
                ...state,
                token : action.token,
                userId : action.userId,
                expiresIn : action.expiresIn,
                loading : false,
                error : null
            }
        }

        case(actionTypes.AUTH_FAIL):
        {
            return{
                ...state,
                error : action.error,
                loading : false
            }
        }

        case(actionTypes.LOG_OUT):
        {
            return{
                ...state,
                token : null,
                userId : null,
                expiresIn : null,
                loading : false,
                error : null
            }
        }

        default : 
            return state;

    }
}

export default reducer; 

