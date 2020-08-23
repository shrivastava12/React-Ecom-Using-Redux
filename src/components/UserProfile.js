import React from "react";
import { connect } from "react-redux";

const UserProfile =  ({user}) => {


    return(
        <div className="border">
            <div className="card">
                <img className="card-img-top" height="200" src="https://picsum.photos/200" alt="user"/>
                <div className="card-body text-center">
                    <h5 className="card-title text-center">
                        {user.username}
                    </h5>
    <p className="card-text">Email address :  {user.email}</p>
                </div>
            </div>

        </div>
    )

}

const mapStateToProps =  state => ({
    user:state.auth.user || ''
})

export default connect(mapStateToProps,null)(UserProfile);