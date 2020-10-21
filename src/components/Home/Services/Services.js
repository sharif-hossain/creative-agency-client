import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GetService from '../GetService/GetService';


const Services = () => {
   let history =  useHistory()
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/getServices')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            console.log(data)
        })
        
    },[])

    const handleClick=(id)=>{
        history.push('/dashboard/addOrder/' +id)
    }
    return (
        <section>
            <div className="text-center mb-5">
                <h2>Provide awesome <span style={{color:'green'}}>services</span> </h2>
            </div>
            <div className="container">
            <div className="row mb-5">
                {
                    services.map(item => <GetService key = {item._id} item={item} handleClick={handleClick}></GetService>)
                }
            </div>
            </div>
        </section>
    );
};

export default Services;