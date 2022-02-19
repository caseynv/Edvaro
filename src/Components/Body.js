import React from 'react';
import Profile from '../mapUrl.png';


function Body(props) {
    
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


export default Body;