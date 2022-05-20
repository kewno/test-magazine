import React from 'react';

const CheckoutProduct = ({id, name, price,  ...props}) => {
    let paddingPrice = (price) => {
        let str = String(price)
        let priceLength = str.length
        let end = str.substr(-3, 3)
        let startLength = priceLength - 3;
        let start = str.substr(0, startLength)
        return `${start} ${end}`
    }
    
    return (
        <div className='product-checkout'>
            <img src={require('../../../../../../img/product-small.png')} className='product-checkout__picture'/>
            <div className='wrap-text'>
                <p className='wrap-text__name'>{name}</p>
                <h3 className='wrap-text__price'>{price}</h3>
                <p className='wrap-text__delete'>{paddingPrice(price) + ' ₽'}</p>
            </div>
        </div>
    )
}


export default CheckoutProduct