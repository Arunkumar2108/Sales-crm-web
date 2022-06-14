import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom';

import Basecode from '../../../__template__/pages/BaseCode'
import ChangePswd from './ChangePswd/index'

function settings({ children }) {
  return (
    <>
        <Basecode>
            <div className='settings-page'>
                <div className='left-container'>
                    <div className='left-content-container'>
                        <Link to='/login'><span>Log In</span></Link>
                        <Link to='/signin'><span>Signup</span></Link>
                        <Link to='/profile'><span>Profile</span></Link>
                        <Link to='/changePassword'><span>Change Password</span></Link>
                        <Link to='/'><span>Logout</span></Link>
                    </div>
                </div>
                <div className='right-container'>
                    {children}
                </div>
            </div>
        </Basecode>
    </>
  )
}

export default settings