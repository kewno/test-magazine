import React from 'react';
import Picture from '../Picture/Picture';


const Input = (props) => {
    return (
        <div className='container-input'>
           <label className='container-input__name'>{props.text}</label>
           <input className='container-input__elem' type={props.type}/>
           <span className='container-input__error'></span>
        </div>
    )
}


export default Input