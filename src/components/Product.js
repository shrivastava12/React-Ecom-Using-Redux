import React, { useEffect } from 'react';
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
        
       <div className="row mb-5">
  {
                products.map((product) => (
                    <div key={product.id} className="col-lg-4 mt-5">
                         <div className="card">
            <img className="card-img-top img-thumbnail" alt="imagename" src={product.image} />
            <div className="card-body">
            <div className="d-flex justify-content-start">
            <h5 className="card-title">{product.name}
                <span className="card-text ml-3">${product.price}</span>
            </h5>
              
            </div>
                
            <div className="d-flex justify-content-end">
            <button 
                onClick={() => addtocart(product)}
             className="btn btn-secondary">Add to Cart</button>
             
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
