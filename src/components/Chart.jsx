import React from 'react';
import { Chart } from 'primereact/chart';

const ChartData = () => {

    const basicData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], //need to get lables from results 
        datasets: [//need to get dataset from results 
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#42A5F5'
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: '#FFA726'
            }
        ]
    };


    const getLightTheme = () => {
        let basicOptions = {
            legend: {
                labels: {
                    fontColor: '#495057'
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }]
            }
        };

        

        return {
            basicOptions
        }
    }

    const { basicOptions } = getLightTheme();

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <Chart type="line" data={basicData} options={basicOptions} />
            </div>
        </div>
    )
}


export default ChartData;