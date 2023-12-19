import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../autenticacion';


export const PublicRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );

    return (!logged)
        ? children
        : <Navigate to="/marvel" />
}