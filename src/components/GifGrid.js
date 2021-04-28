import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            <h3>{ loading && <p className='animate__fadeIn'>Cargando...</p>} </h3>
            {<div className='card-grid'>
                
                {
                    images.map( img => <GifGridItems
                        key={img.id}
                        {...img}
                        />)
                }
            </div>}
        </>
    )
}
