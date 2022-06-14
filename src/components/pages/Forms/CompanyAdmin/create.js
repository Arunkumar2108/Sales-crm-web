import React, { Fragment, useState } from 'react'
import axios from "axios";
import cookies from "browser-cookies";


import './companyModal.scss'
const API_URL = process.env.API_URL;

function Create({ setCreateModal, fetchCompany }) {
    const [state, setstate] = useState(
        {
            companyName: "",
            companyCode: "",
            description: "",
            contactPersonName: "",
            phoneNo: "",
            address: "",
            city: "",
            state: "",
            country: "",
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setstate({ ...state, [name]: value });
    }

    const handleSubmit = () => {
        const token = cookies.get('token');
        axios.post(`${API_URL}/api/v1/company/create?token=${token}`, { ...state }, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                fetchCompany()
                setCreateModal(false)
                console.log('res: ', res);

            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    return (
        <Fragment>
            <div className="model-body">
                <div className="user-modal-body-content">
                    <div className='modal-header'>
                        <span>Create Company</span>
                        <i className="fa fa-times" onClick={ () => setCreateModal(false) }></i>
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
                            <div className="input-field">
                                <label> Contact Person Name </label>
                                <input type="text"
                                    placeholder="Enter your company Code"
                                    name="contactPersonName"
                                    value={ state.contactPersonName }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Phone No </label>
                                <input type="text"
                                    placeholder="Enter your Industry"
                                    name="phoneNo"
                                    value={ state.phoneNo }
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
                                <label> State </label>
                                <input type="text"
                                    placeholder="Enter your user"
                                    name="state"
                                    value={ state.state }
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
                                <label> Country </label>
                                <input type="text"
                                    placeholder="Enter your user"
                                    name="country"
                                    value={ state.country }
                                    onChange={ handleChange }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button onClick={ () => handleSubmit() }>Save</button>
                        <button className='cancel' onClick={ () => setCreateModal(false) }>Cancel</button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Create;

