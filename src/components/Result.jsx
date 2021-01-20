import React, { useState } from 'react'
<<<<<<< HEAD:src/components/Result.jsx
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
=======
import { BrowserRouter as Link } from "react-router-dom";
import { Card , Button } from "react-bootstrap";


>>>>>>> 38758d8ea7dff1903afadcaa7e6775a2e88ec032:src/Result.js

function Result(props) {

    return (
      <div className="container w-50 ">
        <Card>
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title>Date: </Card.Title>
            <Card.Text>Name: </Card.Text>
            <Card.Text>Test result: </Card.Text>
            <Link to="/">
              <Button className="button"> Back </Button>
            </Link>
            <Button className="m-3 button">Call your Doctor </Button>
            <Button className="m-3 button"> Call Ambulance </Button>
          </Card.Body>
        </Card>
      </div>
    );
}

export default Result
