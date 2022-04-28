import React from 'react';
import { NavLink } from 'react-router-dom';
import Picture from '../../ui/Picture/Picture';
import Point from './Point/Point';


const Basket = (props) => {
    return (
        <NavLink to={'/'} className='header__basket__picture'>
            {/* <Picture src={props.srcBasket}/> */}
            <img src={require('../../../img/basket.png')}/>
            <Point/>
        </NavLink>
    )
}


export default Basket