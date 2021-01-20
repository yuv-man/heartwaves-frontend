import React from 'react';
import ChartData from './Chart'
import { Button } from "react-bootstrap";


class Severe extends React.Component{
    render() {
        return (
            <div>
                <ChartData className='chart' type="line" data={data} options={options}/>
                <br></br>
                <Link to="/">
                    <Button className="button" onClick={backToDashboard}> Back </Button>
                </Link>
                <Button className="m-3 button">Call Ambulance </Button>
            </div>
        )
    }
}

export default Severe