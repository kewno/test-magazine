import React from 'react';
import Button from '../../../Button/Button';
import SendReviewsForm from './SendReviewsForm/SendReviewsForm';
import SendReviewsGrade from './SendReviewsGrade/SendReviewsGrade';



const SendReviews = ({...props}) => {
    
    return (
        <div className='send-reviews'>
            <SendReviewsGrade/>
            <SendReviewsForm/>
            <Button href='/'>
                Отправить отзыв
            </Button>
        </div>
    )
}


export default SendReviews