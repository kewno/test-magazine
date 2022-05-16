import React from 'react';


const ReviewsElem = ({src, name, message, ...props}) => {
    
    return (
        <div className='reviews-elem'>
            <img className='reviews-elem__picture' src={src}/>
            <div className='wrap-all-message'>
                <div className='wrap-name-stars'>
                    <h3 className='wrap-name-stars__name'>{name}</h3>
                    <div className='wrap-name-stars__stars'></div>
                </div>
                <p className='wrap-text-stars__message'>{message}</p>
            </div>
        </div>
    )
}


export default ReviewsElem