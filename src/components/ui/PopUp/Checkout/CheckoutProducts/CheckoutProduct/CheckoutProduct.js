import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleOrderProducts } from '../../../../../../redux/mainReducer';

const CheckoutProduct = ({id, name, image, price,  ...props}) => {
    let paddingPrice = (price) => {
        let str = String(price)
        let priceLength = str.length
        let end = str.substr(-3, 3)
        let startLength = priceLength - 3;
        let start = str.substr(0, startLength)
        return `${start} ${end}`
    }
    //require('../../../../../../img/product-small.png')
    let dispatch = useDispatch()
    let handleClick = (id) => {
        dispatch(toggleOrderProducts(id))
    }

    return (
        <div className='product-checkout'>
            <img src={image} className='product-checkout__picture'/>
            <div className='wrap-text'>
                <p className='wrap-text__name'>{name}</p>
                <h3 className='wrap-text__price'>{paddingPrice(price) + ' ₽'}</h3>
                <p className='wrap-text__delete' onClick={() => handleClick(id)}>{'Убрать из корзины'}</p>
            </div>
        </div>
    )
}


export default CheckoutProduct