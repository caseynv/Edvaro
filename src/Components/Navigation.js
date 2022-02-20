import React from 'react';
import {Icon} from '@iconify/react';
import Dropdown from 'react-bootstrap/Dropdown';


function Navigation() {
    return (
        <div className='row navigation g-0'>
            <div className='navigation--left col-6'>
                <div className='navigation--body--1'>
                    Nearest rides
                </div>
                <div className='navigation--body--2'>
                    Upcoming rides
                </div>
                <div className='navigation--body--3'>
                    Past rides
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
    );
    }


export default Navigation;