import React from 'react';
import Feedback from 'react-bootstrap/esm/Feedback';
import Carousel from '../Carousel/Carousel';
import Contacts from '../Contacts/Contacts';
import ReviewList from '../Feedback/ReviewList';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Carousel></Carousel>
            <ReviewList></ReviewList>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;