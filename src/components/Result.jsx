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
            <Card >
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title> </Card.Title>
                    <Card.Text> </Card.Text>
                    <Card.Text> </Card.Text>
                    <Card.Text></Card.Text>
                    <Card.Text></Card.Text>
                    <Card.Text></Card.Text>
                    <Link to="/" >
                        <Button className="button"  > Back </Button>
                    </Link>
                    <Button className="m-3 button">  </Button>
                    <Button className="m-3 button" >  </Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Result