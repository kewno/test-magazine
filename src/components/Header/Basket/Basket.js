import React from 'react';
import { NavLink } from 'react-router-dom';
import Point from './Point/Point';


const Basket = ({coll, ...props}) => {
    return (
        <NavLink to={'/'} className='basket'>
            <img className='basket__picture' src={require('../../../img/basket.png')}/>
            <Point coll={coll}/>
        </NavLink>
    )
}


export default Basket