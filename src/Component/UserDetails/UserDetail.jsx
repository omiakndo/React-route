import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetail = () => {
    const userDetail = useLoaderData();
    console.log(userDetail);
    return (
        <div>
            <h1>evert details is here</h1>
            <h2>Name: {userDetail.name}</h2>
            <h3>UserName: {userDetail.username}</h3>
            <h4>Email: {userDetail.email}</h4>
                
        </div>
    );
};

export default UserDetail;