import { lazy } from 'react';


const Signin = lazy(() => import('./SignIn'));
const Signup = lazy(() => import('./SignUp'));

import Home from "../components/pages/Home/Home";
import Settings from '../components/includes/settings'
import ChangePswd from "../components/includes/settings/ChangePswd";
import Profie from "../components/includes/settings/profile";
import NotFound from "../components/includes/NotFound";

import master from './master'
const routes = [
    {
        path: "/",
        component: Signin,
        protectedRoute: false,
    },
    {
        path: "/dashboard",
        component: Home,
        protectedRoute: true,
    },
    {
        path: "/signup",
        component: Signup,
        protectedRoute: false,
    },
    ...master,
    // {
    //     path: "/settings",
    //     component: Settings,
    //     protectedRoute: false,
    // },
    // {
    //     path: "/changePassword",
    //     component: ChangePswd,
    //     protectedRoute: false,
    // },
    // {
    //     path: "/profile",
    //     component: Profie,
    //     protectedRoute: false,
    // },
    {
        component: NotFound, // Always Should be here
    },
]


export default routes;