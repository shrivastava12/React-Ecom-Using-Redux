import React from "react";
import { connect } from "react-redux";
import { removeProductToCart, incrementCartQuantity, decrementCartQuantity, fetchCart } from "../actions/cartAction";

const Cart =  ({cart,removeProductToCart,incrementCartQuantity,decrementCartQuantity,fetchCart}) => {
    return(
        <div className="container">
            <div>
                {
                    cart.map((item) => (
                        <div Key={item.id}>
                            <p>ProductName: {item.name} ProductPrice: {item.price}
                            itemquantity: {item.quantity}
                            </p>
                            <button onClick={() => removeProductToCart(item.id)}>Remove</button>
                            <button onClick={() => incrementCartQuantity(item.id)}>Increament</button>
                            <button onClick={() => decrementCartQuantity(item.id)}>Decrement</button>
                            <button onClick={fetchCart} >Fetchdata</button>
                        </div>
                    ))
                } 

            </div>
        </div>
    )
}
const mapStateToProps =  state => ({
    cart:state.cartReducer.cart
})
export default connect(mapStateToProps,{removeProductToCart,incrementCartQuantity,decrementCartQuantity,fetchCart})(Cart)