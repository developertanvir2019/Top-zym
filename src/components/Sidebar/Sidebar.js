import React from 'react';
import sidebar from './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='pt-5 information'>
            <div className='d-flex'>
                <img className='author me-4' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg" alt="" />
                <h4>Tanvir Ahmed</h4>
            </div>
            <div className="d-flex pt-4">
                <div>
                    <h6>height</h6>
                    <h5>6 feet</h5>
                </div>
                <div className='px-4'>
                    <h6>Weight </h6>
                    <h5>65 KG</h5>
                </div>
                <div>
                    <h6>Age</h6>
                    <h5>24 Year</h5>
                </div>
            </div>
            <h4 className='text-center pt-3'>Add a Break</h4>
            <p></p>

        </div>
    );
};

export default Sidebar;