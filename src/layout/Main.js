import React from 'react';
import { Outlet } from 'react-router-dom'
import Footer from '../components/sharedComponents/Footer';
import Header from '../components/sharedComponents/Header';
import { ScrollRestoration } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration getKey={(location, matches) => {
                return location.key;
            }} />
        </div>
    );
};

export default Main;