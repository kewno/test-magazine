import React, {useState} from 'react';
import Button from '../Button/Button';
import PopUp from '../PopUp/PopUp';
import './product.scss';


const Product = ({id, name, price, textButton, src, options, reviews, setCheckPopUp, setIdProduct, ...props}) => {
    let paddingPrice = (price) => {
        let str = String(price)
        let priceLength = str.length
        let end = str.substr(-3, 3)
        let startLength = priceLength - 3;
        let start = str.substr(0, startLength)
        return `${start} ${end}`
    }
    
    let handleClick = (id) => {
        //console.log(check.className)
        //debugger
        setIdProduct(id)
        setCheckPopUp(true)
    }
    
    

    return (
        <div className='product' onClick={() => handleClick(id)}>
            {/* <img className='product__picture' src={require('../../../img/product.png')}/> */}
            <img className='product__picture' src={src}/>
            {/* <Picture path={props.picture}/> */}
            <div className='product__wrap-text-button'>
                <div className='product__wrap-text'>
                    <p className='product__text1'>{name}</p>
                    <h3 className='product__text2'>{paddingPrice(price) + ' ₽'}</h3>
                </div>
                <Button href='/'>{textButton}</Button>
            </div>
        </div>
    )
}


export default Product