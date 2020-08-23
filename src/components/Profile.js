import React from "react";
import UserProfile from "./UserProfile";
import UserOrders from "./UserOrders";



const Profile =  () => {

    return(

        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-lg-8">
                   <UserOrders/>
                </div>
                <div className="col-lg-4">
                <UserProfile/>
                </div>
            </div>
        </div>
    )

}

export default Profile;