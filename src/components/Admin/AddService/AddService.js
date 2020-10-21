import React, { useState } from 'react';
import DashHeader from '../../Dashboard/DashHeader/DashHeader';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const [addService, setAddService] = useState({})
    const [file, setFile] = useState(null)
    const handleBlur = (e) =>{
        const newService = {...addService}
        newService[e.target.name] = e.target.value;
        setAddService(newService)
    }
    const handleChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', addService.title);
        formData.append('description', addService.description);
        fetch('http://dry-savannah-42449.herokuapp.com/addService',{
            method:'POST',
            // headers: {
            //     'Content-type': 'application/json; charset=UTF-8',
            //   },
            body:formData
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <DashHeader></DashHeader>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row" style={{border:'1px solid lightGray'}}>
                            <div className="col-md-5">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Service title</label>
                                    <input type="text" name="title" onBlur={handleBlur} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" required/>
                                    
                                </div>
                                <div class="form-group">
                                    <label className="m-2 mt-3">Description</label>
                                    <textarea type="text" onBlur={handleBlur} name="description" className="form-control p-3 ml-2" cols="10" rows="5" placeholder="Enter Description"  required />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group mr-5">
                                    <label className="m-2 mt-3">Icon</label><br/>
                                    <input type="file" onChange={handleChange} name="file" className="ml-2"  placeholder="Enter Title" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-right mr-5">
                            <button type="submit"  className="btn btn-success m-2">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;