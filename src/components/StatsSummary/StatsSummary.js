import React, {useContext} from 'react'
import { StateContext } from '../../Context/StateDataContext';
import classes from './StatsSummary.module.css';

const StatsSummary = () => {

    const {fetchData} = useContext(StateContext);
    
    if(fetchData.data)
    {
        const {data: rootData} = fetchData;
        const {data} = rootData;
        const {summary} = data;

        if(typeof summary !== 'undefined')
        return (
            <div className={classes.summaryCard}>
                <div className={classes.eachCard}>
                    <h5 style={{color:'Red'}}>Confirmed</h5>
                    <h1 style={{color:'Red'}}>{summary.confirmedCasesIndian}</h1>
                </div>
                <div className={classes.eachCard}>
                    <h5 style={{color:'DodgerBlue'}}>Active</h5>
                    <h1 style={{color:'DodgerBlue'}}>{summary.confirmedCasesIndian - summary.discharged - summary.deaths}</h1>
                </div>
                <div className={classes.eachCard}>
                    <h5 style={{color:'Green'}}>Recovered</h5>
                    <h1 style={{color:'Green'}}>{summary.discharged}</h1>
                </div>
                <div className={classes.eachCard}>
                    <h5 style={{color:'Grey'}}>Deaths</h5>
                    <h1 style={{color:'Grey'}}>{summary.deaths}</h1>
                </div>
            </div>
        )
    }
    
    return null;
}

export default StatsSummary;
