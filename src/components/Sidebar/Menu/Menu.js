import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return (
        <ul className='sidebar__menu'>
           <NavLink className={'sidebar__menu__elem sidebar__menu__elem__active'} to={'/'}>Стулья</NavLink>
           <NavLink className={'sidebar__menu__elem'}to={'/'}>Диваны</NavLink>
           <NavLink className={'sidebar__menu__elem'}to={'/'}>Столы</NavLink>
        </ul>
    )
}


export default Menu