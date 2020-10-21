import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'

const Sidebar = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        
        fetch('https://dry-savannah-42449.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {email:loggedInUser})
           
        })
            .then(res => res.json())
            .then(result => {
                setIsAdmin(result)
            })
            console.log(loggedInUser)
    }, []);

    return (
        <div className="sidebar container my-2">
            <div className="sidebar-logo mb-3">
                <img style={{height:'50px'}} src={logo} className="img-fluid" alt="" />
            </div>
                {
                     !isAdmin && 
                    <div className="menu">
                    <Link to="/dashboard/addOrder" className="menu-item d-flex align-items-center mb-3">
                        
                        <a href className="mb-0 ml-2">Order</a>
                    </Link>
                    <Link to="/dashboard/ServiceList" className="menu-item d-flex align-items-center mb-3">
                        
                        <a href className="mb-0 ml-2">Service List</a>
                    </Link>
                    <Link to="/dashboard/Review" className="menu-item d-flex align-items-center mb-3">
                        
                        <a href className="mb-0 ml-2">Review</a>
                </Link>
                </div>
                }

                {
                     isAdmin && 
                    <div className="menu">
                    <Link to="/dashboard/AllService" className="menu-item d-flex align-items-center mb-3">
                        
                        <a href className="mb-0 ml-2">All Services</a>
                    </Link>
                    <Link to="/dashboard/addService" className="menu-item d-flex align-items-center mb-3">
                        
                        <a href className="mb-0 ml-2">Add Service</a>
                    </Link>
                    <Link to="/dashboard/make-admin" className="menu-item d-flex align-items-center mb-3">
                        
                        <p className="mb-0 ml-2">Make Admin</p>
                </Link>
                </div>
                }
        </div>
    );
};

export default Sidebar;