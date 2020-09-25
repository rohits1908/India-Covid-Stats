import React, { useEffect, useContext } from "react";
import { StateContext } from "../../Context/StateDataContext";
import { storeHelplineData } from "../../Actions/Index";
import classes from './Helpline.module.css';
import PrimaryHelpline from '../PrimaryHelpline/PrimaryHelpline';

const Helpline = () => {
  const { fetchData, dispatch } = useContext(StateContext);

  useEffect(() => {
    const url = "https://api.rootnet.in/covid19-in/contacts";
    fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(storeHelplineData(json)));
  }, []);

  const { data: rootData } = fetchData;
  const { data } = rootData;
  let render = null
  if (typeof data !== "undefined") {
    const { contacts } = data;
    if (typeof contacts !== "undefined") {
      const { regional } = contacts;

      if (typeof regional !== "undefined") {
        render =  (
          <table className = {classes.flTable}>
            <thead>
              <tr>
                <th>Location</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              {regional &&
                regional.length > 0 &&
                regional.map((ele, index) => (
                  <tr key={index}>
                    <td>{ele.loc}</td>
                    <td>{ele.number}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        );
      }
    }
  }

  return (
      <>
        <PrimaryHelpline />
        <div className = {classes.tableWrapper}>
          {render}
        </div>
      </>

  )
};

export default Helpline;
