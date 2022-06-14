import React, { Fragment, useState, useEffect } from 'react'
import cookies from "browser-cookies";
import axios from "axios";

import Select from 'react-select';
import './userModal.scss'

const API_URL = process.env.API_URL;


function Create({ setCreateModal }) {
    const [state, setstate] = useState(
        {
            firstName: "",
            middleName: "",
            lastName: "",
            suffix: "",
            email: "",
            mobileNo: "",
            userName: "",
            password: "",
            roles: "",
            company: ""
        }
    )
    const [companyList, setCompanyList] = useState([])
    const [optionList, setOptionList] = useState([])
    const [roleList, setRoleList] = useState([])
    const [roleOptionList, setRoleOptionList] = useState([])

    useEffect(() => {
        fetchCompany();
    }, [])

    useEffect(() => {
        fetchRole();
    }, [])

    const fetchRole = () => {
        const token = cookies.get('token');
        console.log('token: ', token);
        axios.get(`${API_URL}/api/v1/roles?token=${token}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                const sortedList = [];
                if (res.data) {
                    console.log('roles:', res.data);
                    res.data.forEach(li => {
                        sortedList.push({
                            value: li.id,
                            label: li.roleName
                        })
                    })
                    setRoleOptionList(sortedList)
                    setRoleList(res.data)
                }
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    const fetchCompany = () => {
        const token = cookies.get('token');
        console.log('token: ', token);
        axios.get(`${API_URL}/api/v1/company/admin?token=${token}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log('res: ', res);
                const sortedList = [];
                if (res.data) {
                    console.log('res:', res.data);
                    res.data.forEach(li => {
                        sortedList.push({
                            value: li.id,
                            label: li.companyName
                        })
                    })
                    setOptionList(sortedList)
                    setCompanyList(res.data)
                }
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setstate({ ...state, [name]: value });
        console.log(state)
    }

    const handleDropdown = (e, id) => {
        console.log('e, id: ', e, id)
        setstate({ ...state, [id]: e });
    }



    const handleSubmit = () => {
        const token = cookies.get('token');

        const { firstName, lastName, middleName, roles, company, userName, password, mobileNo, email } = state;
        const body = {
            firstName,
            lastName,
            middleName,
            avatar: 'avatar',
            suffix: 'Mr',
            userName,
            password,
            mobileNo,
            email
        }
        axios.post(`${API_URL}/api/v1/users/create?token=${token}&company=${company.value.toString()}&role=${roles.value.toString()}`, { ...body }, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                // fetchCompany()
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
                <div className="company-modal-body-content">
                    <div className='modal-header'>
                        <span>Create User</span>
                        <i className="fa fa-times" onClick={ () => setCreateModal(false) }></i>
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
                                <label> Email </label>
                                <input type="text"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={ state.email }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Mobile No </label>
                                <input type="text"
                                    placeholder="Enter your Name"
                                    name="mobileNo"
                                    value={ state.mobileNo }
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
                            <div className="input-field">
                                <label> Company </label>
                                <Select
                                    options={ optionList }
                                    defaultValue={ state.company }
                                    onChange={ (e) => handleDropdown(e, 'company') }
                                    placeholder="Choose Status"
                                    isSearchable
                                    isClearable
                                />
                            </div>
                            <div className="input-field">
                                <label> Roles </label>
                                <Select
                                    options={ roleOptionList }
                                    defaultValue={ state.roles }
                                    onChange={ (e) => handleDropdown(e, 'roles') }
                                    placeholder="Choose Status"
                                    isSearchable
                                    isClearable
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

export default Create

