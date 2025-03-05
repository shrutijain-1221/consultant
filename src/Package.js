import React from 'react';
import './Package.css';
import studentsImage from './images/consultlogo.png'; // Ensure the path is correct
const Package = () => {
    return (
        <div className="about-page">
            <h2>About</h2>
            <div className="about-box">
                <div className="about-left">
                    <img src={studentsImage} alt="Students" className="about-image" />
                </div>
                <div className="about-right">
                    <h3>About My Books</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.</p>
                </div>
            </div>
            <div className="cards-section">
                <div className="card">
                    <h3>Our Vision</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="card">
                    <h3>Our Purpose</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    );
};
export default Package;