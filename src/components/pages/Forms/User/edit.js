import React, { Fragment, useState } from 'react'
import './userModal.scss'

function Edit({ setEditModal }) {
    const [state, setstate] = useState(
        {
            firstName: "",
            middleName: "",
            lastName: "",
            suffix: "",
            email: "",
            contactNumber: "",
            userName: "",
            password: "",
            avatar: "",
            roles: "",
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setstate({ ...state, [name]: value });
        console.log(state)
    }

    const handleSubmit = () => {
        e.preventDefault()
    }
    return (
        <Fragment>
            <div className="model-body">
                <div className="company-modal-body-content">
                    <div className='modal-header'>
                        <span>Edit User</span>
                        <i className="fa fa-times" onClick={ () => setEditModal(false) }></i>
                    </div>
                    <div className="modal-input-content">
                        <div className="row">
                            <div className="input-field">
                                <label> First Name </label>
                                <input type="text"
                                    placeholder="Enter your First Name"
                                    name="firstName"
                                    value={ state.firstName }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Middle Name </label>
                                <input type="text"
                                    placeholder="Enter your Middle Name"
                                    name="middleName"
                                    value={ state.middleName }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Last Name </label>
                                <input type='text'
                                    placeholder="Type Last Name"
                                    name="lastName"
                                    value={ state.lastName }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Suffix </label>
                                <input type="text"
                                    placeholder="Enter your Suffix"
                                    name="suffix"
                                    value={ state.suffix }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Email </label>
                                <input type="text"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={ state.email }
                                    onChange={ handleChange }
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field">
                                <label> Contact Person Number </label>
                                <input type="text"
                                    placeholder="Enter your Name"
                                    name="contactNumber"
                                    value={ state.contactNumber }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> UserName </label>
                                <input type="text"
                                    placeholder="Enter your UserName"
                                    name="userName"
                                    value={ state.userName }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Password </label>
                                <input type="text"
                                    placeholder="Enter your Password"
                                    name="password"
                                    value={ state.password }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field-file">
                                <label> Avatar</label>
                                <div className='file-container'>
                                    <input type="file"
                                        className='upload-box' id='file-input' title=""
                                        name="avatar"
                                        value={ state.avatar }
                                        onChange={ handleChange }
                                    />
                                    <div className='tooltip'>
                                        <label htmlFor='file-input'>
                                            <i className='bx bx-cloud-upload'></i></label>
                                        <span className="tooltip-text">Choose Avatar</span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-field">
                                <label> Roles </label>
                                <input type="text"
                                    placeholder="Enter your Roles"
                                    name="roles"
                                    value={ state.roles }
                                    onChange={ handleChange }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button onClick={ () => handleSubmit() }>Save</button>
                        <button className='cancel' onClick={ () => setEditModal(false) }>Cancel</button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Edit

