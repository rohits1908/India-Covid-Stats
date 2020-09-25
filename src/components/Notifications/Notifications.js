import React, {useContext, useEffect} from 'react'
import { StateContext } from '../../Context/StateDataContext';
import {storeNotificationData} from '../../Actions/Index';

const Notifications = () => {

    const {fetchData, dispatch} = useContext(StateContext)
    let render = null;
    useEffect(() => {
      const url = 'https://api.rootnet.in/covid19-in/notifications'
      fetch(url)
      .then(response => response.json())
      .then(json => dispatch(storeNotificationData(json)))
    }, [])

    const clickHandler = (link) => {
      window.open(link, "_blank")
    }
    const {data:rootData} = fetchData;
    const {data} = rootData
    if(typeof data !== 'undefined')
    {
      const {notifications} = data
      if(typeof notifications !== 'undefined')
      {
          render = (
           
              notifications &&
              notifications.length > 0 &&
              notifications.map((ele, index) => (
                <div key ={index}>
                  <p>Title : {ele.title}</p>
                  <span onClick={() => clickHandler(ele.link)}>Link : <u style={{color:'blue', cursor:'pointer'}}>{ele.link}</u></span>
                </div>
          )))
      }
    }
    return (
        <div>
          {render}
        </div>
    )
}

export default Notifications;
