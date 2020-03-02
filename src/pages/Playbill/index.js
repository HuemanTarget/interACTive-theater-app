import React from 'react';

const Playbill = () => {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
        const currDate = "Current Date= "+date;
        
    
    
    return(
        <div>
            <h1>Playbill</h1>
            <p>{currDate}</p>
        </div>
    )
}
export default Playbill
