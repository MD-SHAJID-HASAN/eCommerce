import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Shoe from '../Shoe/Shoe';
import './Shoes.css'

const Shoes = () => {

    const shoes = useLoaderData()
    
    return (
        <div className='shoes'>

            {
                shoes.map(shoe=> <Shoe key={shoe.id} shoe={shoe}></Shoe>)
            }
        </div>
    );
};

export default Shoes;