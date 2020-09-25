import React, {useContext} from 'react'
import { StateContext } from '../../Context/StateDataContext';

const PrimaryHelpline = () => {

    const {fetchData} = useContext(StateContext)
    const {data:rootData} = fetchData;
    
    const {data} = rootData;
    if(typeof data !== 'undefined')
    {
        const {contacts} = data;
        if(typeof contacts !== 'undefined')
        {
            const {primary} = contacts
            return (
                <div>
                   <p>Email : {primary.email}</p> 
                   <p>Facebook : <a href={primary.facebook}>Facebook</a></p> 
                   <p>Number : {primary.number}</p> 
                   <p>Toll-Free Number : {primary["number-tollfree"]}</p> 
                   <p>Twitter : <a href={primary.twitter}>Twitter</a></p> 
                   <p>Media : <a href={primary.media[0]}>Media</a></p> 
                </div>
            )
        }
    }
    return null;
}

export default PrimaryHelpline;