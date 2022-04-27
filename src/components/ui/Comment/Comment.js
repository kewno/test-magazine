import React from 'react';
import Picture from '../Picture/Picture';
import Stars from '../Stars/Stars';
import TextNormal from '../TextNormal/TextNormal';


const Comment = (props) => {
    return (
        <div className='comment'>
            <div className='comment__wrap-picture'>
                <Picture/>
            </div>
            <div className='comment__wrap-text-starts'>
                <TextNormal/>
                <Stars/>
            </div>
            <TextNormal/>
        </div>
    )
}


export default Comment