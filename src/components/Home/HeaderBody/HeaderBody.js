import React from 'react';
import frame from '../../../images/logos/Frame.png'

const HeaderBody = () => {
    return (
        <div className="container">
            <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4">
                <h1 className='font-weight-bold'>Let's Grow Your <br/> Brand To The <br/> Next Level </h1>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias assumenda itaque dicta tempora, atque consequuntur?</p>
                <div className="btn btn-dark">Hire us</div>
            </div>
            <div className="col-md-8">
                <img  src={frame} alt="" className="img-fluid w-100"/>
            </div>

        </main>
        </div>
    );
};

export default HeaderBody;