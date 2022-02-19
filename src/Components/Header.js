import React from 'react';
import Logo from '../logoName.png';
import Profile from '../profilePic.png';

function Header() {
    return (
        <div className='row header g-0 justify-content-between'>
            <div className='header--left col-lg-4 col-sm-4'>
                <img src={Logo} alt="Edvaro" className='logo'/>
            </div>
            <div className='header--right col-lg-3 col-md-4 col-sm-4'>
                <div className='header--para'>
                        Dhruv Singh
                </div>
                <img src={Profile} alt="User" className='img--user' />
            </div>
        </div>
    );
  }


export default Header;