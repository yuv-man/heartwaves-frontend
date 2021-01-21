import React from "react";
import { Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./userResults.css";
    
    
    
function UserResults(props) {
//   const { date, name, result, _id } = props.result;

    return (
      <>
    <div className="container">
      <Card className="results-card" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Date: </Card.Title>
          <Card.Text> Test results: </Card.Text>
          <Link variant="primary" to="/result">
            <Button className="button">see more</Button>
          </Link>
        </Card.Body>
      </Card>
            </div>
            <div className="container">
      <Card className="results-card" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Date: </Card.Title>
          <Card.Text> Test results: </Card.Text>
          <Link variant="primary" to="/result">
            <Button className="button">see more</Button>
          </Link>
        </Card.Body>
      </Card>
            </div>
            </>
  );
}

export default UserResults;
