import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDataProductThunkCreator} from '../../../redux/mainReducer';
import Button from '../Button/Button';
import './product.scss';


const Product = ({id, name, add, price, src, options, reviews, setCheckPopUp, setIdProduct, toggleOrderProducts, ...props}) => {
    let paddingPrice = (price) => {
        let str = String(price)
        let priceLength = str.length
        let end = str.substr(-3, 3)
        let startLength = priceLength - 3;
        let start = str.substr(0, startLength)
        return `${start} ${end}`
    }

    let dispatch = useDispatch()
    let handleClick = (id) => {
        dispatch(setDataProductThunkCreator(id))
        setIdProduct(id)
        setCheckPopUp(true)
    }
    //debugger
    // onClick={dispatch(toggleOrderProducts(id))} 
    let textButton = add ? 'В корзине' : 'Добавить в корзину'
    //debugger
    return (
        <div className='product' >
            {/* <img className='product__picture' src={require('../../../img/product.png')}/> */}
            <img className='product__picture' src={src} onClick={() => handleClick(id)}/>
            {/* <Picture path={props.picture}/> */}
            <div className='product__wrap-text-button'>
                <div className='product__wrap-text'>
                    <p className='product__text1'>{name}</p>
                    <h3 className='product__text2'>{paddingPrice(price) + ' ₽'}</h3>
                </div>
                <Button add={add} id={id} func={toggleOrderProducts}>{textButton}</Button>
            </div>
        </div>
    )
}


export default Product