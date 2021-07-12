import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faChild, faSyringe, faHamburger } from '@fortawesome/free-solid-svg-icons';
import Data from '../../config/data';

function HealthFirst(props) {
    const maternalHealth = Data.maternalHealth;
    const vaccinationProgrammes = Data.vaccinationProgrammes;
    const nutritionProgrammes = Data.nutritionProgrammes;

    return (
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
    );
}
export default HealthFirst;