import React from 'react';
import './Photo.css'
import { Link } from 'react-router';

const Photo = ({photo}) => {
    // console.log(photo);
    const {name, flags} = photo
    // const capital = photo.capital[0];
    // console.log(capital);
    return (
        <div className='photo'>
            <h2>Name: {name.common}</h2>
            <img className='img' src={flags.png} alt="" /> <br />
            {/* <a href={maps.googleMaps}>Maps</a> */}
            {/* <Link to={maps.googleMaps}>Maps</Link> <br /> */}
            <Link className='link' to={`/name/${name.common}`}>Show Details</Link>

        </div>
    );
};

export default Photo;