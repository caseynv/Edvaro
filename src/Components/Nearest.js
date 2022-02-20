import React from 'react';

const userDetail = 
{
    "station_code": 40,
    "name": "Dhruv Singh",
    "profile_key": "url"
};

const rideDetails = 
[
    {
       "id":1,
       "origin_station_code":23,
       "station_path":[
          23,
          42,
          45,
          48,
          56,
          60,
          77,
          81,
          93
       ],
       "destination_station_code":93,
       "date":1644924365,
       "map_url":"url",
       "state":"Maharashtra",
       "city":"Panvel"
    },
    {
       "id":2,
       "origin_station_code":20,
       "station_path":[
          20,
          39,
          40,
          42,
          54,
          63,
          72,
          88,
          98
       ],
       "destination_station_code":98,
       "date":1644924365,
       "map_url":"url",
       "state":"Maharashtra",
       "city":"Panvel"
    },
    {
       "id":3,
       "origin_station_code":13,
       "station_path":[
          13,
          25,
          41,
          48,
          59,
          64,
          75,
          81,
          91
       ],
       "destination_station_code":91,
       "date":1644924365,
       "map_url":"url",
       "state":"Maharashtra",
       "city":"Panvel"
    }
];

const Nearest = () => {
    for(let j = 0; j < loadUser.length; j++){
        let crm = loadUser[j];
        console.log(crm)
    }
        /*crm.forEach(tim) 
        
    };
    function tim(x, j){
        
        if ((x >= useit && x <= 42) !== -1){
            console.log(crm)
        }
        
    };
     */
    
      
    return (
        <div className='body'>
            <div className='row body-box g-0 justify-content-between'>
                <div className='body-box-1 col-3 col-md-3'>
                    <img src={Profile} alt="Map showing the directions" className='body-box-img' />
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
    );
  }


export default Nearest;