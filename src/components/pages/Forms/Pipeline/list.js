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
    const [pipelineList, setPipelineList] = useState([])

    useEffect(() => {
        fetchPipeline();
    }, [])

    const fetchPipeline = () => {
        const token = cookies.get('token');
        console.log('token: ', token);
        axios.get(`${API_URL}/api/v1/pipeline?token=${token}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log('res: ', res);
                if (res.data) {
                    setPipelineList(res.data)
                }
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    const handleDelete = (id) => {
        const token = cookies.get('token');
        axios.delete(`${API_URL}/api/v1/pipeline/${id}?token=${token}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                fetchPipeline();
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    const renderTableData = () => {
        return pipelineList.map((item, index) => (
            <tr key={ index }>
                <td className="td-hover">{ item.name }</td>
                <td className="td-hover">{ item.primaryContact }</td>
                <td className="td-hover">{ item.company }</td>
                <td className="td-hover">{ item.status }</td>
                <td className="td-hover">{ item.source }</td>
                <td className="td-hover">{ item.value }</td>
                <td className="td-hover">{ item.priority }</td>
                <td className="td-hover">{ item.description }</td>
                <td className="td-hover"><button type="button" onClick={ () => handleDelete(item.id) }><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button><button type="button" onClick={ () => handleDelete(item.id) }><i className="fa fa-trash" aria-hidden="true"></i></button></td>
            </tr>
        ))
    }

    return (
        <Fragment>
            <div className='table-body-container'>
                <div className='formslist-lable'>
                    <div className='lable-header'><label name="prd">Pipeline</label></div>
                    <div className='filter-submit'>
                        <div className="submit-lable" onClick={ () => setCreateModal(true) }> <i className='fas fa-plus'></i>New Pipeline</div>
                    </div>
                </div>
                <div className='formslist-table'>
                    <table>
                        <thead>
                            <tr className='table-top'>
                                <th>Name</th>
                                <th>Primary Contact</th>
                                <th>Company</th>
                                <th>Status</th>
                                <th>Source</th>
                                <th>Value</th>
                                <th>Priority</th>
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
                createModal && <MediumModal ><Create setCreateModal={ setCreateModal } fetchPipeline={fetchPipeline}/></MediumModal>
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
