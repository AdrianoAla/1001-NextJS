import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { auth } from './Firebase';
import { Navigate } from 'react-router';
export interface IAuthRouteProps { }

export default function  AuthRoute({ children }): any {

    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setLoading(false);
            }
        })}, []);
    
    if (loading) {
        return <div>Loading...</div>
    }
    
    return (
        <div>{ children }</div>
    );
}
