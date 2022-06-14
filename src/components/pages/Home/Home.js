import React, { useState, useEffect, Fragment } from "react";
import cookies from "browser-cookies";
import axios from "axios";

import './Home.scss'

const API_URL = process.env.API_URL;

//Components 
import BaseCode from '../../../__template__/pages/BaseCode';

function Home() {

    const [counts, setCounts] = useState({})

    useEffect(() => {
        fetchCount();
    }, [])

    const fetchCount = () => {
        const token = cookies.get('token');
        axios.get(`${API_URL}/api/v1/count?token=${token}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log('countrs: ', res);
                if (res.data) {
                    setCounts(res.data)
                }
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    console.log('counts: ', counts);
    return (
        <Fragment>
            <BaseCode>
                <div className="dashboard-header">
                    <div className='dashboard-box'>
                        <div className='box-left'>
                            <div className='box-head'>
                                <label>Company</label>
                            </div>
                            <div className='box-center'>
                                <label>{ counts.Company_Count }</label>
                            </div>
                            <div className='box-count'>
                                <label>Counts</label>
                            </div>
                        </div>
                        <div className='box-right'>
                            <i className='far fa-address-card'></i>
                        </div>
                    </div>
                    <div className='dashboard-box'>
                        <div className='box-left'>
                            <div className='box-head'>
                                <label>Users</label>
                            </div>
                            <div className='box-center'>
                                <label>{ counts.User_Count }</label>
                            </div>
                            <div className='box-count'>
                                <label>Counts</label>
                            </div>
                        </div>
                        <div className='box-right'>
                            <i className='far fa-address-book'></i>
                        </div>
                    </div>
                    <div className='dashboard-box'>
                        <div className='box-left'>
                            <div className='box-head'>
                                <label>Tags</label>
                            </div>
                            <div className='box-center'>
                                <label>{ counts.Tag_Count }</label>
                            </div>
                            <div className='box-count'>
                                <label>Counts</label>
                            </div>
                        </div>
                        <div className='box-right'>
                            <i className='far fa-edit'></i>
                        </div>
                    </div>
                    <div className='dashboard-box'>
                        <div className='box-left'>
                            <div className='box-head'>
                                <label>Pipeline</label>
                            </div>
                            <div className='box-center'>
                                <label>{ counts.Pipeline_Count }</label>
                            </div>
                            <div className='box-count'>
                                <label>Counts</label>
                            </div>
                        </div>
                        <div className='box-right'>
                            <i className='fa fa-send-o'></i>
                        </div>
                    </div>
                </div>
            </BaseCode>
        </Fragment>
    )
}

export default Home;
