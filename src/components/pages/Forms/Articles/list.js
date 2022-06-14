import React, { useState, useEffect, Fragment } from "react";
import { Link } from 'react-router-dom';
import Delete from '../../../shared/DeleteModal/DeleteModal'
import MediumModal from '../../../shared/Modals/MediumModal'
import '../index.scss'


function ReactTable() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [createModal, setCreateModal] = useState(false)

    return (
        <Fragment>
            <div className='table-body-container'>
                <div className='formslist-lable'>
                    <div className='lable-header'><label name="prd">Article</label></div>
                    <div className='filter-submit'>
                        <Link to='/articleContent'><div className="submit-lable"> <i className='fas fa-plus'></i>New Article</div></Link>
                    </div>
                </div>
                <div className='formslist-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Tag Name</th>
                                <th>Description</th>
                                <th>Keywords</th>
                                <th>Views</th>
                                <th>Likes</th>
                                <th>Dislikes</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>WOOD CHAIR</td>
                                <td>CHAIR</td>
                                <td>CHAIR</td>
                                <td>CHAIR</td>
                                <td>CHAIR</td>
                                <td>CHAIR</td>
                                <td>
                                    <Link to='/articleContent'><button type="button"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
                                    <button type="button" onClick={ () => setModalIsOpen(true) }><i className="fa fa-trash" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {
                createModal && <MediumModal ><Create setCreateModal={ setCreateModal } /></MediumModal>
            }
            {
                editModal && <MediumModal><Edit setEditModal={ setEditModal } /></MediumModal>
            }
            {
                modalIsOpen && <Delete setModalIsOpen={ setModalIsOpen } />
            }
        </Fragment>
    );
}

export default ReactTable;
