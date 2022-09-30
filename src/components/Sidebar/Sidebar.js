import React from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import sidebar from './Sidebar.css'

const Sidebar = (total) => {
    const [rest, setrest] = useState(0);

    const notify = () => toast("Congratulations ! You complete your task easily");

    useEffect(() => {
        let getCartNumber = CartNumber();
        let setCart = [];
        setCart.push(getCartNumber)
        setrest(setCart)
    }, [])
    const handleRest = (e) => {
        localStorage.setItem('time', e)
        setrest(e)
    }



    const CartNumber = () => {
        let totalMin = {};

        //get the shopping cart from local storage
        const storedCart = localStorage.getItem('time');
        if (storedCart) {
            totalMin = JSON.parse(storedCart);
        }
        return totalMin;
    }
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
            <div className="restTime mt-4">
                <button onClick={(e) => handleRest(e.target.innerText)}>10 </button>
                <button onClick={(e) => handleRest(e.target.innerText)}>20</button>
                <button onClick={(e) => handleRest(e.target.innerText)}>30</button>
                <button onClick={(e) => handleRest(e.target.innerText)}>50</button>


            </div>

            <div className="exercise-details mt-4">
                <h4>exercise-details</h4>
                <h6 className='py-2'>Exercise time : {total.total} minute</h6>
                <h6 className='py-2'>Break Time :{rest} minute</h6>
            </div>

            <div>
                <button className='btn btn-success px-4 py-1' onClick={notify}>Activity Complete</button>
                <ToastContainer />
            </div>

        </div>
    );
};

export default Sidebar;