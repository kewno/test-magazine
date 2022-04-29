import React, { useEffect, useState } from 'react';
import Picture from '../Picture/Picture';


const Input = ({children, textError, type, ...props}) => {
    let [text, setText] = useState('');
    return (
        <div className='container-input'>
           <label className='container-input__name'>{children}</label>
           <input value={text} onChange={e => setText(e.target.value)} className={textError ? 'container-input__elem__error' : 'container-input__elem'} type={type}/>
           {textError && <span className='container-input__text-error'>{textError}</span>}
        </div>
    )
}


export default Input