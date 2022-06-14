import React from 'react';
import { Redirect } from 'react-router-dom';
import cookies from 'browser-cookies'

// Component 
import SignIn from '../../components/includes/Login'

function SignInRoute() {
    const hasCookie = cookies.get('token');
    return (hasCookie) ? <Redirect to="/dashboard" /> : <SignIn />
}

export default SignInRoute
