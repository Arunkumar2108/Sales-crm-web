import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

//Images
// import Logo from '../../../assets/Images/Logo.png'

function Header({ handleModal, btnLable, pageTitle, userInfo }) {

    const[showprofile, setShowProfile]= useState(false)


    const ref=useRef()
    useEffect(()=>{
        const checkIfClickedOutside= (e)=> {
            // console.log('e: ', showprofile, ref.current, !ref.current.contains(e.target))

            if(showprofile && ref.current && !ref.current.contains(e.target)){
                // console.log('if e: ', ref)
                setShowProfile(false);
            }
        };
        document.addEventListener("click",checkIfClickedOutside);
        return()=>{
            document.removeEventListener("click",checkIfClickedOutside);
        };
    },[ref, showprofile]);    

    // console.log('ref: ', showprofile, ref)
    
    return (
        <Fragment>
            <div className="ed-header-container">
                <div className="ed-header-content">
                    <div className="ed-header-wrapper">
                        <div className="logo__holder">
                            <div className="title"> {pageTitle} </div>
                        </div>
                            {/* <div ref={ref} className="ed-header-profile" onClick={() => {setShowProfile(!showprofile)}}  >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Hu2eNKm440U5RJE3-Y-3OCZN03IDt88vX3OKaS_yEwti99unEcCjKg1F4T8s3JFrrHg&usqp=CAU" 
                                alt="Profile" 
                                className="profile"
                                />
                                <div className={showprofile ? "dropdown-navigation" : "dropdown-navigation-onhide"} >
                                    <li><Link to="/signin"> Profile Page</Link></li>
                                    <li><Link to="/login">Subscription</Link></li>  
                                      <hr />
                                    <li><Link to="/changepassword">Change Password</Link></li>
                                    <li><a href='#'>Logout</a></li>
                                </div>
                                <div className="profile-text">
                                    <div className="profile-name"> Welcome </div>
                                    <div className="profile-post"> Riyaz </div>
                                </div>
                            </div> */}
                        {
                            btnLable ? <div className="btn-content">
                                <button onClick={() => { handleModal() }}> {btnLable} </button>
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header
