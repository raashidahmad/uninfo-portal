import Settings from '../../config/settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

function Introduction() {
    const countries = Settings.countries;
    let counter = 0;
    let countryCode = countries[0].value;
    
    function countryChangeHandler(e) {
        countryCode = e.currentTarget.value;
    }

    function healthFirstHandler() {

    }

    function protectingPeopleHandler() {

    }

    function economicResponseHandler() {

    }

    function macroEconomicResponseHandler() {

    }

    function socialCohesionHandler() {

    }

    return (
        <div className="row">
            <p>
                The dashboard below presents data from a set of socio-economic response 
                monitoring indicators that emanated from the UN framework for the immediate 
                response to the socio-economic impact of COVID-19. This dashboard followed the 
                call from the Secretary-General’s to develop a "… single, consolidated dashboard 
                to provide up-to-date visibility on [COVID-19] activities and progress across all 
                pillars”. The indicators monitor the progress and achievements of UNCT’s 
                collective actions in socio-economic response. Together with the indicators 
                monitoring the health and humanitarian responses, and the indicators monitoring the
                human rights impact of COVID-19, they make up the core basis for the UN system’s 
                indicator framework for COVID-19.
            </p>
            <p>
                Data is collected by the UNCTs and reported through the UN INFO platform. The 
                dashboard is powered by the collective data collection efforts of  
                &nbsp;<a href="https://unsdg.un.org/about/who-we-are" default="_blank">UNSDG members</a>.
            </p>
            <div className="col-md-12">
                <span className="float-right">
                    Reporting Status:&nbsp;
                    <span className="custom-link">By Country</span>&nbsp;|&nbsp;
                    <span className="custom-link">By Lead Agency</span>
                </span>
            </div>
            <div className="col-md-12">
                <div className="form-inline">
                    <label>Select country: &nbsp;</label>
                    <select className="form-control" id="countries" onChange={countryChangeHandler}>
                        {countries.map((country) => (
                            <option key={++counter} value={country.value}>{country.text}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row margin-top-10">
              <table className="table">
                  <tbody>
                      <tr>
                          <td>
                            <button className="btn btn-success btn-lg">
                                <FontAwesomeIcon icon={faHeartbeat} size="3x" />
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-success btn-lg" onClick={healthFirstHandler}>
                                HEALTH FIRST
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-primary btn-lg" onClick={protectingPeopleHandler}>
                                PROTECTING PEOPLE
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-warning btn-lg" onClick={economicResponseHandler}>
                                ECONOMIC RESPONSE
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-danger btn-lg" onClick={macroEconomicResponseHandler}>
                                MACROECONOMIC RESPONSE
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-secondary btn-lg" onClick={socialCohesionHandler}>
                                SOCIAL COHESION
                            </button>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </div>
        </div>
    );
}
export default Introduction;