import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';
import LeftSideBar from '../Pages/LeftSideBar/LeftSideBar';

const Main = () => {
    const [theme, setTheme] = useState('light')
    return (
        <div data-theme={theme}>
            <Header setTheme={setTheme} />
            <div class="grid md:grid-cols-4 gap-4  ">
               <div style={{backgroundColor: "#c9d3f8"}} class="text-3xl font-bold hidden md:block  ">
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