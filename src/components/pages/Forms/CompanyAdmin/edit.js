import React, { Fragment, useState } from 'react'
import './companyModal.scss'

function Edit({ setEditModal }) {
    const [state, setstate] = useState(
        {
            companyName: "",
            companyCode: "",
            description: "",
            avatar: "",
            managedBy: "",
            contactName: "",
            contactNumber: "",
            address: "",
            city: "",
            state: "",
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
                        <span>Edit Company</span>
                        <i className="fa fa-times" onClick={ () => setEditModal(false) }></i>
                    </div>
                    <div className="modal-input-content">
                        <div className="row">
                            <div className="input-field">
                                <label> Company Name </label>
                                <input type="text"
                                    placeholder="Enter your Company Name"
                                    name="companyName"
                                    value={ state.companyName }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Company Code </label>
                                <input type="text"
                                    placeholder="Enter your Domains"
                                    name="companyCode"
                                    value={ state.companyCode }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Description </label>
                                <input type="text"
                                    placeholder="Type Description..."
                                    name="description"
                                    value={ state.description }
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
                                <label> Managed by </label>
                                <input type="text"
                                    placeholder="Managed By"
                                    name="managedBy"
                                    value={ state.managedBy }
                                    onChange={ handleChange }
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field">
                                <label> Contact Person Name </label>
                                <input type="text"
                                    placeholder="Enter your company Code"
                                    name="contactName"
                                    value={ state.contactName }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Contact Number </label>
                                <input type="text"
                                    placeholder="Enter your Industry"
                                    name="contactNumber"
                                    value={ state.contactNumber }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Address </label>
                                <input type="text"
                                    placeholder="Enter your company"
                                    name="address"
                                    value={ state.address }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> City </label>
                                <input type="text"
                                    placeholder="Enter your user"
                                    name="city"
                                    value={ state.city }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> State </label>
                                <input type="text"
                                    placeholder="Enter your user"
                                    name="state"
                                    value={ state.state }
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

