import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCart, updateQuantity, removeProductToCart } from "../actions/cartAction";
import {AiFillDelete} from 'react-icons/ai';

import '../App.css';
import { Link } from "react-router-dom";


const CheckOut = ({fetchCart,updateQuantity,removeProductToCart,items,total_price}) => {
    useEffect(() => {
        fetchCart();
    },[fetchCart])

    const increamentQuantity = (id,quantity) => {
        quantity =  quantity + 1;
        updateQuantity(id,quantity);
    }

    const decreamentQuantity = (id,quantity) => {
        quantity =  quantity - 1;
        if(quantity >= 1){
            updateQuantity(id,quantity);
        }
    }

  

    return(
        <div className="container">
            <div className="">
            <table className="table mt-5 border">
                <thead>
                    <tr>
                        
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">   <img className="img-thumbnail" alt="imagdfsde" height="50" width="50" src={item.product.image}  /></th>
                          
                            <td>
                                {item.product.name}
                            </td>
                            <td>
                                ${item.product.price}
                            </td>
                            <td>
                        <button onClick={() => increamentQuantity(item.id,item.quantity)}>+</button><span className="test3">{item.quantity}</span>
                                <button onClick={() => decreamentQuantity(item.id,item.quantity)}>-</button>
                            </td>
                            <td>
                                ${item.total_price}
                            </td>
                            <td onClick={() => removeProductToCart(item.id)}>
                            <AiFillDelete/>
                            </td>
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>
            </div>
            <div className="row">
                    <div className="col-lg-8">
                        
                    </div>
                    <div className="col-lg-4 ">
                       <div className="mt-3 test border">
                <p className="text-center mt-3" >Total Price <span className="ml-5">${total_price}</span></p>
                       </div>
                       <div className="border text-center test1">
                            <Link className="btn" to='/order'>Order Now</Link>
                       </div>
                         
                    </div>
            </div>
            

        </div>
    )

}

const mapStateToProps =  state => ({
    items : state.cartReducer.items,
    total_price : state.cartReducer.total_price
})

export default connect(mapStateToProps,{fetchCart,updateQuantity,removeProductToCart})(CheckOut);

