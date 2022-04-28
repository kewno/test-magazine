import React from 'react';
import Icon from '../Icon/Icon';
import TextBold from '../TextBold copy/TextBold';
import TextNormal from '../TextNormal/TextNormal';
import Button from '../Button/Button';
import ProductOrder from '../ProductOrder/ProductOrder';
import OrderForm from '../OrderForm/OrderForm';

const Order = () => {
    return (
        <div className='order'>
            <Icon/>
            <div className='order__content'>
                <TextBold/>
                <div className='order__content__products'>
                    <ProductOrder/>
                    <ProductOrder/>
                    <ProductOrder/>
                </div>
                <div className='order__content__form'>
                    <OrderForm/>
                </div>
                <Button/>
            </div>
        </div>
    )
}


export default Order