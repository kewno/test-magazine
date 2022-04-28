import React from 'react';
import Picture from '../Picture/Picture';


const Input = (props) => {
    return (
        <div className='container-input'>
           <label className='container-input__name'>{props.text}</label>
           <input className={props.error ? 'container-input__elem__error' : 'container-input__elem'} type={props.type}/>
           {props.textError && <span className='container-input__text-error'>{props.textError}</span>}
        </div>
    )
}


export default Input