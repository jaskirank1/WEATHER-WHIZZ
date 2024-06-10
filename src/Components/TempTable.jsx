import React from 'react'
import '../App.css';

const TempTable = (props) => {
  return (
    <div>
        <table className="table">
            <tbody className="table-group-divider table-bg">
                <tr>
                    <th scope='row'>Temperature</th>
                    <td>{props.tempr}&deg;C</td>
                </tr>
                <tr>
                    <th scope='row'>Humidity</th>
                    <td>{props.humidity}</td>
                </tr>
                <tr>
                    <th scope='row'>Wind Speed</th>
                    <td>{props.windspeed} Km/h</td>
                </tr>
                <tr>
                    <th scope='row'>UV</th>
                    <td>{props.uv} UVI</td>
                </tr>
            </tbody>
        </table>
    
    </div>
  )
}
export default TempTable

