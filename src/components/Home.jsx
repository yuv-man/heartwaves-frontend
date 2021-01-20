import React, { useState, useContext } from "react";
import { HeartContext } from "../libs/HeartContext";

function Home() {
    const { isLogin, firstName } = useContext(HeartContext);

    return (
    <div className="container mt-4"> 
        <h1 className="home-text">hello world</h1>
    </div>
    );
}

export default Home;
