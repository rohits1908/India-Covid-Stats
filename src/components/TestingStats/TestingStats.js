import React, {useContext, useEffect} from 'react';
import { StateContext } from '../../Context/StateDataContext';
import {storeTestingData} from '../../Actions/Index';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

export default function TestingStats() {

    const {fetchData, dispatch} = useContext(StateContext);

    useEffect(() => {
        let url = 'https://api.rootnet.in/covid19-in/stats/testing/latest';
        fetch(url)
            .then(response => response.json())
            .then(json => dispatch(storeTestingData(json))); 
    }, [])

    const redirectHandler = (path) =>{
        window.open(path, "_blank")
    }

    const {data:rootData} = fetchData;
    const {data} = rootData;
    if(typeof data !== 'undefined')
    {
        return (
        <Card>
        <CardImg top width="20%" src="testing.jpg" alt="Card image cap" />
        <CardBody>
        <CardTitle>Testing Statistics as of {data.day}</CardTitle>
        <CardText>Total Samples Tested : {data.totalSamplesTested}</CardText>
          <Button onClick = {() => redirectHandler(data.source)}>Source</Button>
        </CardBody>
      </Card>
        )
    }
    return null;
}
