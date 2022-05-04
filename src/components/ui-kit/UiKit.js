import React, { useEffect, useState } from 'react';
import Button from '../ui/Button/Button';
import '../../styles/kitStyle.scss';
import PopUp from '../ui/PopUp/PopUp'
import Input from '../ui/Input/Input'
import Product from '../ui/Product/Product';
import Basket from '../Header/Basket/Basket';

const UiKit = (props) => {

    return (
        <div className='container'>
            {/* <Picture src='../../img/product.png'/> */}
            <div className='container__buttons'>
                <Button href='/'>
                    Добавить в корзину
                </Button>
                <Button>
                    . . .
                </Button>
                <Button disable={true} href='/'>
                    Добавить в корзину
                </Button>
            </div>

            <div className='container__inputs'> 
                <Input type='text' text='Имя'>Имя</Input>
                <Input type='text' text='Имя' textError='Обязательное поле'>Имя</Input>
            </div>

            <div>
                <Product src={'product.png'} name='Стул рабочий' price='6 000 ₽' textButton='Добавить в корзину'/>
            </div>

            <div className='container__pop-up'>
                <PopUp text='Оформить заказ'>
                    <div className='pop-up'>
                        <div className='pop-up__header'>
                            <p className='pop-up__text'>{props.text}</p>
                            <img className='pop-up__picture' src={require('../../img/close.png')}/>
                        </div>
                    </div>
                </PopUp>
                <button className='button'>Открыть</button>
            </div>

        </div>
    )
}


export default UiKit