import React from 'react';


const TextArea = (props) => {
    return (
        <div className='container-input'>
           <label className='container-input__name'>{props.text}</label>
           <textarea className='container-input__elem'></textarea>
           <span className='container-input__error'></span>
        </div>
    )
}


export default TextArea