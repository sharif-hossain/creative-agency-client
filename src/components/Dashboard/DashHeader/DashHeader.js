import React, { useContext } from 'react';
import { UserContext } from '../../../App';


const DashHeader = () => {
    const [loggedInUser, setLoggedInUser]  = useContext(UserContext)
    console.log(loggedInUser)
    return (
        <div>
            <div className="row my-3">
                <div className="col-md-4">
                <h3>Order</h3>
                </div>
                <div className="col-md-4 text-right">
                 <h5 className="d-inline-block ml-2 mb-0 text-right">{loggedInUser.name}</h5>
                </div>
            </div>
            
            
        </div>
    );
};

export default DashHeader;