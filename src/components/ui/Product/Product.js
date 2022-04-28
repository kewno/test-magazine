import React from 'react';
import Button from '../Button/Button';
import {NavLink} from "react-router-dom"


const Product = (props) => {
    return (
        <div className='product'>
            <img src={require('../../../img/product.png')}/>
            {/* <Picture path={props.picture}/> */}
            <div className='product__wrap-text-button'>
                <div className='product__wrap-text-button__wrap-text'>
                    <p className='product__wrap-text-button__wrap-text_elem1'>Стул рабочий</p>
                    <h3 className='product__wrap-text-button__wrap-text_elem2'>6 000 ₽</h3>
                </div>
                <Button text='Добавить в корзину' class='product__wrap-text-button__button'/>
            </div>
        </div>
    )
}


export default Product