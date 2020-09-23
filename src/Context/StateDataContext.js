import React, {createContext, useReducer} from 'react'
import {stateDataReducer} from '../Reducer/StateDataReducer';

export const StateContext = createContext();

const StateDataContextProvider = (props) => {
  
      const initialState = {
        data:''
      }

      const [fetchData, dispatch] = useReducer(stateDataReducer, initialState);
      
    return (
        <StateContext.Provider value = {{fetchData, dispatch}}>
            {props.children}
        </StateContext.Provider>
    )
}

export default StateDataContextProvider;
