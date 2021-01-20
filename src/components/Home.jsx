import React, { useState, useContext } from "react";
import { HeartContext } from "../libs/HeartContext";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Home() {
    const { isLogin, firstName } = useContext(HeartContext);

    return (
      <div className="container mt-4">
            <h1 className="home-text">hello user</h1>
            <Button className="m-4 p-1">Upload new test</Button>
      </div>
    );
}

export default Home;
