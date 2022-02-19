import React from 'react';
import {Icon} from '@iconify/react';


function Navigation() {
    return (
        <div className='row navigation g-0'>
            <div className='navigation--left col-6'>
                <div className='navigation--body--1 col-lg-4 col-sm-4'>
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
                <Icon icon="bi:filter-left" />
                <p className='nav--right--text'>Filter</p>
            </div>
        </div>
    );
  }


export default Navigation;