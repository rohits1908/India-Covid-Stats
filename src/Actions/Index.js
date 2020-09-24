import {STORE_STATE_DATA, STORE_TESTING_DATA, STORE_HOSPITAL_DATA, STORE_HELPLINE_DATA} from '../Constants/Index';


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

export const storeHospitalData = (payload) => {
    return {
        type: STORE_HOSPITAL_DATA,
        payload
    }
}

export const storeHelplineData = (payload) => {
    return {
        type: STORE_HELPLINE_DATA,
        payload
    }
}