import React from 'react';
import Map from '../Images/mapUrl.png';
import rdata from '../Data/rideDetails.json';


let nArr = []

const UpcomingRides = () => {
    
    
    for(let j = 0; j < rdata.length; j++){
        let date = new Date(rdata[j].date)
        let datestr = date.toString()
        nArr.push(datestr)
        
    }
    console.log(nArr)

    return (
    <>    
        {nArr.map((cont, i) => (  
        <div className='body'>
            <div className='row body-box g-0 justify-content-between'>
                <div className='body-box-1 col-3 col-md-3'>
                    <img src={Map} alt="Map showing the directions" className='body-box-img' />
                </div>
                <div className='body-box-2 col-5 col-md-4'>
                    <p>Ride Id: </p>
                    <p>Origin Station: </p>
                    <p>Station_path: </p>
                    <p>Date: {cont}</p>
                    <p>Distance: </p>
                </div>
                <div className='body-box-3 col-3 col-md-2'>
                    <p>City Name</p>
                    <p>State Name</p>
                </div>
            </div>

        </div>)
        )}  
    </>
    );
  }


export default UpcomingRides;