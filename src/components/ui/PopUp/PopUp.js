import React from 'react';
import Picture from '../Picture/Picture';


const PopUp = (props) => {
    return (
        <div className='pop-up'>
            <div className='pop-up__header'>
                <p className='pop-up__header__text'>Оформить заказ</p>
                <img className='pop-up__header__picture' src={require('../../../img/close.png')}/>
            </div>
        </div>
    )
}


export default PopUp