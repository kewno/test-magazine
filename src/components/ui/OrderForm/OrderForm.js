import React from 'react';
import Picture from '../Picture/Picture';


const OrderForm = (props) => {
    return (
        <div className='container-form'>
            <div className='container-form__two'>
                <input className='container-form__name' type={props.phone}/>
                <input className='container-form__phone' type={props.phone}/>
            </div>
            <input className='container-form__adress' type={props.phone}/>
        </div>
    )
}


export default OrderForm