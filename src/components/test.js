import React from "react";
import '../App.css'
const test =  () => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mt-5 border">
                    <div className="row">
                        <div className="col-lg-2 ">
                        <img className="img-thumbnail" width="80" src="http://127.0.0.1:8000/media/images/coin.jpg"/>
                        </div>
                        <div className="col-lg-2">
                        <h2>Name</h2>
                      </div>
                        <div className="col-lg-2 ">
                        <h2>price</h2>
                        </div>
                        <div className="col-lg-2 ">
                        <h2>quantity</h2>
                        </div>
                        <div className="col-lg-3 ">
                        <h2>total price</h2>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <h2>dsdgdfg</h2>
                </div>
            </div>
        </div>
    )
}

export default test;