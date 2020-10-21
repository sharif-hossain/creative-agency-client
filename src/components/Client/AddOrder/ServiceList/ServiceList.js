import {  ListItem, Slider } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import DashHeader from '../../../Dashboard/DashHeader/DashHeader';
import Sidebar from '../../../Dashboard/Sidebar/Sidebar';
import ListCard from '../listItem/ListCard';


const ServiceList = () => {
    const [serviceList, setServiceList] = useState([])
    const [loggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('https://dry-savannah-42449.herokuapp.com/orderList?email=' + loggedInUser.email)
        .then(res => res.json())
        .then(data => setServiceList(data))
   },[loggedInUser.email])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-8">
                       <DashHeader></DashHeader> 
                            <div className="row">
                                {
                                    serviceList.map(list => <ListCard key={list._id} list={list}></ListCard>)
                                }
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;