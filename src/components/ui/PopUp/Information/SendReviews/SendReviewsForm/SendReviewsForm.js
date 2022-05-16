import React, {useState} from 'react';
import Input from '../../../../Input/Input';



const SendReviewsForm = ({...props}) => {
    
    let [textName, setTextName] = useState('');
    let [textDescription, setTextDescription] = useState('');

    return (
        <div className='send-reviews-form'>
            <div className='send-reviews-form__elem'>
                <h3 className='headline'>Имя</h3>
                <Input type='text' value={textName} onChange={e => setTextName(e.target.value)}></Input>
            </div>
            <div className='send-reviews-form__elem'>
                <h3 className='headline'>Отзыв</h3>
                {/* <Input type='textarea' value={textName} onChange={e => setTextName(e.target.value)}></Input> */}
                <textarea value={textDescription} onChange={e => setTextDescription(e.target.value)} className='text-area' rows="10" cols="45" name="text"></textarea>
            </div>
        </div>
    )
}


export default SendReviewsForm