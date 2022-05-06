import React from 'react';
import { NavLink } from 'react-router-dom';


const MenuElem = ({children, href, active, ...props}) => {
    let classLink = active ? 'menu__elem_active' : 'menu__elem'
    return (
           <NavLink className={classLink}to={'/'}>{children}</NavLink>
    )
}


export default MenuElem