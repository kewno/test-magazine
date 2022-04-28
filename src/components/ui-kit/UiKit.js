import React from 'react';
import Button from '../ui/Button/Button';
import '../../styles/kitStyle.scss';
import PopUp from '../ui/PopUp/PopUp'
import Input from '../ui/Input/Input'
import Product from '../ui/Product/Product';

const UiKit = (props) => {
    return (
        <div className='container'>
            {/* <Picture src='../../img/product.png'/> */}
            <div className='container__wrap-button'>
                <Button text='Добавить в корзину' class='container__wrap-button__button'/>
                <Button text='Добавить в корзину' class='container__wrap-button__button container__wrap-button__button__hover'/>
                <Button text='. . .' class='container__wrap-button__button container__wrap-button__button__load'/>
                <Button text='Добавить в корзину' class='container__wrap-button__button container__wrap-button__button__disable'/>
            </div>

            <div className='container__pop-up'>
                <PopUp/>
            </div>

            <div className='container__inputs'> 
                <Input type='text' text='Имя'/>
                <Input type='text' text='Имя' error={true} textError='Обязательное поле'/>
            </div>

            <div className='container__picture'>
                <Product src={'product.png'}/>
                {/* <img src={require('../../img/product.png')} alt='' className='container__pop-up__header__close'/> */}
            </div>

        </div>
    )
}


export default UiKit