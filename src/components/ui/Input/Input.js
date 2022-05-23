import React, { useEffect, useState } from 'react';
import './input.scss';

const Input = ({children, typeFor, textError, blured, type, focused, ...props}) => {
    return (
        <div className='input'>
           <label className='input__name' htmlFor={typeFor}>{children}</label>
           <input id={typeFor} onBlur={blured} onFocus={focused} className={textError ? 'input__enter input__enter_error' : 'input__enter'} type={type} {...props}/>
           {textError && <span className='input__text-error'>{textError}</span>}
        </div>
    )
}


export default Input