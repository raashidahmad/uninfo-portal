import React from 'react';
import { Line } from 'react-chartjs-2';

function Vaccination(props) {
    let labels = props.data.map(v => v.subGroup);
    let quarterOneData = props.data.map(v => v.quarterOneValue);
    let quarterTwoData = props.data.map(v => v.quarterTwoValue);

    console.log(labels);

    /*let lineChartData = {
        labels: labels,
        datasets: [
          {
            label: 'Q1',
            data: quarterOneData,
            //fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: 'Q2',
            data: quarterTwoData,
            //fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
          },
        ],
      };

      let lineChartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        }
      };*/
      const lineChartData = {
        labels: labels,
        datasets: [
          {
            label: "Q1",
            data: quarterOneData,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Q2",
            data: quarterTwoData,
            fill: false,
            borderColor: "#742774"
          }
        ]
      };

    return (
        <div>
            <div cl assName="row success-container margin-top-10">
                <span className="row margin-left-10">
                    <h5>People Accessing Vaccination, Maternal Health & Nutrition Programmes.</h5>
                </span>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <div className="text-center">
                        <h5 className="margin-top-10"><b>{props.ldcs.value} M</b></h5>
                        <h4 className="text-success">{props.ldcs.subGroup}</h4>

                        <h5 className="margin-top-20"><b>{props.lldcs.value} M</b></h5>
                        <h4 className="text-success">{props.lldcs.subGroup}</h4>

                        <h5 className="margin-top-20"><b>{props.sids.value} M</b></h5>
                        <h4 className="text-success">{props.sids.subGroup}</h4>
                    </div>
                </div>
                <div className="col-md-5">
                    <h5 className="text-success margin-top-10">Quarterly Progress</h5>
                    <Line data={lineChartData} />
                </div>

                <div className="col-md-5">
                    <h5 className="text-success margin-top-10">People Supported by Region</h5>
                    
                </div>
            </div>

        </div>

    );
}
export default Vaccination;