import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PhotoDetails = () => {
    const photoDetails = useLoaderData();
    const navigate = useNavigate()
    const goBack =()=>{
        navigate(-1)
    }
    console.log(photoDetails);
    return (
        <div>
            
            <h1>Name: {photoDetails[0].name.common}</h1>
            <h2>capital: {photoDetails[0].capital[0]}</h2>
            <h2>population: {photoDetails[0].population}</h2>
            <img src={photoDetails[0].flags.png} alt="" /> <br /> <br />
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default PhotoDetails;