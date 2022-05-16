import React from 'react';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';


const CheckoutProducts = ({...props}) => {
    return (
        <div className='products-checkout'>
            <h3 className='products-checkout__headline'>В корзине:</h3>
            <div className='products-checkout__wrap-products'>
                <CheckoutProduct />
                <CheckoutProduct />
                <CheckoutProduct />
            </div>
        </div>
    )
}


export default CheckoutProducts