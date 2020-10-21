import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import DashHeader from '../../Dashboard/DashHeader/DashHeader';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddOrder = () => {
    const {id} = useParams()
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [orderInfo, setOrderInfo] = useState( {orderId:id })
    const [placeOrder, setPlaceOrder] = useState(false)
    const [file, setFile] = useState(null);
    
    const handleBlur = (e) =>{
        const newOrder = {...orderInfo};
        newOrder[e.target.name] = e.target.value;
        setOrderInfo(newOrder);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', orderInfo.name);
        formData.append('email', orderInfo.email);
        formData.append('serviceName', orderInfo.serviceName);
        formData.append('projectDetail', orderInfo.projectDetail);
        formData.append('price', orderInfo.price);
        formData.append('orderId', id);
        fetch('https://dry-savannah-42449.herokuapp.com/addOrder', {
            method: 'POST',
           
            body: formData
        })
            .then(response => response.json())
            .then(data => setOrderInfo(data))
    }
    const handleChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    return (
        <div className="container">
            <div  className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <DashHeader></DashHeader>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row" >
                            <div className="col-md-8">
                                <input type="text" onBlur={handleBlur}  name="name" className="form-control p-3 m-2" placeholder="Your Name / Company Name"  />
                                <input type="email" onBlur={handleBlur}  name="email"  className="form-control p-3 m-2" placeholder="Your email address"  />
                                <input type="text" onBlur={handleBlur}  name="serviceName" value={orderInfo.title} className="form-control p-3 m-2" placeholder="Service name"  />
                                <textarea type="text" onBlur={handleBlur}  name="projectDetail" className="form-control p-3 m-2" cols="10" rows="3" placeholder="Project Detail" required />
                            </div>
                            <div className="row">
                                    <div className="col-md-4 ml-3"> 
                                       <input type="number" onBlur={handleBlur}  name="price" placeholder="Price" className="form-control p-3 m-2"  required />
                                    </div>
                                    <div className="col-md-4"><label htmlFor="file-upload" className="custom-file-upload m-2">
                                        
                                        </label>
                                        <input type="file" name="file" id="file-upload" onChange={handleChange} className=" m-2"required />
                                    </div>
                                </div>
                        </div>
                        <div className="form-group text-left mr-5">
                            <button style={{width:'120px'}} type="submit"  className="btn btn-dark m-2">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default AddOrder;