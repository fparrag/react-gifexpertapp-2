import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGif';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ Categoria}) => {

    // const [images, setimages] = useState([]);

    // useEffect(() => {
    //    getGifs(Categoria)
    //         .then(
    //             setimages
    //         )
    // }, [Categoria]);

    const {data:images, loading} = useFetchGifs(Categoria);


    return (
        <>
            {
                (loading && <p>Cargando...</p>)
            }
        
            <h2 className='animate__animated animate__flash'>{Categoria}</h2>
            <hr />
            <div className='card-grid'>
                {
                    images.map( img => <GifGridItem key={img.id} img={img} /> )
                }
            </div>
            
        </>
    )
}
