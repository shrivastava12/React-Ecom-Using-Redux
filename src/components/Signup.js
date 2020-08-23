import React,{useState} from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../actions/authAction";

const Signup =  ({register,isAuthenticated}) => {

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onSubmit =  e => {
        e.preventDefault();
        register(username,email,password);
        console.log(username)
    }

    if(isAuthenticated){
        return <Redirect to='/'/>
    }

    return(
        <div className="d-flex mb-5 mt-5 justify-content-center">
        <div className="container bg-dark">
        <div className="card mt-5 mr-5 ml-5 mb-5">
            <div className="card-body border mt-5 mr-5 ml-5 mb-5">
            <div className="card-title text-center login">SignUp</div>
            
                 
             <form onSubmit={e=>onSubmit(e)} >
             <div className="form-group">
                 <label htmlFor="exampleInputEmail1">Enter your User name</label>
                 <input type="text" name='username' value={username} onChange={e => setUsername(e.target.value)}   className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
             
             </div>
             <div className="form-group">
                 <label htmlFor="exampleInputEmail2">Enter your Email</label>
                 <input type="email" name='email' value={email} onChange={e => setEmail(e.target.value)}   className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
             
             </div>
             <div className="form-group">
                 <label htmlFor="exampleInputPassword1">Password</label>
                 <input  type="password"
                 value={password} 
                 name='password' onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
             </div>
             
             <button type="submit" className="btn form-control btn-success">Submit</button>
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
export default connect(mapStateToProps,{register})(Signup);