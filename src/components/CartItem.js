import React from "react";
import { connect } from "react-redux";

const CartItem =  ({ items_count}) => {
    return(
        <div>
            { items_count}
        </div>
    )
}
const mapStateToProps =  state => ({
    items_count:state.cartReducer.items_count
})
export default connect(mapStateToProps,{})(CartItem);