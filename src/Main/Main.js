import React from 'react';
import { Outlet } from 'react-router-dom';
import Foooter from '../Shared/Footer/Foooter';
import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Foooter></Foooter>
        </div>
    );
};

export default Main;