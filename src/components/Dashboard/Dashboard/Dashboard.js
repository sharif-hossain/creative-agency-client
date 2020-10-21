import React from 'react';
import AddService from '../../Admin/AddService/AddService';
import AddOrder from '../../Client/AddOrder/AddOrder';
import DashHeader from '../DashHeader/DashHeader';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                 <div className="col-md-8">
                        <DashHeader></DashHeader>
                        <AddOrder></AddOrder>

                </div>
            </div>
            </div>
        </section>
    );
};

export default Dashboard;