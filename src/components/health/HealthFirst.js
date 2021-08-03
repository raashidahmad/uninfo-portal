import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faChild, faSyringe, faHamburger } from '@fortawesome/free-solid-svg-icons';
import Data from '../../config/data';
import Vaccination from "./Vaccination";
import Papa from 'papaparse';
import { useEffect, useState } from "react";
import Immunization from "./Immunization";
import HealthWorker from "./HealthWorker";
import Settings from "../../config/settings";

function HealthFirst(props) {
    const [vaccinationChartData, setVaccinationChartData] = useState([]);
    
    useEffect(() => {
        (async function getData() {
            const result = Papa.parse(await fetchCsv());
            if (result.data) {
                let data = [];
                result.data.shift();
                result.data.forEach((d) => {
                    var obj = {
                        code: d[0],
                        indicator: d[1],
                        subGroup: d[2],
                        timePeriod: d[3],
                        value: d[4]
                    }
                    data.push(obj);
                });
                let vaccinationData = data.filter(d => d.code == 1);
                console.log(vaccinationData);
                setVaccinationChartData(vaccinationData);
            }
        })();
    }, []);

    async function fetchCsv() {
        const response = await fetch('data/data.csv');
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csv = await decoder.decode(result.value);
        return csv;
    }

    return (
        <div>
            <div className="row">
                <div className="container success-container margin-top-10">
                    <span className="row margin-left-10">
                        <FontAwesomeIcon icon={faHeartbeat} size="2x" />&nbsp;&nbsp;
                        <h4>Health first</h4>
                    </span>
                </div>
                <div className="container row margin-top-10">

                    <div className="col-md-4">
                        <div className="text-center text-success">
                            <FontAwesomeIcon icon={faChild} size="3x" /><br />
                            MATERNAL HEALTH
                        </div>
                        <hr className="hr-line" />
                        <div className="text-center">
                            <h5><b>{Data.healthFirst.maternalHealth} M</b></h5>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-center text-success">
                            <FontAwesomeIcon icon={faSyringe} size="3x" /><br />
                            VACCINATION PROGRAMMES
                        </div>
                        <hr className="hr-line" />
                        <div className="text-center">
                            <h5><b>{Data.healthFirst.vaccinationProgrammes} M</b></h5>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-center text-success">
                            <FontAwesomeIcon icon={faHamburger} size="3x" /><br />
                            NUTRITION PROGRAMMES
                        </div>
                        <hr className="hr-line" />
                        <div className="text-center">
                            <h5><b>{Data.healthFirst.nutritionProgrammes} M</b></h5>
                        </div>
                    </div>
                </div>
            </div>
            <Vaccination data={vaccinationChartData} />
            <Immunization />
            <HealthWorker />
        </div>
    );
}
export default HealthFirst;