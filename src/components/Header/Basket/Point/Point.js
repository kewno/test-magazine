import React from 'react';
import {useSelector } from 'react-redux';

const Point = ({coll, ...props}) => {
    let collProductBasket = useSelector(state => state.main.orderProducts)
    //debugger
    return (
        <div className='basket__point'>
            <span className='basket__point_coll'>{collProductBasket.length}</span>
        </div>
    )
}


export default Point