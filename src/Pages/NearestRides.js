import React from 'react';
import Map from '../Images/mapUrl.png';
/*import udata from '../Data/userDetail.json';
import rdata from '../Data/rideDetails.json';*/



const NearestRides = () => {
    /*let user = props.user; 
    let zone = props.zone;

    for(let j = 0; j < zone.length; j++){
        let crm = zone[j];
        console.log(crm)
   
        crm.forEach(tim) 
        
    };
    function tim(x, user){
        
        if ((x >= user && x <= 42) !== -1){
            console.log(crm)
        }
        
    };*/
    
      
    return (
        <>
            <div className='body'>
                <div className='row body-box g-0 justify-content-between'>
                    <div className='body-box-1 col-3 col-md-3'>
                        <img src={Map} alt="Map showing the directions" className='body-box-img' />
                    </div>
                    <div className='body-box-2 col-5 col-md-4'>
                        <p>Ride Id: </p>
                        <p>Origin Station: </p>
                        <p>Station_path: </p>
                        <p>Date: </p>
                        <p>Distance: </p>
                    </div>
                    <div className='body-box-3 col-3 col-md-2'>
                        <p>City Name</p>
                        <p>State Name</p>
                    </div>
                </div>

            </div>
        </>
    );
  }


export default NearestRides;