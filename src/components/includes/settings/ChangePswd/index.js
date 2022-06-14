import React, { useState } from 'react'
import './style.scss'
import Img from '../../../../assets/Images/changepswd-img.png'
import Load from '../../../../assets/Images/254.png'

import BaseCode from '../../../../__template__/pages/BaseCode'
import Setting from '../index'

function ChangePassword() {

    const [eye, setEye] = useState(false)
    const [eye1, setEye1] = useState(false)
    const [eye2, setEye2] = useState(false)

    const initialValues = { currentpswd: "", newpswd: "", confirmpswd: "" }
    const [formValues, setFormValues] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues)
    }

    const handleSubmit = (e) => {
        // e.preventDefault();

    }

    return (
        <Setting>
            <div className='changepassword-container'>
                <div className='leftpswd-container'>
                    <div className='left-content-container'>
                        <img src={ Load } className='upper-img' />
                        <div className='input-container' onSubmit={ handleSubmit }>
                            <div className='input-fileds'>
                                <label>Current Password</label>
                                <input type={ eye ? "text" : "password" }
                                    placeholder='Enter Current Password'
                                    value={ formValues.currentpswd }
                                    onChange={ handleChange }
                                />
                                <div className='showpswd' onClick={ () => setEye(!eye) }>
                                    <i className={ eye ? "fa fa-eye-slash" : "fa fa-eye" }></i>
                                </div>
                                {/* <p>Enter Current Password!</p> */ }
                            </div>
                            <div className='input-fileds'>
                                <label>New Password</label>
                                <input type={ eye1 ? "text" : "password" }
                                    placeholder='Enter New Password'
                                    value={ formValues.newpswd }
                                    onChange={ handleChange }
                                />
                                <div className='showpswd' onClick={ () => setEye1(!eye1) }>
                                    <i className={ eye1 ? "fa fa-eye-slash" : "fa fa-eye" }></i>
                                </div>
                            </div>
                            <div className='input-fileds'>
                                <label>Confirm Password</label>
                                <input type={ eye2 ? "text" : "password" }
                                    placeholder='Enter Confirm Password'
                                    value={ formValues.confirmpswd }
                                    onChange={ handleChange }
                                />
                                <div className='showpswd' onClick={ () => setEye2(!eye2) }>
                                    <i className={ eye2 ? "fa fa-eye-slash" : "fa fa-eye" }></i>
                                </div>
                            </div>
                            <div className='submit'>
                                <i className='bx bxs-right-arrow-circle'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Setting>
    )
}

export default ChangePassword