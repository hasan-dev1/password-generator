import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
      return <div>Loading...</div>
    }

    if (!user?.uid) {
      return (
        <Navigate to={"/login"}></Navigate>
      );
    }

    return children;
};

export default PrivateRoute;