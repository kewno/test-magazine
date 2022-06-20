import React, { useState } from 'react';
import Stars from '../../../../Stars/Stars';



const SendReviewsGrade = ({...props}) => {
    let [collSelected, setCollSelected] = useState(0);
    let [collSelectedEnter, setCollSelectedEnter] = useState(0);

    return (
        <div className='send-reviews-grade'>
            <h3 className='send-reviews-grade__headline'>Оценка</h3>
            <div className='send-reviews-grade__stars'>
                <Stars collSelected={collSelected} 
                       setCollSelected={setCollSelected}
                       collSelectedEnter={collSelectedEnter} 
                       setCollSelectedEnter={setCollSelectedEnter}
                />
            </div>
        </div>
    )
}


export default SendReviewsGrade