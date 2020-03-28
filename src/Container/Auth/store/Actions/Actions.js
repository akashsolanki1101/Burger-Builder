import axios from 'axios'

export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const LOG_OUT = "LOG_OUT";
export const AUTH_STATUS = "AUTH_STATUS";

const authStart = ()=>{
    return {
        type : AUTH_START
    }
}

const authSuccess = (token,expirationTime,userId)=>{
    return{
        type : AUTH_SUCCESS,
        token : token,
        expiresIn : expirationTime,
        userId : userId
    }
}

const authFail = (error)=>{
    return{
        type : AUTH_FAIL,
        error : error
    }
}

export const logOut = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    return{
        type : LOG_OUT
    }
}

const sessionTimeout = (timeOut)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(logOut())
        },timeOut*1000)
    }
}

export const auth = (email,password,isSignUp)=>{
    let authData = {
        email : email,
        password : password,
        returnSecureToken : true
    }
    console.log(isSignUp);
    let base = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASsI_PIT16KSCxzomP1WBfi7D8N7Vyb5I";
    if(!isSignUp)
    {
        base = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyASsI_PIT16KSCxzomP1WBfi7D8N7Vyb5I";
    }
    return dispatch =>{
        dispatch(authStart());
        axios.post(base,authData)
        .then(response=>{
            let expirationDate = new Date(new Date().getTime() + response.data.expiresIn*1000)
            localStorage.setItem('token',response.data.idToken)
            localStorage.setItem('expirationDate',expirationDate)
            localStorage.setItem('userId',response.data.localId)
            console.log(response);
            dispatch(authSuccess(response.data.idToken,response.data.expiresIn,response.data.localId));
            dispatch(sessionTimeout(response.data.expiresIn))
        })
        .catch(error=>{
            console.log(error)
            dispatch(authFail(error));
        })
    }
}


export const checkAuthStatus = ()=>{
    return dispatch =>{
        let token = localStorage.getItem('token');
        if(!token)
        {
            dispatch(logOut());
        }
        else{
            let userId = localStorage.getItem('userId');
            let expirationTime = new Date(localStorage.getItem('expirationDate'));
            expirationTime = (expirationTime.getTime - new Date().getTime) / 1000;
            if(expirationTime>0){
                dispatch(authSuccess(token,expirationTime,userId))
                dispatch(sessionTimeout(expirationTime))
            }
            else{
                dispatch(logOut())
            }
        }
    }
} 