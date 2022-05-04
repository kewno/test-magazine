import React from 'react';
import Button from '../Button/Button';
import {NavLink} from "react-router-dom"


const Product = ({name, price, textButton, ...props}) => {
    return (
        <div className='product'>
            <img src={require('../../../img/product.png')}/>
            {/* <Picture path={props.picture}/> */}
            <div className='product__wrap-text-button'>
                <div className='product__wrap-text'>
                    <p className='product__text1'>{name}</p>
                    <h3 className='product__text2'>{price}</h3>
                </div>
                <Button href='/'>{textButton}</Button>
            </div>
        </div>
    )
}


export default Product