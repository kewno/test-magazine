import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Stars from '../Stars/Stars';
import TextBold from '../TextBold copy/TextBold';

const SendFeedback = (props) => {
    return (
        <div className='send-feedback'>
            <TextBold/>
            <Stars/>
            <Input/>
            <TextArea/>
            <Button/>
        </div>
    )
}


export default SendFeedback