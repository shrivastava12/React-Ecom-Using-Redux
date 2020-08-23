import { PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL
 } from "../actions/Type";


 const initialState =  {
     pending:true,
     products : [],
     product:null
 }

 export default function(state = initialState,action){
    const {type,payload} =  action;
    switch(type){
        case PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                products:payload,
                pending:false
            }

        case PRODUCT_LIST_FAIL:
            return {
                ...state,
                products:[],
                pending:true
            }
        
        case PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                product:payload,
                pending:false
            }

        case PRODUCT_DETAIL_FAIL:
            return {
                ...state,
                product:null,
                pending:true
            }
        default:
            return state;
    }
 }

