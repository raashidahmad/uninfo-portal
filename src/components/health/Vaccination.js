import React from 'react';
import { Line } from 'react-chartjs-2';
import Settings from '../../config/settings';

function Vaccination(props) {
    const MATERNAL_HEALTH = Settings.subGroups.maternalHealth;
    const VACCINATION_PROGRAMS = Settings.subGroups.vaccinationProgrammes;
    const NUTRITION_PROGRAMS = Settings.subGroups.nutritionProgrammes;

    let labels = ['Q1', 'Q2', 'Q3', 'Q4' ];
    let maternalHealthData = props.data.filter(d => d.subGroup === MATERNAL_HEALTH).map(d => d.quarterValue);
    let vaccinationData = props.data.filter(d => d.subGroup === VACCINATION_PROGRAMS).map(d => d.quarterValue);
    let nutritionData = props.data.filter(d => d.subGroup === NUTRITION_PROGRAMS).map(d => d.quarterValue);


    const lineChartData = {
    labels: labels,
    datasets: [
        {
        label: MATERNAL_HEALTH,
        data: maternalHealthData,
        fill: false,
        //backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#009e60"
        },
        {
        label: VACCINATION_PROGRAMS,
        data: vaccinationData,
        fill: false,
        borderColor: "#742774"
        },
        {
        label: NUTRITION_PROGRAMS,
        data: nutritionData,
        fill: false,
        borderColor: "#ff4545"
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