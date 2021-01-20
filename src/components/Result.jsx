import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import { Card , Button } from "react-bootstrap";
import { HeartContext } from '../libs/HeartContext'
import { useHistory } from 'react-router-dom' 
import Severe from './Severe';
import Light from './Light';

import "./result.css";

function Result(props) {

  const { firstName } = useContext(HeartContext)
  const [date, setDate] = useState()
  const history = useHistory()

  const time = async() => {
    const nowtime = await new Date().toString()
    const dateNow = nowtime.substring(0, 15)
    setDate(dateNow)
  }

  const backToDashboard = () =>{
    history.push('/Dashboard')
  }

  const options = {
    title: {
        display: true,
        text: 'My Heart Beats',
        fontSize: 16
    },
    legend: {
        display: false,
    },
  };

  const userCondition = async() =>
  {
    //get user condition base on result from data science
  }

  useEffect(() => {
    time()
  }, [])

  if (userCondition === "N") {
      return (
      <div className="container w-50 ">
        <Card border="primary" >
          {/* <Card.Header></Card.Header> */}
          <Card.Body>
            <Card.Title>Date: </Card.Title>
            <Card.Text>Name: </Card.Text>
            <Card.Text>Test result: </Card.Text>
            <Light/>
          </Card.Body>
        </Card>
      </div>
    );
  }
  else {
      return (
      <div className="container w-50 ">
        <Card border="primary" >
          {/* <Card.Header></Card.Header> */}
          <Card.Body>
            <Card.Title>Date: </Card.Title>
            <Card.Text>Name: </Card.Text>
            <Card.Text>Test result: </Card.Text>
              <Severe/>
          </Card.Body>
        </Card>
      </div>
    );
  }

}

export default Result
