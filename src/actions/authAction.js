import {
    LOGIN_FAIL
    ,LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS
} from './Type';
import Axios from 'axios';


export const register =  (username,email,password) => async(dispatch) => {
   try{
     Axios.post('http://127.0.0.1:8000/api/account/auth/register',{
        username:username,
        email:email,
        password:password
    }).then((res) => {
       
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
    }).catch(e => console.log('error',e))
   }catch(e){
        console.log(e);
        dispatch({
            type:REGISTER_FAIL,
            payload:e
        })
   }
}


export const login = (username,password) =>async(dispatch) =>{
    try{
        await Axios.post('http://127.0.0.1:8000/api/account/auth/login',{
            username:username,
            password:password
        }).then((res) => {
            console.log(res);
            dispatch({
                type:LOGIN_SUCCESS,
                payload:res.data
            })
        }).catch(e => console.log(e))
    }catch(e){
        console.log(e);
        dispatch({
            type:LOGIN_FAIL,
            payload:e
        })
    }
}



export const logout = () => async(dispatch) => {

    const Token = sessionStorage.getItem('token');
    await fetch('http://127.0.0.1:8000/api/account/auth/logout',{
        method:"POST",
        headers:{
            "Content-type": "application/json; charset=UTF-8",
            'Authorization':`Token ${Token}`
        }
    }).then(response => response.data).then((json) => {
        console.log('test',json)
        window.location.reload();
     
        dispatch({
            type:LOGOUT_SUCCESS,
            payload:json
        })
    })

}

export const getToken = () => {
    const Token = localStorage.getItem('token');
    return Token;
}
