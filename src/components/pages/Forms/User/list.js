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
    const [userList, setUserList] = useState([])


    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = () => {
        const token = cookies.get('token');
        console.log('token: ', token);
        axios.get(`${API_URL}/api/v1/users?token=${token}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log('userList: ', res);
                if (res.data) {
                    setUserList(res.data)
                }
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    const handleDelete = (id) => {
        const token = cookies.get('token');
        axios.delete(`${API_URL}/api/v1/users/${id}?token=${token}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                fetchUser();
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    const renderTableData = () => {
        return userList.map((item, index) => (
            <tr key={ index }>
                <td className="td-hover">{ item.firstName }</td>
                <td className="td-hover">{ item.middleName }</td>
                <td className="td-hover">{ item.lastName }</td>
                <td className="td-hover">{ item.email }</td>
                <td className="td-hover">{ item.mobileNo }</td>
                <td className="td-hover">{ item.userName }</td>
                <td className="td-hover"><button type="button" onClick={ () => handleDelete(item.id) }><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button><button type="button" onClick={ () => handleDelete(item.id) }><i className="fa fa-trash" aria-hidden="true"></i></button></td>
            </tr>
        ))
    }



    return (
        <Fragment>
            <div className='table-body-container'>
                <div className='formslist-lable'>
                    <div className='lable-header'><label name="prd">User</label></div>
                    <div className='filter-submit'>
                        <div className="submit-lable" onClick={ () => setCreateModal(true) }> <i className='fas fa-plus'></i>New User</div>
                    </div>
                </div>
                <div className='formslist-table'>
                    <table>
                        <thead>
                            <tr className='table-top'>
                                <th>First Name</th>
                                <th>Middle Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Mobile No</th>
                                <th>Username</th>
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
                createModal && <MediumModal ><Create setCreateModal={ setCreateModal } fetchUser={fetchUser} /></MediumModal>
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
