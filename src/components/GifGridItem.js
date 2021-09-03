import React from 'react'

export const GifGridItem = ({img}) => {

    return (
        <div className='card animate__animated animate__fadeIn'>
            <img alt={img.title} src={img.url} />
        </div>
    )
}
