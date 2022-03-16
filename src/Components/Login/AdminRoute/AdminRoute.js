import React from 'react';
import { CircularProgress } from '@mui/material';
// import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { user, isLoading, isAdmin } = useAuth();
    const location = useLocation();

    if (isLoading) { return <CircularProgress /> }

    if (user.email && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace />;
};

export default AdminRoute;