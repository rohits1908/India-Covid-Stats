import {STORE_STATE_DATA, STORE_TESTING_DATA, STORE_HOSPITAL_DATA, 
        STORE_HELPLINE_DATA, STORE_NOTIFICATION_DATA} from '../Constants/Index'; 

export const stateDataReducer = (state, action) =>{
    switch(action.type)
    {
        case STORE_STATE_DATA:
            return {
                ...state,
                data: action.payload
            }

        case STORE_TESTING_DATA:
            return {
                ...state,
                data: action.payload
            }

        case STORE_HOSPITAL_DATA:
            return {
                ...state,
                data: action.payload
            }

        case STORE_HELPLINE_DATA:
            return {
                ...state,
                data: action.payload
            }

        case STORE_NOTIFICATION_DATA:
            return{
                ...state,
                data: action.payload
            }

        default:
            return state
    }
}