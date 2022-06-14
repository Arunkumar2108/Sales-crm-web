import React from 'react';
import { Redirect } from 'react-router-dom';
import cookies from 'browser-cookies'

// Component 
import Signup from '../../components/includes/signup'

function SignUpRoute() {
    const hasCookie = cookies.get('token');
    return (hasCookie) ? <Redirect to="/dashboard" /> : <Signup />
}

export default SignUpRoute
