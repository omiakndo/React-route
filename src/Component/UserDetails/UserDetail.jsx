import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetail = () => {
    const userDetail = useLoaderData();
    const navigate = useNavigate()
    const goback =()=>{
        navigate(-1)
    }
    
    console.log(userDetail);
    return (
        <div>
            <h1>evert details is here</h1>
            <h2>Name: {userDetail.name}</h2>
            <h3>UserName: {userDetail.username}</h3>
            <h4>Email: {userDetail.email}</h4>
            <button onClick={goback}>Go Back</button>
        </div>
    );
};

export default UserDetail;