import React from 'react';
import { useParams,useLocation } from 'react-router-dom';
import Menu from './Menu';

const Profile = () => {
    const {fname,lname} = useParams();
    const location = useLocation();

    return (
        <>
            <Menu/>
            <h1>Hi I'm in Profile Sections </h1>
            <p>~ {fname} {lname}</p>
            <p>Current location is {location.pathname}</p>
        </>
    );
}

export default Profile;