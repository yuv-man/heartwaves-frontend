import React, { useContext } from "react";
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
    <>
      <div className="mt-3">
        <Card className="results-card m-auto" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Date:{date} </Card.Title>
            <Card.Text> Test results:{heartData['beat name']} </Card.Text>
            {/* <Link variant="primary" to="/result"> */}
              <Button className="button" onClick={e=> handleClick(props.result)}>see more</Button>
            {/* </Link> */}
          </Card.Body>
        </Card>
      </div>
      {/* <div className="container">
        <Card className="results-card" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Date: </Card.Title>
            <Card.Text> Test results: </Card.Text>
            <Link variant="primary" to="/result">
              <Button className="button">see more</Button>
            </Link>
          </Card.Body>
        </Card>
      </div> */}
    </>
  );
}

export default UserResults;
