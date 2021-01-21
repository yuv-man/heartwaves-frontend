import React, { useState, useContext } from "react";
import { HeartContext } from "../libs/HeartContext";
import { Card, Row, Button, Form } from "react-bootstrap";
import heartHome from '../images/heart-home.png'
import doctor from '../images/doctor.png'
import { postData } from '../libs/util'

function Home() {
    const { isLogin, firstName } = useContext(HeartContext);
    const [ testFile, setTestFile ] = useState()

    const handleFile = (event) => {
        if (event.target.files[0]){
            console.log(event.target.files[0])
            setTestFile(event.target.files[0])
        }
    }

    const addTest = async(event) => {
        event.preventDefault()
        let formData = new FormData(); 
        formData.append('testFile', testFile);
        const result = await postData(formData)
        console.log(result)
    }

    return (
        <div className="container mt-4">
            {isLogin?
                <div className="addTest">
                <div className='testRight'>
                    <h1>Hello, {firstName}</h1>
                    <Button className="m-4 p-1" onClick = {(event) => addTest(event)}>Add new test</Button>
                    <Form.File className='file' onChange = {(event) => handleFile(event)}/>
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
