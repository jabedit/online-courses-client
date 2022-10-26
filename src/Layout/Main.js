import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';
import LeftSideBar from '../Pages/LeftSideBar/LeftSideBar';

const Main = () => {
    return (
        <div>
            <Header />
            <div class="grid grid-cols-4 gap-4 px-16 mx-auto">
               <div class="text-3xl font-bold text-purple-700 navbar-bg-color">
                <LeftSideBar />
               </div>
                <div class="col-span-3 ">
                    <Outlet />
                    
                </div>
                
                
                
            </div>
            <div className='pt-10'>
            <Footer />
            </div>
        </div>
    );
};

export default Main;