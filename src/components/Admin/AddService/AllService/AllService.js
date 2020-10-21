import { Dropdown } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import DashHeader from '../../../Dashboard/DashHeader/DashHeader';
import Sidebar from '../../../Dashboard/Sidebar/Sidebar';
import './AllService.css'

const AllService = () => {
    const [services, setServices] = useState([])
    const [status, setStatus] = useState('Pending');
    const options = ['Pending', 'On going', 'Done'];
  console.log(services)
  useEffect(() => {
    fetch('http://dry-savannah-42449.herokuapp.com/allServices')
        .then(response => response.json())
        .then(data => {
            setServices(data);
        })
}, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <DashHeader></DashHeader>
                    <div className="table-area">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Project Details</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        services.map(service => <tr key={service._id}>
                                            <th scope="row">{service.name}</th>
                                            <td>{service.email}</td>
                                            <td>{service.serviceName}</td>
                                            <td>{service.projectDetail}</td>
                                            {/* <td><Dropdown options={options} onChange={setStatus} value={service.status} /></td> */}
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
            
        </div>
    );
};

export default AllService;