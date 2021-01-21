import React from 'react';
import ChartData from './Chart'
import { Button } from "react-bootstrap";
import { useHistory, Link } from 'react-router-dom' 


function Severe (){

    const history = useHistory()

    const backToDashboard = () =>{
        history.push('/Dashboard')
    }

        return (
            <div>
                <ChartData className='chart' type="line" />
                <br></br>
                <Link to="/">
                    <Button className="button" onClick={backToDashboard}> Back </Button>
                </Link>
                <Button className="m-3 button">Call Ambulance </Button>
            </div>
        )
    
}

export default Severe