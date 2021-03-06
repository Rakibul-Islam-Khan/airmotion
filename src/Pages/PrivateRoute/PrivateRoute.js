import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const PrivateRoute = ({ children, ...rest }) => {
    const {users, isLoading} = useAuth()
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => users.email ?
                children :
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                >
                </Redirect>}
            >
        </Route>
    );
};

export default PrivateRoute;