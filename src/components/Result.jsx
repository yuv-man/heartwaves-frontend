import React, { useState } from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import { Card , Button } from "react-bootstrap";



export default function Result(props) {



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

