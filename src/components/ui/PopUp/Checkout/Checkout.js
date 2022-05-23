import React from 'react';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import CheckoutProducts from './CheckoutProducts/CheckoutProducts';

const Checkout = ({...props}) => {

    return (
        <div className='checkout'>
            <CheckoutProducts/>
            <CheckoutForm/>
        </div>
    )
}


export default Checkout