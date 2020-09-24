import React, {useContext, useEffect} from 'react';
import { StateContext } from '../../Context/StateDataContext';
import {storeHospitalData} from '../../Actions/Index';
import classes from './HospitalBedsStats.module.css';
import HospitalBedsSummary from '../HospitalBedsSummary/HospitalBedsSummary';

export default function HospitalBedsStats() {

    const {fetchData, dispatch} = useContext(StateContext);

    useEffect(() => {
        const url = 'https://api.rootnet.in/covid19-in/hospitals/beds';
        fetch(url)
        .then(response => response.json())
        .then(json => dispatch(storeHospitalData(json)));
    }, [])

    const {data: rootData} = fetchData;
    const {data} = rootData;
    let render = null;

  if(typeof data !== 'undefined')
  {
    const {regional} = data;
    render = (
          <table className = {classes.flTable}>
            <thead>
              <tr>
                <th>State</th>
                <th>Total Hospitals</th>
                <th>Total Beds</th>
                <th>Rural Hospitals</th>
                <th>Rural Beds</th>
                <th>Urban Hospitals</th>
                <th>Urban Beds</th>
              </tr>
            </thead>
            <tbody>
              {regional &&
                regional.length > 0 &&
                regional.map((ele, index) => (
                  <tr key={index}>
                    <td>{ele.state}</td>
                    <td>{ele.totalHospitals}</td>
                    <td>{ele.totalBeds}</td>
                    <td>{ele.ruralHospitals}</td>
                    <td>{ele.ruralBeds}</td>
                    <td>{ele.urbanHospitals}</td>
                    <td>{ele.urbanBeds}</td>
                  </tr>
                ))}
            </tbody>
          </table>
    );
  }

    return (
        <>
        <HospitalBedsSummary/>
        <div className = {classes.tableWrapper}>
            {render}
        </div>
        </>
    )
}
