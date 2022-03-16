import React from 'react';
import { CircularProgress } from '@mui/material';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) { return <CircularProgress /> }

    if (user.email ) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;