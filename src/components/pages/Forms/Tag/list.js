import React, { useState, useEffect, Fragment } from "react";
import cookies from "browser-cookies";
import axios from "axios";
import Delete from '../../../shared/DeleteModal/DeleteModal'
import MediumModal from '../../../shared/Modals/MediumModal'
import Edit from './edit'
import Create from './create'
import '../index.scss'

const API_URL = process.env.API_URL;


function ReactTable({ items, deleteContact, isLoading }) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [createModal, setCreateModal] = useState(false)
    const [tagList, setTagList] = useState([])
    useEffect(() => {
        fetchTag();
    }, [])

    const fetchTag = () => {
        const token = cookies.get('token');
        axios.get(`${API_URL}/api/v1/tag?token=${token}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log('userList: ', res);
                if (res.data) {
                    setTagList(res.data)
                }
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    const handleDelete = (id) => {
        console.log('id: ', id);
        const token = cookies.get('token');
        axios.delete(`${API_URL}/api/v1/tag/${id}?token=${token}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                fetchTag();
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    const renderTableData = () => {
        return tagList.map((item, index) => (
            <tr key={ index }>
                <td className="td-hover">{ item.tagName }</td>
                <td className="td-hover">{ item.description }</td>
                <td className="td-hover"><button type="button" onClick={ () => handleDelete(item.id) }><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button><button type="button" onClick={ () => handleDelete(item.id) }><i className="fa fa-trash" aria-hidden="true"></i></button></td>
            </tr>
        ))
    }

    return (
        <Fragment>
            <div className='table-body-container'>
                <div className='formslist-lable'>
                    <div className='lable-header'><label name="prd">Tag</label></div>
                    <div className='filter-submit'>
                        <div className="submit-lable" onClick={ () => setCreateModal(true) }> <i className='fas fa-plus'></i>New Tag</div>
                    </div>
                </div>
                <div className='formslist-table'>
                    <table>
                        <thead>
                            <tr className='table-top'>
                                <th>Tag Name</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                renderTableData()
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                createModal && <MediumModal ><Create setCreateModal={ setCreateModal } fetchTag={ fetchTag } /></MediumModal>
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
