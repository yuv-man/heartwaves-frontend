import React, { useState, useContext } from "react";
import { HeartContext } from "../libs/HeartContext";
import { Card, Row, Button } from "react-bootstrap";
import heartHome from '../images/heart-home.png'
import doctor from '../images/doctor.png'



function Home() {

    const { isLogin, firstName } = useContext(HeartContext);

    return (
        <div className="container mt-4">
            {isLogin?
                <div className="addTest">
                <div className='testRight'>
                    <h1>Hello, {firstName}</h1>
                    <Button className="m-4 p-1">Add new test</Button>
                </div>
                    <img className = 'doctor' src={doctor} alt="doctor" />
                </div>
                : <div className="home-text">
            <h1>Welcome to Heart Waves</h1>
            <img className='image-home' src={heartHome} alt="heart" />
            <h2>Our way to save your life</h2>
            </div>}
        </div>
    );
}

export default Home;
