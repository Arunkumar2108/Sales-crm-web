import React, { Fragment, Component, useState } from 'react'
import './scopeModal.scss'

import Multi from './Multi'


function Create({setCreateModal}) {
    const [state, setstate] = useState(
        {
            scopeName:"",
            description:"",
        }
    )

   const handleChange = (e) =>{
       const {name, value} = e.target;
       setstate({...state, [name]:value});
       console.log(state)
   }

   const handleSubmit = () =>{
       e.preventDefault()
   }
    return (
        <Fragment>
            <div className="model-body">
                <div className="scope-modal-body-content">
                <div className='modal-header'>
                        <span>Create Scope</span>
                        <i className="fa fa-times" onClick={()=>setCreateModal(false)}></i>
                    </div>
                    <div className="modal-input-content">
                        <div className="row">
                            <div className="input-field">
                                <label>Scope Name </label>
                                <input type="text" 
                                placeholder="Enter your Company Name" 
                                name="scopeName"
                                value={ state.scopeName}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="input-field">
                                <label> Description </label>
                                <input type="text" 
                                placeholder="Enter your Domains" 
                                name="description"
                                value={ state.description}
                                onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='multi'><Multi/></div>
                    <div className="btn-container">
                        <button onClick={ () => handleSubmit()}>Save</button>
                        <button className='cancel' onClick={()=>setCreateModal(false)}>Cancel</button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Create

