import { CREATE_ORDER, FETCH_ORDER } from "../actions/Type";

const initialState = {
    items:[]
}

export default function(state = initialState ,action){
    const {type,payload} =  action;

    switch(type){
        case CREATE_ORDER:
        return {
            ...state,payload
        }

        case FETCH_ORDER:
            return{
                ...state,items:payload
            }

        default:
            return state
    }
}