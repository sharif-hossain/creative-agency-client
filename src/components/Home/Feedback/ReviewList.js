import React, { useEffect, useState } from 'react';
import GetReview from './GetReview';


const ReviewList = () => {
    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/getReview')
        .then(res => res.json())
        .then(data => setReview(data))
    })
    return (
        <div className="container">
            <div className="text-center mt-5">
                <h3>Clients Feedback</h3>
            </div>
            <div className="row">
                {
                    review.map(item =><GetReview id={item.id} item={item.review}></GetReview>)
                }
            </div>
            
        </div>
    );
};

export default ReviewList;