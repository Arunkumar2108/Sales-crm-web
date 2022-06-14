import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux"
import { useTable } from "react-table";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons"
import { Tooltip } from "@material-ui/core";
import Delete from '../../../shared/DeleteModal/DeleteModal'
import MediumModal from '../../../shared/Modals/MediumModal'
import Edit from './edit'
import Create from './create'
import '../index.scss'


function ReactTable({ items, deleteContact, isLoading }) {
    const [modalIsOpen, setModalIsOpen]=useState(false)
    const [editModal, setEditModal] = useState(false)
    const[createModal, setCreateModal] = useState(false)
   
    return (
        <Fragment>
            <div className='table-body-container'>
                <div className='formslist-lable'>
                    <div className='lable-header'><label name="prd">Roles</label></div>
                    <div className='filter-submit'>
                        <div className="submit-lable" onClick={ () => setCreateModal(true)}> <i className='fas fa-plus'></i>New Roles</div>
                    </div>
                </div>
                    <div className='formslist-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Role Name</th>
                                    <th>Description Code</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>WOOD CHAIR</td>
                                    <td>CHAIR</td>
                                    <td>
                                        <button type="button" onClick={ () => setEditModal(true)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button type="button" onClick={ () => setModalIsOpen(true)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                                    </td>
                                </tr>  
                                                                             
                            </tbody>
                        </table>
                    </div>
                    <div className="list-footer">
                        <div className="footer-center">
                            <div className="left-lable1">
                                <label name="footer">Results per page : 1 </label>
                            </div>
                            <div className="left-lable2">
                                <label name="footer">Page : 1 of 1 </label>
                            </div>
                            <div className="left-lable3">
                                <label name="footer">Results 5 of 5 </label>
                            </div>
                        </div>
                        <div className="footer-corner">
                            <div className="prev"> <label name="footer"><i className='fas fa-angle-left' />Previous</label></div>
                            <div className="next"> <label name="footer">Next<i className='fas fa-angle-right' /></label></div>
                        </div>
                    </div>
            </div>
            {
                createModal && <MediumModal ><Create setCreateModal = {setCreateModal}/></MediumModal>
            }
            {
                editModal && <MediumModal><Edit setEditModal = {setEditModal}/></MediumModal>
            }
            {
                modalIsOpen && <Delete setModalIsOpen={setModalIsOpen} />
            }
        </Fragment>
    );
}

export default ReactTable;
