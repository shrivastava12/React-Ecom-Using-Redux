import React, { useState, useEffect } from "react";
import { createOrder } from "../actions/orderAction";
import { connect } from "react-redux";
import { fetchCart } from "../actions/cartAction";
import { Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast,ToastContainer } from 'react-toastify';


const Order =  ({createOrder,fetchCart,items,total_price}) => {
    
    useEffect(() => {
        fetchCart();
    })


    const [fullName,setFullName] = useState('');
    const [phoneNumber,setPhoneNumber] =  useState('');
    const [pinCode,setPinCode] = useState('');
    const [city,setCity] =  useState('');
    const [state,SetState] = useState('');


    
    const order = {
        reciver: {
            full_name: fullName,
             phone_number: phoneNumber,
             address:`state ${state} city ${city} zipcode ${pinCode}`
           },
           purchase_invoice: "true"
    }
    

   
    const handleOnSubmit = e => {
        e.preventDefault();
        if(items.length > 0){
           
            createOrder(order);
            toast('Ordered SuccessFully',{
                type:'info'
            })
    
        }else{
            toast('Please Add Item to the cart',{
                type:'warning'
            })
        }
       
    }

    

    return(
        
        <div className="container mt-5">
            <ToastContainer/>
            <div className="row ">
                <div className="col-lg-8 p-4 border">
                    <h2 className="text-center billing">Billing Address</h2>
                    <div>
                        <form onSubmit={handleOnSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input value={fullName} onChange={(e) => setFullName(e.target.value)}
                                     type="text" placeholder="Enter your Full Name" id="fullName" className="form-control" required />
                                </div>

                               

                            </div>
                            <div className="form-group">
                                    <label htmlFor="phoneNo">Phone No</label>
                                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                                     type="text" placeholder="Enter your phone no" id="phoneNo" className="form-control" required />
                            </div>
                            <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity">City</label>
                                        <input value={city} onChange={(e) => setCity(e.target.value)}
                                         type="text" className="form-control"
                                        placeholder="Enter your city name" id="inputFor" required />

                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="state">State</label>
                                        <input
                                        value={state} onChange={(e) => SetState(e.target.value)}
                                        type="text"
                                        placeholder="Enter your state"
                                        id="state"
                                        className="form-control" required
                                        />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputZip">Zip Code</label>

                                        <input value={pinCode} onChange={(e) => setPinCode(e.target.value)} type="text" className="form-control" 
                                        placeholder="Zip Code"
                                        id="inputZip"
                                        required
                                        />
                                    </div>
                                </div>

                                <button type="submit"  className="form-control btn-success">CheckOut</button>
                        </form>
                    </div>
                </div>


                <div className="col-lg-4 p-4 border">
                    <h2 className="text-center billing">Cart Summery</h2>
                    <div>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            
                            </tr>
                        </thead>
                        <tbody>

                            {
                                items.map((item) => (
                                    <tr key={item.id}>
                                    <th scope="row">{item.product.name}</th>
                                <td>${item.total_price}</td>
                                    
                                    </tr>
                                ))
                            }
                           
                        
                        </tbody>
                     </table>



                     <table class="table">
                        <thead>
                            <tr className="tab">
                            <th scope="col">Total</th>
                        <th scope="col">${total_price}</th>
                            
                            </tr>
                        </thead>
                        
                       
                     </table>


                    </div>
                </div>
            </div>
        </div>
     
    )
}

const mapStateToProps =  state => ({
    items:state.cartReducer.items,
    total_price:state.cartReducer.total_price
})

export default connect(mapStateToProps,{createOrder,fetchCart})(Order);