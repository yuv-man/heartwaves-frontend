import React, { useState, useContext } from "react";
import { HeartContext } from "../libs/HeartContext";
import { Card, Row, Button } from "react-bootstrap";
import heartHome from '../images/heart-home.png'


function Home() {

    const { isLogin, firstName } = useContext(HeartContext);

    return (
        <div className="container mt-4">
            {isLogin?<h1 className="home-text">Hello, {firstName}</h1>: <div className="home-text">
            <h1>Welcome to Heart Waves</h1>
            <img className='image-home' src={heartHome} alt="heart" />
            <h2>Our way to save your life</h2>
            </div>}
            {isLogin && <Button className="m-4 p-1">Upload new test</Button>}
        </div>
    );
}

export default Home;
