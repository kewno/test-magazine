import React from 'react';
import { NavLink } from 'react-router-dom';


const CheckoutProduct = ({...props}) => {
    return (
        <div className='product-checkout'>
            <img src={require('../../../../../../img/product-small.png')} className='product-checkout__picture'/>
            <div className='wrap-text'>
                <p className='wrap-text__name'>Стул рабочий</p>
                <h3 className='wrap-text__price'>6 000 ₽</h3>
                <NavLink to='/' className='wrap-text__delete'>Убрать из корзины</NavLink>
            </div>
        </div>
    )
}


export default CheckoutProduct