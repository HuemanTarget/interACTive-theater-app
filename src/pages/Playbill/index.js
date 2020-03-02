import React from 'react';

const Playbill = () => {

    const currTime = () => {
        var tempTime = new Date();
        var time = tempTime.getHours()+':'+ tempTime.getMinutes();
        const currTime = time;
        return currTime
    }

    
        
    
    
    return(
        <div>
            Playbill
            <p>{currTime()}</p>
        </div>
    )
}
export default Playbill
