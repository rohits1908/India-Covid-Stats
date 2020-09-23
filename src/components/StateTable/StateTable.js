import React, { useContext, useEffect } from "react";
import classes from './StateTable.module.css';
import { StateContext } from "../../Context/StateDataContext";
import {storeStatesData} from '../../Actions/Index';
import StatsSummary from '../StatsSummary/StatsSummary';


export default function StateTable() {
  
  const {fetchData, dispatch} = useContext(StateContext);

  useEffect(() => {
    const url = "https://api.rootnet.in/covid19-in/stats/latest";
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(storeStatesData(json)));
  }, []);

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
                <th>State/UT</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deceased</th>
              </tr>
            </thead>
            <tbody>
              {regional &&
                regional.length > 0 &&
                regional.map((ele, index) => (
                  <tr key={index}>
                    <td>{ele.loc}</td>
                    <td>{ele.totalConfirmed}</td>
                    <td>{ele.totalConfirmed - ele.discharged - ele.deaths}</td>
                    <td>{ele.discharged}</td>
                    <td>{ele.deaths}</td>
                  </tr>
                ))}
            </tbody>
          </table>
    );
  }

  return(
    <>
      <StatsSummary/>
      <div className = {classes.tableWrapper}>
        {render}
      </div>
    </>
  )
}
