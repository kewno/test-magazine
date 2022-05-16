import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Point from './Point/Point';


const Basket = ({coll, func, ...props}) => {
    let params = useParams()
    
    let handleClick = () => {
        func(true)
    }
    return (
        <NavLink to={`/${params.category}/${params.subcategory}`} className='basket' onClick={handleClick}>
            <img className='basket__picture' src={require('../../../img/basket.png')}/>
            <Point coll={coll}/>
        </NavLink>
    )
}


export default Basket