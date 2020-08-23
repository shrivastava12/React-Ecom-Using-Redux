import { LOGIN_FAIL
    ,LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS
 } from "../actions/Type";

const initialState =  {
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    user:null
};

export default function(state = initialState,action) {
    const {type,payload} =  action;
    switch(type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token',payload.token);
            localStorage.setItem('user',JSON.stringify(payload.user))

            return {
                ...state,
                token:payload.token,
                isAuthenticated:true,
                user:payload.user
            };
        
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:

            return{
                ...state,
                isAuthenticated:false,
                user:localStorage.removeItem('user'),
                token:localStorage.removeItem('token')
            }

        default:
            return state;
    }
}