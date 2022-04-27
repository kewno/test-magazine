import React from 'react';
import TextBold from '../TextBold copy/TextBold';
import TextNormal from '../TextNormal/TextNormal';


const TextNormalBold = (props) => {
    return (
        <div className='text-normal-bold'>
            <TextNormal/>
            <TextBold/>
        </div>
    )
}


export default TextNormalBold