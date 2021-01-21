import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import { Card , Button } from "react-bootstrap";
import { HeartContext } from '../libs/HeartContext'
import { Chart } from 'primereact/chart';
import { useHistory } from 'react-router-dom' 
import "./result.css";

function Result(props) {

  const { firstName } = useContext(HeartContext)
  const [date, setDate] = useState()
  const history = useHistory()

  const time = async() => {
    const nowtime = await new Date().toString()
    const dateNow = nowtime.substring(0, 15)
    setDate(dateNow)
  }

  const backToDashboard = () =>{
    history.push('/Dashboard')
  }

  //chart data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4bc0c0'
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: '#FA5252'
        }
    ]
  };

  const options = {
    title: {
        display: true,
        text: 'My Heart Beats',
        fontSize: 16
    },
    legend: {
        display: false,
    },
  };


  useEffect(() => {
    time()
  }, [])


    return (
      <div className="container w-50 resultsCard" > 
        <Card  id='result'>
          {/* <Card.Header></Card.Header> */}
          <Card.Body>
            <Card.Title>Hey {firstName} </Card.Title>
            <Card.Title>Test result: </Card.Title>
            <Card.Text className='mt-3 py-2 title' >{date}</Card.Text>
            <Chart className='chart' type="line" data={data} options={options} />
            
            <Link to="/">
              <Button className="button" onClick={backToDashboard}> Back </Button>
            </Link>
            <Button className="m-3 button">Call your Doctor </Button>
            <Button variant="danger" className="m-3 button"> Call Ambulance </Button>
          </Card.Body>
        </Card>
      </div>
    );
}

export default Result
