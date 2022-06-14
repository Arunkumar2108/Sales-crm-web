import React, { useState } from 'react'
import { connect } from "react-redux";
import { login as loginUser } from "../../../actions/Auth";

import login from '../../../assets/Images/login.png'
import './index.scss'


function index(props) {

    const [eye, setEye] = useState(false)
    const [state, setState] = useState({
        username: '',
        password: '',
    });

    const onChange = (value, id) => {
        setState({
            ...state,
            [id]: value
        })
    }

    const handleSubmit = () => {
        console.log('props: ', props);
        const { loginUser } = props;
        const { username, password } = state;
        loginUser({
            userName: username,
            password
        })
    }

    return (
        <div className='login-page-container'>
            <div className='left-container'>
                <div className='left-content-container'>
                    <div className='logo-container'>
                        {/* <img src={Logo} /> */ }
                    </div>
                    <div className='greeting-container'>
                        <h3>Welcome Back!</h3>
                    </div>
                    <div className='hr-container-down'>
                        <hr className="hr-text" />
                    </div>
                    <div className='input-fields'>
                        <input type='text' placeholder='Enter Your Email' onChange={ (e) => onChange(e.target.value, 'username') } />
                        <br />
                        <input type={ eye ? "text" : "password" } placeholder='Enter Your password' onChange={ (e) => onChange(e.target.value, 'password') } />
                        <div className='showpswd' onClick={ () => setEye(!eye) }>
                            <i className={ eye ? "fa fa-eye-slash" : "fa fa-eye" }></i>
                        </div>
                    </div>
                    <div className='forgetpswd'>
                        {/* <div className='checkbox-container'>
                            <input type='checkbox' id='checkbox' />
                            <label htmlFor='checkbox'>Keep me logged in</label>
                        </div>
                        <Link to="/forgetpswd"><p><u>Forgot Password?</u></p></Link> */}
                    </div>
                    <div className='login-btn'>
                        <button onClick={ () => handleSubmit() } >Log in</button>
                    </div>
                    {/* <div className='hr-container-down'>
                        <hr className="hr-text" />
                    </div>
                    <div className='redirect-txt'>
                        <p>Don't have an account yet&nbsp;?&nbsp;<Link to="/signin"><span><u>Sign up</u></span></Link></p>
                    </div> */}
                </div>
            </div>
            <div className='right-container'>
                <img src={ login } />
            </div>
        </div>
    )
}

const mapState = (state) => {
    console.log('state: ', state);
    return {}
};
const mapDispatch = { loginUser };

export default connect(mapState, mapDispatch)(index);