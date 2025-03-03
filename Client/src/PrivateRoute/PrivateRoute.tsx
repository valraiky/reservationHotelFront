import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import React from 'react';

interface PrivateRouteProps {
    element: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Element, ...rest }) => {
    const { role, token} = useContext(DataContext);
    return (role === "Admin" && token) ? <Element {...rest} /> : <Navigate to="/Connexion" />;
};

export default PrivateRoute;
