import {
    ADD_PRODUCT_TO_CART,
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
        await Axios.get('https://kaprabecho.ml/api/ecom/cart/',options).then((response) => {
            
         
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
    
    try{
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Token ${Token}`
            }
          };
        await Axios.post('https://kaprabecho.ml/api/ecom/cart/',{
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






export const updateQuantity = (id,quantity) => async(dispatch) => {
    
    const Token =localStorage.getItem("token");
   
    try{
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Token ${Token}`
            }
        }

        await Axios.patch(`https://kaprabecho.ml/api/ecom/cart/${id}/`,{
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
        await Axios.delete(`https://kaprabecho.ml/api/ecom/cart/${id}/`,options).then((response) => {
            console.log(response.status);
            dispatch(fetchCart());
        }).catch(e => console.log(e))
    }catch(e){
        console.log(e);
    }
}