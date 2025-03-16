import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Index(){
    return (
        <>
            <h1>HealthCare by tacX</h1>
            <p>Welcome to HealthCare by tacX. This is a simple application that demonstrates how to build a healthcare application using React and Flask.</p>
            <p>Click on the links above to view the different sections of the application.</p>
            <nav>
                <ul>
                    <li><NavLink to="/diagnostics">Diagnostics</NavLink></li>
                    <li><NavLink to="/ecommerce">E-Commerce</NavLink></li>
                    <li><NavLink to="/consultation">Consultation</NavLink></li>
                </ul>
            </nav>
        </>
    );
}