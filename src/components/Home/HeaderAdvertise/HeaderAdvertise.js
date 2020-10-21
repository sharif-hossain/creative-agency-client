import React from 'react';
import './HeaderAdvertise.css'
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'

const HeaderAdvertise = () => {
    return (
        <div className="container my-5">
            <div className="row d-flex justify-content-around" >
                <div className="col-md-2 col-sm-6">
                    <img className="" src={slack} alt=""/>
                </div>
                <div className="col-md-2 col-sm-6">
                    <img className="" src={google} alt=""/>
                </div>
                <div className="col-md-2 col-sm-6">
                    <img className="" src={uber} alt=""/>
                </div>
                <div className="col-md-2 col-sm-6">
                    <img src={netflix} alt=""/>
                </div>
                <div className="col-md-2 col-sm-6">
                    <img src={airbnb} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HeaderAdvertise;