
import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const Root = () => {
    return (
       <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            foo

        </div>
    );
};

export default Root;