import React, { Fragment, useState } from 'react'
import cookies from "browser-cookies";
import axios from "axios";
import './tagModal.scss'

const API_URL = process.env.API_URL;

function Create({ setCreateModal, fetchTag }) {
    const [state, setstate] = useState(
        {
            tagName: "",
            description: "",
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setstate({ ...state, [name]: value });
        console.log(state)
    }

    const handleSubmit = () => {
        const { tagName, description } = state;
        const body = {
            tagName,
            description
        }
        const token = cookies.get('token');
        axios.post(`${API_URL}/api/v1/tag/create?token=${token}`, { ...body }, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                fetchTag();
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
                <div className="tag-modal-body-content">
                    <div className='modal-header'>
                        <span>Create Tag</span>
                        <i className="fa fa-times" onClick={ () => setCreateModal(false) }></i>
                    </div>
                    <div className="modal-input-content">
                        <div className="row">
                            <div className="input-field">
                                <label>Tag Name </label>
                                <input type="text"
                                    placeholder="Enter your Company Name"
                                    name="tagName"
                                    value={ state.tagName }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Description </label>
                                <input type="text"
                                    placeholder="Enter your Domains"
                                    name="description"
                                    value={ state.description }
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

export default Create

