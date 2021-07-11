import Settings from '../../config/settings';

function Introduction() {
    const countries = Settings.countries;
    let counter = 0;
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
            <div className="row form-inline">
                <label>Select country: &nbsp;</label>
                <select className="form-control" id="countries">
                    {countries.map((country) => (
                        <option key={++counter} value={country.value}>{country.text}</option>
                    ))}
                </select>
            </div>
        </div>
        
    );
}
export default Introduction;