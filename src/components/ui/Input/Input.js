import React, { useEffect, useState } from 'react';
import './input.scss';

const Input = ({children, textError, type, ...props}) => {
    return (
        <div className='input'>
           <label className='input__name'>{children}</label>
           <input {...props} className={textError ? 'input__enter input__enter_error' : 'input__enter'} type={type}/>
           {textError && <span className='input__text-error'>{textError}</span>}
        </div>
    )
}


export default Input