import React, { useState , useEffect } from 'react'
import UserResults from "./UserResults";
import axios from "axios";
import { Row, Col, Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";




function Dashboard () {
    const [userResults, setUserResults] = useState([])

    // useEffect(() => {
    //     const getAllUsersResults = async () => {
    //         const res = await axios.get('http:localhost:5000')
    //         setUserResults(res.data);
    //         console.log(userResults);
    //     }
    //     getAllUsersResults()
    // }, [])


    return (
      <div className="container  my-5">
        <Row>
                <Col >
                    <h1>Updated result</h1>
            <Card className="results-card">
              <Card.Body>
                <Card.Title>Date: </Card.Title>
                <Card.Text> Test results: </Card.Text>
                <Link variant="primary" to="/result">
                  <Button className="button">see more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
                <Col>
                    <h1>History</h1>
            <Row>
              {/* {userResults.map((result) => (
                <UserResults key={result.id} result={result} />
                )
            )} */}
              <UserResults></UserResults>
            </Row>
          </Col>
        </Row>
      </div>
    );
}

export default Dashboard

