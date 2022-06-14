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
    const [companyList, setCompanyList] = useState([])

    useEffect(() => {
        fetchCompany();
    }, [])

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
                if (res.data) {
                    setCompanyList(res.data)
                }
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    const handleDelete = (id) => {
        console.log('id: ', id);
        axios.delete(`${API_URL}/api/v1/company/${id}?token=${token}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                fetchCompany();
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }


    const renderTableData = () => {
        return companyList.map((item, index) => (
            <tr key={ index }>
                <td className="td-hover">{ item.companyName }</td>
                <td className="td-hover">{ item.companyCode }</td>
                <td className="td-hover">{ item.contactPersonName }</td>
                <td className="td-hover">{ item.phoneNo }</td>
                <td className="td-hover">{ item.description }</td>
                <td className="td-hover"><button type="button" onClick={ () => handleDelete(item.id) }><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button><button type="button" onClick={ () => handleDelete(item.id) }><i className="fa fa-trash" aria-hidden="true"></i></button></td>
            </tr>
        ))
    }

    return (
        <Fragment>
            <div className='table-body-container'>
                <div className='formslist-lable'>
                    <div className='lable-header'><label name="prd">Company</label></div>
                    <div className='filter-submit'>
                        <div className="submit-lable" onClick={ () => setCreateModal(true) }> <i className='fas fa-plus'></i>New Company</div>
                    </div>
                </div>
                <div className='formslist-table'>
                    <table>
                        <thead>
                            <tr className='table-top'>
                                <th>Company Name</th>
                                <th>Company Code</th>
                                <th>Contact Person Name</th>
                                <th>Phone No</th>
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
                createModal && <MediumModal ><Create setCreateModal={ setCreateModal } fetchCompany={ fetchCompany } /></MediumModal>
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
