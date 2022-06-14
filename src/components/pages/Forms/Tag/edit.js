import React, { Fragment, useState } from 'react'
import './tagModal.scss'

function Edit({setEditModal}) {
    const [state, setstate] = useState(
        {
            tagName:"",
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
                <div className="tag-modal-body-content">
                <div className='modal-header'>
                        <span>Edit Tag</span>
                        <i className="fa fa-times" onClick={()=>setEditModal(false)}></i>
                    </div>
                    <div className="modal-input-content">
                            <div className="row">
                                <div className="input-field">
                                    <label>Tag Name </label>
                                    <input type="text" 
                                    placeholder="Enter your Company Name" 
                                    name="tagName"
                                    value={ state.tagName}
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
                    <div className="btn-container">
                        <button onClick={ () => handleSubmit()}>Save</button>
                        <button className='cancel' onClick={ () => setEditModal(false)}>Cancel</button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Edit

