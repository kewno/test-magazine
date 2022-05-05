import React from 'react';
import { NavLink } from 'react-router-dom';


const MenuElem = ({active, href, children, ...props}) => {
    let linkClass = active ? 'main-menu__elem main-menu__elem_active' : 'main-menu__elem'
    //debugger
    return (
        <NavLink 
            className={linkClass} 
            //activeClassName={main-menu__elem main-menu__elem_active'} 
            to={href}>
            {children}
        </NavLink>
    )
}


export default MenuElem