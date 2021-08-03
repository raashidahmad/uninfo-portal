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
                <div className="col-md-4">
                    <div className="text-center">
                        <h4>{props.ldcs.value}</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <h5 className="text-success margin-top-10">Quarterly Progress</h5>
                    <LineChart
                        width={300}
                        height={300}
                        data={props.data}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                        <XAxis dataKey="subGroup" />
                        <YAxis dataKey="value" />
                        <Tooltip />
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="subGroup" stroke="#8884d8" />
                        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                    </LineChart>
                </div>

                <div className="col-md-4">
                    <h5 className="text-success margin-top-10">People Supported by Region</h5>
                    <BarChart
                        width={400}
                        height={300}
                        data={props.data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="subGroup" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>

        </div>

    );
}
export default Vaccination;