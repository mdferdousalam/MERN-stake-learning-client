import React from 'react';
import { Outlet } from 'react-router-dom'
import Footer from '../components/sharedComponents/Footer';
import Header from '../components/sharedComponents/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;