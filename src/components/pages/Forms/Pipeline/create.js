import React, { Fragment, useState } from 'react'
import axios from "axios";
import cookies from "browser-cookies";
import Select from 'react-select'


import './index.scss'
const API_URL = process.env.API_URL;

function Create({ setCreateModal,fetchPipeline }) {
    const [state, setstate] = useState(
        {
            name: "",
            primaryContact: "",
            company: "",
            closedDate: "",
            status: "",
            stage: "",
            source: "",
            value: "",
            winPercentage: "",
            priority: "",
            description: "",
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setstate({ ...state, [name]: value });
    }

    const handleSubmit = () => {
        const token = cookies.get('token');
        const { name, primaryContact, company, closedDate, status, stage, source, value, winPercentage, priority, description } = state;
        const body = {
            name, primaryContact, company, status: status.value, stage: stage.value, source: source.value, value, winPercentage, priority: priority.value, description
        }

        console.log('body: ', body);

        axios.post(`${API_URL}/api/v1/pipeline/create/1?date=${closedDate}&token=${token}`, body, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                fetchPipeline()
                setCreateModal(false)
                console.log('res: ', res);

            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            color: state.selectProps.menuColor,
            padding: 5,
        }),

        option: (provided, state) => ({
            ...provided,
            color: state.selectProps.menuColor,
            backgroundColor: state.selectProps.menuBgColor,
            cursor: 'pointer',
            fontSize: 15
        }),
        placeholder: (provided, state) => ({
            ...provided,
            fontSize: 13
        }),
    }


    const optionsStatus = [
        { label: 'Won', value: 'WON' },
        { label: 'Abandoned', value: 'ABANDONED' },
        { label: 'Loss', value: 'LOSS' },
        { label: 'Open', value: 'OPEN' },
    ]

    const optionsSource = [
        { label: 'No Source', value: 'NO_SOURCE' },
        { label: 'Email', value: 'EMAIL' },
        { label: 'Cold Call', value: 'COLD_CALL' },
        { label: 'Advertising', value: 'ADVERTISING' },
    ]

    const optionsStage = [
        { label: 'New Opportunity', value: 'NEW_OPPORTUNITY' },
        { label: 'Proposal', value: 'PROPOSAL' },
        { label: 'Product Demos', value: 'PRODUCT_DEMOS' },
        { label: 'Closing', value: 'CLOSING' },
    ]

    const optionsPriority = [
        { label: 'None', value: 'NONE' },
        { label: 'Low', value: 'LOW' },
        { label: 'Medium', value: 'MEDIUM' },
        { label: 'High', value: 'HIGH' },
    ]

    const handleDropdown = (e, id) => {
        console.log('e, id: ', e, id)
        setstate({ ...state, [id]: e });
    }

    return (
        <Fragment>
            <div className="model-body">
                <div className="pipeline-modal-body-content">
                    <div className='modal-header'>
                        <span>Create Pipeline / Opportunity</span>
                        <i className="fa fa-times" onClick={ () => setCreateModal(false) }></i>
                    </div>
                    <div className="modal-input-content">
                        <div className="row">
                            <div className="input-field">
                                <label> Name </label>
                                <input type="text"
                                    placeholder="Add Name"
                                    name="name"
                                    value={ state.name }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Primary Contact </label>
                                <input type="text"
                                    placeholder="Type primaryContact"
                                    name="primaryContact"
                                    value={ state.primaryContact }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Closed Date </label>
                                <input type="date"
                                    placeholder="Enter your company Code"
                                    name="closedDate"
                                    value={ state.closedDate }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Company </label>
                                <input type="text"
                                    placeholder="Enter your Industry"
                                    name="company"
                                    value={ state.company }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Status </label>
                                <Select
                                    options={ optionsStatus }
                                    styles={ customStyles }
                                    onChange={ (e) => handleDropdown(e, 'status') }
                                    menuColor='black'
                                    menuBgColor='white'
                                    placeholder="Choose Status"
                                    isSearchable
                                    isClearable
                                />
                            </div>
                            <div className="input-field">
                                <label> Stage </label>
                                <Select
                                    options={ optionsStage }
                                    styles={ customStyles }
                                    menuColor='black'
                                    menuBgColor='white'
                                    placeholder="Choose Stage"
                                    onChange={ (e) => handleDropdown(e, 'stage') }
                                    isSearchable
                                    isClearable
                                />
                            </div>
                            <div className="input-field">
                                <label> Source </label>
                                <Select
                                    options={ optionsSource }
                                    styles={ customStyles }
                                    menuColor='black'
                                    menuBgColor='white'
                                    placeholder="Choose Source"
                                    onChange={ (e) => handleDropdown(e, 'source') }
                                    isSearchable
                                    isClearable
                                />
                            </div>
                            <div className="input-field">
                                <label> Value </label>
                                <input type="text"
                                    placeholder="Enter your user"
                                    name="value"
                                    value={ state.value }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Priority </label>
                                <Select
                                    options={ optionsPriority }
                                    styles={ customStyles }
                                    menuColor='black'
                                    menuBgColor='white'
                                    onChange={ (e) => handleDropdown(e, 'priority') }
                                    placeholder="Choose Priority"
                                    isSearchable
                                    isClearable
                                />
                            </div>
                            <div className="input-field">
                                <label> Win Percentage </label>
                                <input type="text"
                                    placeholder="Enter your user"
                                    name="winPercentage"
                                    value={ state.winPercentage }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div className="input-field">
                                <label> Description </label>
                                <input type="text"
                                    placeholder="Enter your user"
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

export default Create;

