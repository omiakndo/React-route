import React from 'react';
import './User.css'
import { Link } from 'react-router';

const User = ({user}) => {
    // console.log(user);
    const {name, email, id, phone} = user;
    // console.log(id);
    return (
        <div className='user'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;