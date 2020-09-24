import React, {useContext} from 'react'
import { StateContext } from '../../Context/StateDataContext';
import classes from './HospitalBedsSummary.module.css';

const HospitalBedsSummary = () => {

    const {fetchData} = useContext(StateContext);
    const {data:rootData} = fetchData;
    const {data} = rootData;
    
    if(typeof data !== 'undefined')
    {
        const{summary} = data
        if(typeof summary !== 'undefined')
        return (
            <div className = {classes.summaryCard}>
                <div className={classes.eachCard}>
                    <h5>Total Hospitals</h5>
                    <h3>{summary.totalHospitals}</h3>
                </div>
                <div className={classes.eachCard}>
                    <h5>Total No. of Beds</h5>
                    <h3>{summary.totalBeds}</h3>    
                </div>
                <div className={classes.eachCard}>
                    <h5>Rural Hospitals</h5>
                    <h3>{summary.ruralHospitals}</h3>    
                </div>
                <div className={classes.eachCard}>
                    <h5>Rural Beds</h5>
                    <h3>{summary.ruralBeds}</h3>    
                </div>
                <div className={classes.eachCard}>
                    <h5>Urban Hospitals</h5>
                    <h3>{summary.urbanHospitals}</h3>    
                </div>
                <div className={classes.eachCard}>
                    <h5>Urban Beds</h5>
                    <h3>{summary.urbanBeds}</h3>    
                </div>
            </div>
        )
    }
    
    return null;
   
}

export default HospitalBedsSummary;