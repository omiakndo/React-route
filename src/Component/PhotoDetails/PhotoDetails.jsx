import React from 'react';
import { useLoaderData } from 'react-router';

const PhotoDetails = () => {
    const photoDetails = useLoaderData();
    console.log(photoDetails);
    return (
        <div>
            <h1>all deatails</h1>
            <h1>name: {photoDetails[0].name.common}</h1>
            <h2>capital: {photoDetails[0].capital[0]}</h2>
            <h2>population: {photoDetails[0].population}</h2>
            <img src={photoDetails[0].flags.png} alt="" />
        </div>
    );
};

export default PhotoDetails;