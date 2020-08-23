import React,{useState} from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/authAction";


const Login =  ({login,isAuthenticated}) => {
    const [username,setUsername] =  useState('');
    const [password,setPassword] = useState('');

    const onSubmit =  e => {
        e.preventDefault();
        login(username,password)
    }

    if(isAuthenticated){
        return <Redirect to='/'/>
    }

    return(
       
        <div className="d-flex mb-5 mt-5 justify-content-center">
        <div className="container  bg-dark">
        <div className="card mt-5 mr-5 ml-5 mb-5">
            <div className="card-body border ">
            <div className="card-title login text-center">Login</div>
        <form onSubmit={e=>onSubmit(e)} >
             <div className="form-group">
                 <label htmlFor="exampleInputEmail1">Enter your User name</label>
                 <input type="text" name='username' value={username} onChange={e => setUsername(e.target.value)}   className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
             
             </div>
             <div className="form-group">
                 <label htmlFor="exampleInputPassword1">Password</label>
                 <input  type="password" value={password} name='password' onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
             </div>
             
             <button type="submit" className=" form-control btn  btn-success">Submit</button>
          </form>
          
             
         </div>
        </div>
        </div>
    </div>
    

   
    )
}

const mapStateToProps =  state => ({
    isAuthenticated:state.auth.isAuthenticated
});
export default connect(mapStateToProps,{login})(Login);
