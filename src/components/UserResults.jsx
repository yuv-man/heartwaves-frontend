import React from "react";
import { Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import "./userResults.css";

function UserResults(props) {
    const { date, heartData, _id } = props.result;

    const histroy = useHistory();
    const handleClick = (result)=>{
      histroy.push('/result',result);
    }

  return (
    <div>
      <div className="mt-3">
        <Card className="results-card m-auto" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Date:{date} </Card.Title>
            <Card.Text> Test results:{heartData['beat name']} </Card.Text>
              <Button className="button" onClick={e=> handleClick(props.result)}>see more</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default UserResults;
