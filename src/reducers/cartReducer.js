import {
     ADD_PRODUCT_TO_CART,
     REMOVE_PRODUCT_TO_CART,
     INCREMENT_CART_ITEM_QUANTITY,
     DECREMENT_CART_ITEM_QUANTITY,
     FETCH_CART
} from "../actions/Type";

const initialState = {
    cart:  [],
    items : []
};

export default function(state = initialState,action){
    const {type,payload} =  action;
  
    switch(type){

        case FETCH_CART:
           
            return {
                ...state,...payload
            };

        case ADD_PRODUCT_TO_CART:

            return {...state,cart:payload};

        case REMOVE_PRODUCT_TO_CART:
           
            return{...state,cart:payload};
            
        case DECREMENT_CART_ITEM_QUANTITY:
            
              return {...state,cart:payload};

        case INCREMENT_CART_ITEM_QUANTITY:
            
            return {...state,cart:payload};

        default:
            return state;
    }
}