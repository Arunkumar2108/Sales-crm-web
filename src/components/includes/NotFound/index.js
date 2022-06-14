import React from 'react'
import { Link } from 'react-router-dom'
import error from '../../../assets/img/404.png';
import './index.scss'

export default function NotFound() {
    return (
        <div className="notfound__wrapper">
            <div className="notfound-container">
                <div className="poster-box">
                    <img src={ error } alt="" />
                </div>
                <div className="text-content">
                    <div className="nf-text">Oops,</div>
                    <div className="nf-text"><span>nothing</span>here...</div>
                    <Link to="/dashboard">Go Dashboard</Link>
                </div>
            </div>

        </div>
    )
}
