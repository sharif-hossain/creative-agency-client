import React, { useEffect, useState } from 'react';
import logo from '../../../../images/logos/logo.png'

const ListCard = ({list}) => {
console.log(list)
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/getOrderId?id=' + list.orderId)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className="col-md-6 col-sm-12" >
            <div class="card  mb-4">
                {/* <img src={logo} alt=""/> */}
                <div className="row">
                    <div className="col-md-3">
                       <img  className="ml-5 text-left" style={{height:'80px', width:'80px',borderRadius:'50%'}} src={`http://localhost:5000/${service.image}`} class="card-img-top" alt="..."/>
                    </div>
                    <div className="col-md-3  m-2 p-2">
                           <div className="btn btn-warning text-right">{list.status}</div>
                    </div>
                </div>
            
            <div class="card-body">
            <h5 class="card-title">{service.title}</h5>
            <p class="card-text">{service.description}</p>
               
            </div>
        </div>
        </div>
    );
};

export default ListCard;