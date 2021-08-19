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
    const [vaccinationData, setVaccinationChartData] = useState([]);
    const [maternalHealthValue, setMaternalHealth] = useState([]);
    const [vaccinationProgrammesValue, setVaccinationProgrammes] = useState([]);
    const [nutritionProgrammesValue, setNutritionProgrammes] = useState([]);
    const [ldcsValue, setLDCsValue] = useState([]);
    const [lldcsValue, setLLDCsValue] = useState({});
    const [sidsValue, setSIDsValue] = useState({});
    
    useEffect(() => {
        const QUARTER_ONE = Settings.quarters.quarterOne;
        //const QUARTER_TWO = Settings.quarters.quarterTwo;
        //const QUARTER_THREE = Settings.quarters.quarterThree;
        //const QUARTER_FOUR = Settings.quarters.quarterFour;
        const MATERNAL_HEALTH = Settings.subGroups.maternalHealth;
        const VACCINATION_PROGRAMS = Settings.subGroups.vaccinationProgrammes;
        const NUTRITION_PROGRAMS = Settings.subGroups.nutritionProgrammes;
        const LDCS = Settings.subGroups.ldcs;
        const LLDCS = Settings.subGroups.lldcs;
        const SIDS = Settings.subGroups.sids;
        const numberCodes = Settings.numberCodes;

        let figureMillionDividend = Settings.figureMillionDividend;
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
                        quarterValue: parseFloat(d[4]),
                    }
                    data.push(obj);
                });

                let vaccinationData = data.filter(d => d.code === numberCodes.ONE);
                /*let vaccinationChartData = [];
                vaccinationData.forEach((d) => {
                    let subGroup = d.subGroup;
                    let q1Value = 0, q2Value = 0, q3Value = 0, q4Value = 0;

                    switch(d.timePeriod) {
                        case QUARTER_ONE:
                            q1Value = parseFloat(d.quarterValue);
                            break;

                        case QUARTER_TWO:
                            q2Value = parseFloat(d.quarterValue);
                            break;

                        case QUARTER_THREE:
                            q3Value = parseFloat(d.quarterValue);
                            break;

                        case QUARTER_FOUR:
                            q4Value = parseFloat(d.quarterValue);
                            break;
                    }

                    let filterSubGroup = vaccinationChartData.filter(v => v.subGroup === subGroup);
                    if (filterSubGroup.length > 0) {
                        filterSubGroup[0].quarterOneValue = q1Value !== 0 ? q1Value : filterSubGroup[0].quarterOneValue;
                        filterSubGroup[0].quarterTwoValue = q2Value !== 0 ? q2Value : filterSubGroup[0].quarterTwoValue;
                        filterSubGroup[0].quarterThreeValue = q3Value !== 0 ? q3Value : filterSubGroup[0].quarterThreeValue;
                        filterSubGroup[0].quarterFourValue = q4Value !== 0 ? q4Value : filterSubGroup[0].quarterFourValue;
                    } else {
                        vaccinationChartData.push({
                            subGroup: subGroup,
                            quarterOneValue: q1Value,
                            quarterTwoValue: q2Value,
                            quarterThreeValue: q3Value,
                            quarterFourValue: q4Value,
                        });
                    }
                });*/

                
                let mHealth = vaccinationData.filter(v => v.subGroup === MATERNAL_HEALTH && v.timePeriod === QUARTER_ONE);
                let vProgram = vaccinationData.filter(v => v.subGroup === VACCINATION_PROGRAMS && v.timePeriod === QUARTER_ONE);
                let nutritionProgram = vaccinationData.filter(v => v.subGroup === NUTRITION_PROGRAMS && v.timePeriod === QUARTER_ONE);

                let mValue = (mHealth.length > 0) ? parseFloat((mHealth[0].quarterValue / figureMillionDividend).toFixed(1)) : 0;
                let vValue = (vProgram.length > 0) ? parseFloat((vProgram[0].quarterValue / figureMillionDividend).toFixed(1)) : 0;
                let nValue = (nutritionProgram.length > 0) ? parseFloat((nutritionProgram[0].quarterValue / figureMillionDividend).toFixed(1)) : 0;
                setMaternalHealth(mValue);
                setVaccinationProgrammes(vValue);
                setNutritionProgrammes(nValue);

                /*
                    TODO: Do we need a quarter filter here for this list
                */
                let ldcsResult = data.filter(v => v.code === numberCodes.TWO && v.subGroup === LDCS && v.timePeriod === QUARTER_ONE);
                let lldcsResult = data.filter(v => v.code === numberCodes.TWO && v.subGroup === LLDCS && v.timePeriod === QUARTER_ONE);
                let sidsResult = data.filter(v => v.code === numberCodes.TWO && v.subGroup === SIDS && v.timePeriod === QUARTER_ONE);

                let ldcsObj = {
                    subGroup: Settings.subGroups.ldcs,
                    value: 0
                };
                if (ldcsResult.length > 0) {
                    ldcsObj.value = parseFloat((ldcsResult[0].quarterValue / figureMillionDividend).toFixed(1));
                }

                let lldcsObj = {
                    subGroup: Settings.subGroups.lldcs,
                    value: 0
                };
                if (lldcsResult.length > 0) {
                    lldcsObj.value = parseFloat((lldcsResult[0].quarterValue / figureMillionDividend).toFixed(1));
                }

                let sidsObj = {
                    subGroup: Settings.subGroups.sids,
                    value: 0
                };
                if (sidsResult.length > 0) {
                    sidsObj.value = parseFloat((sidsResult[0].quarterValue / figureMillionDividend).toFixed(1));
                }

                setVaccinationChartData(vaccinationData);
                setLDCsValue(ldcsObj);
                setLLDCsValue(lldcsObj);                
                setSIDsValue(sidsObj); 
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
                            <h5><b>{maternalHealthValue} M</b></h5>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-center text-success">
                            <FontAwesomeIcon icon={faSyringe} size="3x" /><br />
                            VACCINATION PROGRAMMES
                        </div>
                        <hr className="hr-line" />
                        <div className="text-center">
                            <h5><b>{vaccinationProgrammesValue} M</b></h5>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-center text-success">
                            <FontAwesomeIcon icon={faHamburger} size="3x" /><br />
                            NUTRITION PROGRAMMES
                        </div>
                        <hr className="hr-line" />
                        <div className="text-center">
                            <h5><b>{nutritionProgrammesValue} M</b></h5>
                        </div>
                    </div>
                </div>
            </div>
            <Vaccination data={vaccinationData} ldcs={ldcsValue} lldcs={lldcsValue} sids={sidsValue} />
            <Immunization />
            <HealthWorker />
        </div>
    );
}
export default HealthFirst;