import {STORE_STATE_DATA, STORE_TESTING_DATA} from '../Constants/Index';


export const storeStatesData = (payload) => {
    return {
        type: STORE_STATE_DATA,
        payload
    }
}

export const storeTestingData = (payload) => {
    return {
        type: STORE_TESTING_DATA,
        payload
    }
}