import React from 'react';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis } from 'recharts';
import { BarChart, Bar, Legend } from 'recharts';

function Vaccination(props) {
    return (
        <div>
            <div className="row success-container margin-top-10">
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
                    <LineChart
                        width={480}
                        height={300}
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="subGroup" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="quarterOneValue" stroke="#8884d8" />
                        <Line type="monotone" dataKey="quarterTwoValue" stroke="#82ca9d" />
                    </LineChart>
                </div>

                <div className="col-md-5">
                    <h5 className="text-success margin-top-10">People Supported by Region</h5>
                    <BarChart
                        width={500}
                        height={300}
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="subGroup" type="category" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="quarterOneValue" fill="#8884d8" />
                        <Bar dataKey="quarterTwoValue" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>

        </div>

    );
}
export default Vaccination;