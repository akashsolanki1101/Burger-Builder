//Contact Data Actions

import axios from '../../../../axios-orders'

export const Uploadorder = "UPLOAD_ORDER";
export const Requestproceed = "REQUEST_PROCEED";
export const Orderplaced = "ORDER_PLACED";
export const Errorinuploading = "UPLOADING_ERROR";

const orderUploadSuccess= ()=>{
    return {
        type : Uploadorder
    }
}

const orderUploadFailure = ()=>{
    return {
        type : Errorinuploading,
    }
}

export const placeOrder = (order,token)=>{
    return dispatch=>{
        axios
        .post("/orders.json?auth=" + token, order)
        .then(response => {
            dispatch(orderUploadSuccess())
        })
        .catch(error => {
            dispatch(orderUploadFailure())
        });
    }
}

export const requestProceed = ()=>{
    return{
        type : Requestproceed 
    }
}

export const orderPlaced  = ()=>{
    return{
        type : Orderplaced 
    }
}