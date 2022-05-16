import React from 'react';


const InformationHead = ({src, name, price, ...props}) => {
    return (
        <div className='information-head'>
            <img src={src} className='information-head__picture'/>
            <div className='wrap-text'>
                <p className='wrap-text__name'>{name}</p>
                <h3 className='wrap-text__price'>6 000 ₽</h3>
            </div>
        </div>
    )
}


export default InformationHead