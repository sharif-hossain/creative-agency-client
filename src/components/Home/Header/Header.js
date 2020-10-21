import React from 'react';
import HeaderAdvertise from '../HeaderAdvertise/HeaderAdvertise';
import HeaderBody from '../HeaderBody/HeaderBody';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderBody></HeaderBody>
            <HeaderAdvertise></HeaderAdvertise>
        </div>
    );
};

export default Header;