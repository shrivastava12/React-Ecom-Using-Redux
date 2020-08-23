import React from "react";
import Product from "./Product";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify"
import '../App.css'
const Home =  () => {
    return(
        <div className="container-fluid p-5 home ">
             <ToastContainer/>

           <div className="container  ">

           <Product/>
           </div>
           
        </div>
    )
}

export default Home;