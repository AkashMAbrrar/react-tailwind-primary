import React from 'react';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h1 className='text-3xl'>Save most of your money</h1>
            <p>By giving your money to me</p>
        </div>
    );
};

export default Header;