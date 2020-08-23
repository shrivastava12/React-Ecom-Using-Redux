import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_TO_CART,
    INCREMENT_CART_ITEM_QUANTITY,
    DECREMENT_CART_ITEM_QUANTITY,
    FETCH_CART 

} from './Type';
import Axios from 'axios';
import { getToken } from './authAction';



export const fetchCart =  () => async(dispatch) => {
    const Token =  getToken();
    try{
        
        const options = {
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${Token}`
            }
        };
        await Axios.get('http://127.0.0.1:8000/api/ecom/cart/',options).then((response) => {
            
            console.log('response',response.data)
            dispatch({
                type:FETCH_CART,
                payload:response.data
            })
        }).catch(e => console.log(e))

    }catch(e){
        console.log(e)
    }
} 

export const addProductToCart = product =>async(dispatch) => {

    const Token =localStorage.getItem("token");
    console.log(Token)
    console.log('product for add',product);
    try{
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Token ${Token}`
            }
          };
        await Axios.post('http://127.0.0.1:8000/api/ecom/cart/',{
            product:product.id
        },options).then((response) => {
                console.log(response.data)
            return(
                dispatch({
                    type:ADD_PRODUCT_TO_CART,
                    payload:product
                })
            ) 
        })
    }catch(e){
        console.log(e)
    }
   
} 



export const incrementCartQuantity = productId => dispatch => {
    let quantity = 1;
    quantity = quantity + 1;
    console.log('Increament Item',productId);
    try{

        Axios.patch('http://127.0.0.1:8000/api/ecom/ordereditem//',{
            'quantity':'5'
        }).then((response) => {
            console.log(response.status);
        })

        return(
            dispatch({
                type:INCREMENT_CART_ITEM_QUANTITY,
                payload:productId
            })
        )
    }catch(e){
        console.log(e);
    }
};

export const decrementCartQuantity = productId => dispatch => {
    console.log('Decremented Item',productId);
    return(
        dispatch({
            type:DECREMENT_CART_ITEM_QUANTITY,
            payload:productId
        })
    )
}




export const updateQuantity = (id,quantity) => async(dispatch) => {
    
    const Token =localStorage.getItem("token");
    console.log('quantity for update',quantity);
    try{
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Token ${Token}`
            }
        }

        await Axios.patch(`http://127.0.0.1:8000/api/ecom/cart/${id}/`,{
            quantity:quantity
        },options).then((response) => {
            console.log('updated_data',response.data);
            dispatch(fetchCart())
        }).catch(e => console.log(e))

    }catch(e){
        console.log(e);
    }
}

export const removeProductToCart =  (id) => async(dispatch) =>{
    const Token =localStorage.getItem("token");
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Token ${Token}`
        }
    }
    console.log('id for delete',id);
    try{
        await Axios.delete(`http://127.0.0.1:8000/api/ecom/cart/${id}/`,options).then((response) => {
            console.log(response.status);
            dispatch(fetchCart());
        }).catch(e => console.log(e))
    }catch(e){
        console.log(e);
    }
}