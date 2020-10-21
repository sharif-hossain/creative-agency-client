import React from 'react';
import './Review.css'

const GetReview = ({item}) => {
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4  mt-5">
            <div className="review p-2">
                <div className="row">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <img style={{borderRadius:'50%'}} src={item.img} alt=""/>
                    </div>
                    <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                        <h5>{item.name}</h5>
                        <h5>{item.company}</h5>
                    </div>
                </div>
                <div>
                  <p className="text-secondary">{item.description}</p>
                </div>
            </div>
            
        </div>
    );
};

export default GetReview;