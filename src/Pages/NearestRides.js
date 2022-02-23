import React from 'react';
import Map from '../Images/mapUrl.png';
import udata from '../Data/userDetail.json';
import rdata from '../Data/rideDetails.json';


let newArr = [];
let Arr;
const NearestRides = () => {
    let ud = udata.station_code;
    for(let j = 0; j < rdata.length; j++){
        let rd = rdata[j].station_path;
        
        
        for(let i = 0; i < rd.length; i++){
            if (rd[i] >= ud && rd[i] <= 42){
                
                if (rd[i] < 42){
                    newArr.push(rdata[j])
                    
                } 
                
                Arr = [...newArr, rdata[0]]
            }
            
        }
        
    };
   
    
      
    return (
        <>
            {Arr.map((content, i) => (
            <div className='body'>
                <div className='row body-box g-0 justify-content-between'>
                    <div className='body-box-1 col-3 col-md-3'>
                        <img src={Map} alt="Map showing the directions" className='body-box-img' />
                    </div>
                    <div className='body-box-2 col-5 col-md-4'>
                        <p>Ride Id: {content.id}</p>
                        <p>Origin Station: </p>
                        <p>Station_path: {content.station_path}</p>
                        <p>Date: </p>
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


export default NearestRides;