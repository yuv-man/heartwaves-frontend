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
  const [ labels, setLabels ] = useState()
  const [ testData, setTestData ] = useState()
  const history = useHistory();

  let number = [0.8554913401603698,0.9595375657081603,1.0,0.662813127040863,0.3256261944770813,0.16955684125423431,0.10789980739355089,0.096339114010334,0.06743738055229187,0.07514450699090956,0.05394990369677544,0.055876687169075005,0.04431599378585816,0.05394990369677544,0.034682080149650574,0.038535647094249725,0.017341040074825287,0.025048170238733288,0.009633911773562431,0.01348747592419386,0.003853564616292715,0.011560693383216856,0.0,0.01348747592419386,0.009633911773562431,0.040462426841259,0.040462426841259,0.07707129418849945,0.080924853682518,0.11753372102975844,0.121387280523777,0.15799614787101743,0.15028901398181915,0.16955684125423431,0.16570328176021576,0.16955684125423431,0.16570328176021576,0.15221579372882843,0.15606936812400815,0.16570328176021576,0.15606936812400815,0.16570328176021576,0.1637764871120453,0.16763006150722504,0.16763006150722504,0.17919075489044187,0.1714836210012436,0.192678228020668,0.18497109413146967,0.2023121416568756,0.22350674867630005,0.26589596271514887,0.3275529742240906,0.4104046225547791,0.5202311873435974,0.6358381509780884,0.7148362398147583,0.8227360248565674,0.8285163640975952,0.7341040372848511,0.6705202460289001,0.6416184902191162,0.6204239130020142,0.6416184902191162,0.510597288608551,0.2967244684696197,0.15221579372882843,0.11753372102975844,0.09248554706573486,0.08670520037412643,0.052023120224475854,0.06165703386068344,0.04816955700516701,0.034682080149650574,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]

  const time = async() => {
    const nowtime = await new Date().toString()
    const dateNow = nowtime.substring(0, 15)
    setDate(dateNow)
  }

  const backToDashboard = () =>{
    history.push('/Dashboard')
  }

  const labelsfunc = () => {
    let numbers = [];
    for(let i = 0; i < 186; i++){
    numbers[i] = i;
  }
  setLabels(numbers)
  console.log(labels)
  }

  useEffect(() => {
    labelsfunc()
    setTestData(number)
  }, [])

  //chart data
  const data = {
   
    labels: labels,
    datasets: [
        {
            label: 'First Dataset',
            data: testData,
            fill: false,
            borderColor: '#4bc0c0'
        },
        // {
        //     label: 'Second Dataset',
        //     data: [28, 48, 40, 19, 86, 27, 90],
        //     fill: false,
        //     borderColor: '#FA5252'
        // }
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



