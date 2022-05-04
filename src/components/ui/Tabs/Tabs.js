import React from 'react';
import { NavLink } from 'react-router-dom';
import Tab from './Tab/Tab';
import './tabs.scss';

const Tabs = ({tabs, ...props}) => {
    
    return (
        <div className='container-tab'>
            <Tab name='Описание' href='/' active/>
            <Tab name='Характеристики' href='/'/>
            <Tab name='Отзывы' href='/'/>
            <Tab name='Оставить отзыв' href='/'/>
        </div>
    )
}


export default Tabs