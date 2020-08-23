import { CREATE_ORDER, FETCH_ORDER } from "./Type";
import Axios from "axios";


export const createOrder = (order) => async(dispatch) => {

    const Token = localStorage.getItem('token');
    await fetch('https://www.kaprabecho.ml/api/ecom/orders/',{
        method:"POST",
        body:JSON.stringify(order),
        headers:{
            "Content-type": "application/json; charset=UTF-8",
            'Authorization':`Token ${Token}`
        }
    }).then(response => response.json()).then((json) => {
        console.log('test',json)
        dispatch({
            type:CREATE_ORDER,
            payload:json
        })
    })

}

export const fetchOrder =  () => async(dispatch) => {
    const Token = localStorage.getItem('token');

    try{
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Token ${Token}`
            }
          };
          await Axios.get('https://www.kaprabecho.ml/api/ecom/orders/',options).then((response) => {
              console.log(response.data);
              dispatch({
                  type:FETCH_ORDER,
                  payload:response.data
              })
          }).catch(e => console.log(e))
    }catch(e){
        console.log(e)
    }
}
