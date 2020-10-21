import React, { useState } from 'react';
import DashHeader from '../../Dashboard/DashHeader/DashHeader';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AdAdmin = () => {
    const [email, setEmail] = useState('');
    
   const handleSubmit = (e) =>{
    e.preventDefault();
    fetch('http://dry-savannah-42449.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        .then(res => res.json())
        .then(data =>console.log(data))
   }
   const handleBlur = (e) => {
    setEmail(e.target.value);
}
    return (
        <section className='container'>
            <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
                </div>   
                <div className="col-md-8">
                    <DashHeader></DashHeader>
            <form action="" className="mt-5 ml-5" onSubmit={handleSubmit} style={{backgroundColor:'white', borderRadius:'10px', width:'80%'}}>
                <div className="form-group">
                    <label className="m-2 mt-3">Email</label>
                    <input type="email" onBlur={handleBlur} style={{ width: '50%' }} className="form-control p-3 m-2" placeholder="john@gmail.com" required />
                    <button type="submit" className="btn btn-primary m-2">Submit</button>
                </div>
                
            </form>
        </div>             
            </div>
        </section>
    );
};

export default AdAdmin;