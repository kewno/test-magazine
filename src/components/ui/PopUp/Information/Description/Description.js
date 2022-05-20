import React, {useState} from 'react';


const Description = ({children, ...props}) => {

    return (
        <div className='description'>
            <h4 className='description__text'>{children} </h4>
        </div>
    )
}


export default Description