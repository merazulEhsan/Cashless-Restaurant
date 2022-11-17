import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useChef from '../Hooks/useChef';
import Loading from '../Loading/Loading';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [chef, isLoading] = useChef(user);
    const location = useLocation(); 

    if(loading || isLoading){
        return <Loading></Loading>
    }
    
    if(!user || !chef){
        signOut(auth);
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
    
};

export default RequireAdmin;