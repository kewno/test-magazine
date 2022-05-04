import React, { useEffect, useState } from 'react';
import Picture from '../Picture/Picture';


const Input = ({children, textError, type, ...props}) => {
    let [text, setText] = useState('');
    return (
        <div className='input'>
           <label className='input__name'>{children}</label>
           <input value={text} onChange={e => setText(e.target.value)} className={textError ? 'input__enter input__enter__error' : 'input__enter'} type={type}/>
           {textError && <span className='input__text-error'>{textError}</span>}
        </div>
    )
}


export default Input