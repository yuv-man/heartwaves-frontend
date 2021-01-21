import React from 'react';
import ChartData from './Chart'
import { Button } from "react-bootstrap";


class Light extends React.Component{

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <ChartData className='chart' type="line" data={data} options={options}/>
                <br></br>
                <Link to="/">
                    <Button className="button" onClick={backToDashboard}> Back </Button>
                </Link>
                <Button className="m-3 button">Call your Doctor </Button>
            </div>
        )
    }
}

export default Light
