import React from 'react';
import { NavLink } from 'react-router-dom';
import './tab.scss';

const Tab = ({src, ...props}) => {
    
    return (
        <div className='container-tab'>
            <NavLink className={'container-tab__elem container-tab__elem_active'}to={'/'}>Описание</NavLink>
            <NavLink className={'container-tab__elem'}to={'/'}>Характеристики</NavLink>
            <NavLink className={'container-tab__elem'}to={'/'}>Отзывы</NavLink>
            <NavLink className={'container-tab__elem'}to={'/'}>Оставить отзыв</NavLink>
        </div>
    )
}


export default Tab