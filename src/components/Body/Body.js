import React from 'react';
import Cards from '../Cards/Cards';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Body = () => {
    return (
        <div className="row d-flex justify-content-between">
            <div className="col-lg-8 col-sm-12">
                <Navbar></Navbar>
                <h3 className='py-4'>Select todays exercise</h3>
                <Cards></Cards>
            </div>
            <div className="col-lg-3 col-sm-12">
                <Sidebar></Sidebar>
            </div>
        </div>

    );
};

export default Body;