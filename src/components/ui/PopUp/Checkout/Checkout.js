import React from 'react';
import Button from '../../Button/Button';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import CheckoutProducts from './CheckoutProducts/CheckoutProducts';

const Checkout = ({...props}) => {
    
    return (
        <div className='checkout'>
            <CheckoutProducts/>
            <CheckoutForm/>
            <Button href='/'>
                Заказать
            </Button>
        </div>
    )
}


export default Checkout