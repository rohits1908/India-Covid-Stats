import React, {useContext} from 'react'
import { StateContext } from '../../Context/StateDataContext';

const PrimaryHelpline = () => {

    const {fetchData} = useContext(StateContext)

    return (
        <div>
            Helpline
        </div>
    )
}

export default PrimaryHelpline;