import React from 'react';
import { useLoaderData } from 'react-router';
import Photo from '../Photo/Photo';

const Photos = () => {
    const photos = useLoaderData();
    // console.log(photos);
    return (
        <div>
            <h1>All Country: {photos.length}</h1>
            {
                photos.map((photo,idx) => <Photo key={idx} photo={photo}></Photo>)
            }
        </div>
    );
};

export default Photos;