import React from 'react';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis } from 'recharts';

function Vaccination(props) {
    return (
        <div>
            <div className="row success-container margin-top-10">
            <span className="row margin-left-10">
                <h5>People Accessing Vaccination, Maternal Health & Nutrition Programmes.</h5>
            </span>
        </div>
            <div className="row">
                <div className="col-md-6">
                <LineChart
                        width={400}
                        height={400}
                        data={props.data}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis/>
                        <Tooltip />
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="age" stroke="#8884d8" />
                        <Line type="monotone" dataKey="salary" stroke="#82ca9d" />
                    </LineChart>
                </div>
            </div>
            
        </div>
        
    );
}
export default Vaccination;