import React, { useEffect } from 'react';
import router, { useRouter } from 'next/router'
import { auth } from './Firebase';
import { Navigate } from 'react-router';
export interface IAuthRouteProps { }

export default function  AuthRoute({ children }): any {

    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                if (!user.emailVerified) {
                    user.sendEmailVerification();
                }
                console.log("User detected, redirecting ...");
            }
            else {
                console.warn("User not detected! redirecting ...");
            }
            setLoading(false);
        })}, []);
    
    if (loading) {
        return <div>Loading...</div>
    }
    
    return (
        <div>{ children }</div>
    );
}
