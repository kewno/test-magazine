import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return (
        <ul className='header__wrap-logo-menu__menu'>
           <NavLink className={'header__wrap-logo-menu__menu__elem header__wrap-logo-menu__menu__elem__active'} to={'/'}>Электроприборы</NavLink>
           <NavLink className={'header__wrap-logo-menu__menu__elem'}to={'/'}>Мебель</NavLink>
        </ul>
    )
}


export default Menu