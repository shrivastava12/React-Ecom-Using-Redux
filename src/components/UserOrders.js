import React from "react";
import "../App.css"
import { fetchOrder} from "../actions/orderAction";
import { connect } from "react-redux";
import { useEffect } from "react";


const UserOrders = ({fetchOrder,items}) => {

    useEffect(() => {
        fetchOrder();
    },[fetchOrder])
    return(
        <div className="border p-4">
            <div className="text-center billing mb-2">
                <h2>Order Summary</h2>
            </div>
            {
                items.map((item) => (
                    <div key={item.id} className="card mb-2 p-4">

                    <div class="d-flex bg-success text-white">
                        <div class="p-2">Shipping status</div>
                <div class="ml-auto p-2 bg-secondary">{item.shipping_status}</div>
                    </div>
                        
                        <div className="bg-light p-4">
                <p>Order Id   : <span className="ml-5">{item.id}</span></p>
                <p>Total Item <span className="ml-5">{item.items_count}</span></p>
                <p>Total Price <span className="ml-5">{item.total_price}</span></p>
                            <div class="d-flex ">
                <div class="">Ordered Date <span className="ml-4">{item.created_at}</span></div>
                        
                    </div>
                        </div>
                       
                    
                    </div>
                ))
            }
           
        </div>
    )

}

const mapStateToProps =  state => ({
    items:state.orderReducer.items
})

export default connect(mapStateToProps,{fetchOrder})(UserOrders);