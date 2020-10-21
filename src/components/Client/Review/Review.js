import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import DashHeader from '../../Dashboard/DashHeader/DashHeader';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [review, setReview] = useState({});

    const handleBlur = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    const handleSubmit = (e) =>{
        review.img = loggedInUser.img;
        fetch('https://dry-savannah-42449.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ review })
        })
        .then(res => res.json())
        .then(data => setReview(data));
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                
                <div className="col-md-8">
                    <DashHeader></DashHeader>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row">
                        <div className="col-md-8  mb-3">
                            <input type="text" name="name" onBlur={handleBlur} className="form-control p-3 m-2" placeholder="Your name" required />
                            <input type="text" name="company" onBlur={handleBlur} className="form-control p-3 m-2" placeholder="Company’s name, Designation" required />
                            <textarea type="text" name="description" onBlur={handleBlur} className="form-control p-3 m-2" cols="10" rows="3" placeholder="Description" required />
                            </div>
                            <div className="col-md-4"></div>
                            <div className="form-group text-right mr-5">
                                <button type="submit" className="btn ml-4" style={{ backgroundColor: 'black', color: 'white', width: '170px' }}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;