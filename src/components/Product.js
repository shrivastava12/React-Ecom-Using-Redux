import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProduct } from '../actions/productAction';

import { connect } from 'react-redux';
import { addProductToCart } from '../actions/cartAction';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

const Product = ({isAuthenticated,getAllProduct,products,addProductToCart}) => {

    useEffect(() => {
        getAllProduct();
    },[getAllProduct])

    const addtocart =  (product) => {
        addProductToCart(product);
        if(isAuthenticated){
            toast('added to cart',{
                type:"success"
            })
        }else{
            toast('Login/SignUp please',{
                type:"error"
            })
        }
       
    }

    return(
        
       <div className="row  mb-5">
  {
                products.map((product) => (
                    <div key={product.id} className="col-lg-4 mt-5">
                         <div class="card">
            <img class="card-img-top img-thumbnail" src={product.image} alt="Card image cap"/>
            <div class="card-body">
            <div class="d-flex justify-content-start">
            <h5 class="card-title">{product.name}
                <span className="card-text ml-3">${product.price}</span>
            </h5>
              
            </div>
                
            <div class="d-flex justify-content-end">
            <button 
                onClick={() => addtocart(product)}
             class="btn btn-secondary">Add to Cart</button>
             
            </div>
          
           
            </div>
            </div>
        </div>
                ))
            }
       </div>
          
           
    )
}
const mapStateToProps = state => ({
    products:state.productReducer.products,
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{getAllProduct,addProductToCart})(Product)
