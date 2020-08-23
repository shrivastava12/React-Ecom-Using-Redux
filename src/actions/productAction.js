import { PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL
 } from "../actions/Type";
import Axios from "axios";

 export const getAllProduct = () => async(dispatch) => {

    try{
        Axios.get('http://127.0.0.1:8000/api/ecom/product/').then((res) => {
            console.log('product',res.data)
            dispatch({
                type:PRODUCT_LIST_SUCCESS,
                payload:res.data
            })
        })
    }catch(e){
        console.log(e);
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:e
        })
    }

 }

 export const getSingleProduct =  async(id) => dispatch => {
     try{
         Axios.get(`http://127.0.0.1:8000/api/ecom/product/${id}/`).then((res) => {
             console.log(res.data);
             dispatch({
                 type:PRODUCT_DETAIL_SUCCESS,
                 payload:res.data
             })
         }).then((err) => {
             console.log(err);
             dispatch({
                 type:PRODUCT_DETAIL_FAIL,
                 payload:err
             })
         })
     }catch(e){
         console.log(e);
     }
 }