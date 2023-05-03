import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const RecipiesLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default RecipiesLayout;