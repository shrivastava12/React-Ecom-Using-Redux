import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


import {AiOutlineShoppingCart} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import { logout } from "../actions/authAction";


const Header =  ({isAuthenticated,logout}) => {

  const logoutSuccess = () => {
    logout();
  }

    return(
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">KapraBecho.com</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                  <Link className="nav-link" to='/'>Product<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                  <Link className="nav-link" to='checkout'><AiOutlineShoppingCart/><span className="sr-only">(current)</span></Link>
                    </li>
                  
                
                    </ul>
                  
                
                 <ul className="navbar-nav">
                   {
                     isAuthenticated ? (
                    <>  <li className="nav-item active">
                      <Link className="nav-link" to='/user/profile'><CgProfile/></Link>
                      </li>
                      <li className="nav-item active">
                      <Link className="nav-link" onClick={logout} >Logout</Link>
                      </li></>
                     ) : (
                       <>
                      <li className="nav-item active">
                      <Link className="nav-link" to='/login'>Login</Link>
                      </li>
                      <li className="nav-item active">
                      <Link className="nav-link " to='/signup'>Signup</Link>
                      </li></>
                     )
                   } 
                    
                   
                  </ul>
                    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
                
                </div>
            </nav>
    )
}

const mapStateToProps =  state => ({
    isAuthenticated:state.auth.isAuthenticated
});
export default connect(mapStateToProps,{logout})(Header)