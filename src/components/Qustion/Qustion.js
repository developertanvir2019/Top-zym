import React from 'react';
import css from './Qustion.css'

const Qustion = () => {
    return (
        <div className='style'>
            <h1>Question and answer</h1>
            <div>
                <h2>Question-01: How dose react work?</h2>
                <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.</p>
            </div>
            <div>
                <h2>Question-02: What are the use of useEFfect?</h2>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>
            <div>
                <h2>Question-03: What is the difference between props and state?</h2>
                <p>
                    Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
        </div>
    );
};

export default Qustion;