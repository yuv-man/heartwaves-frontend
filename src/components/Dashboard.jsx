import React, { useState, useEffect } from 'react'
import UserResults from "./UserResults";
import axios from "axios";
import { Row, Col, Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { postRecords } from '../libs/util'

function Dashboard() {
  const [userResults, setUserResults] = useState([])
  const history = useHistory();
  const getRecords = async () => {
    const data = await postRecords();
    setUserResults(data);
  }

  useEffect(() => {
    getRecords()
  }, [])

  const handleResultClick = () => {
    if (userResults.length > 0)
      history.push('/result', userResults[0]);
  }

  return (
    <div className="container  my-5">
      <Row>
        <Col >
          <h1>Updated result</h1>
          <Card className="results-card">
            <Card.Body>
              <Card.Title>Date:{userResults.length > 0 && userResults[0].date} </Card.Title>
              <Card.Text> Test results:{userResults.length > 0 && userResults[0].heartData['beat name']} </Card.Text>
              <Button className="button" onClick={handleResultClick}>see more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <h1>History</h1>
          <Row className={'justify-content-center'}>
            {userResults.map((result) => (
              <UserResults key={result._id} result={result} />
            )
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard

