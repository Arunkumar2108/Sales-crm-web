import { Style } from '@material-ui/icons'
import React, { useState , useEffect, useRef } from 'react'
import './deleteModal.scss'

function DeleteModal({setModalIsOpen}) {
 
  return (
    <div className="delete-backdrop">
             <div className="delete-container">
                 <div className="delete-header">
                    <span>Delete</span>
                    <i className='bx bx-x' onClick={ () => setModalIsOpen(false)}></i>
                 </div>
                 <div className="delete-body">
                     <span className="content">
                         <i className="fa fa-trash" aria-hidden="true"></i>
                         <span className="txt">
                             <p>Are you sure want to delete?</p>
                             <p>you can't undo this action.</p>
                         </span>
                     </span>
                     <div className="btn">
                         <button className="cancel" onClick={ () => setModalIsOpen(false)}>Cancel</button>
                         <button className="delete">Delete</button>
                     </div>
                 </div>
             </div>
        </div>
  )
}

export default DeleteModal