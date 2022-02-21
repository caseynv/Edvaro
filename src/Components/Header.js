import React from 'react';
import Logo from '../Images/logoName.png';
import Profile from '../Images/profilePic.png';


import {Icon} from '@iconify/react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";




function Header() {
    return (
        <>
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
            <div className='row navigation g-0'>
                <div className='navigation--left col-6'>
                    <div className='navigation--body--1'>
                        <Link className="navigation--body" to="/NearestRides" target="NearestRides"> Nearest rides</Link>

                    </div>
                    <div className='navigation--body--2'>
                        <Link className="navigation--body" to="/UpcomingRides" target="_blank"> Upcoming rides</Link>

                    </div>
                    <div className='navigation--body--3'>
                        <Link className="navigation--body" to="/PastRides" target="_blank"> Past rides</Link>

                    </div>
                </div>
                <div className='navigation--right col-1'>
                    <Dropdown>
                        <Dropdown.Toggle className="filter--button" id="dropdown-basic">
                            <Icon icon="bi:filter-left" width="25" height="25"/>
                            Filter
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown--bg">
                            <Dropdown.Item className="dropdown--bg">Filters</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2" className="dropdown--bg">State</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" className="dropdown--bg">City</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </>
    );
  }


export default Header;