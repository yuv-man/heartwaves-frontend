import React from 'react'
import { Card, Button } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";


export default function UserResults(props) {
    const { date, name, result , _id } = props.result


    return (
        <div className="container">
            <Card style={{ width: "18rem" }}>
                <Card.Header>Date: {date}</Card.Header>
                <Card.Body>
                    <Card.Title> Name: {name}</Card.Title>
                    <Card.Text> Test results:{result} </Card.Text>
                    <Link variant="primary" to={`/result/${_id}`}>
                        <Button className="button">
                            see more
                    </Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>

    )
}

