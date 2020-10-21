import React from 'react';
import './GetServices.css'

const GetService = ({item,handleClick}) => {
   
    return (
        <div className="col-md-4 col-sm-6 " onClick={()=>handleClick(item._id)}>
            <div class="card text-center mb-4 p-2">
            <img  className="p-2 text-center" style={{height:'80px', width:'80px',borderRadius:'50%', marginLeft:'120px'}} src={`http://localhost:5000/${item.image}`} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.description}</p>
               
            </div>
        </div>
        </div>
    );
};

export default GetService;