import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';


const MenuElem = ({id, active, href, children, func, ...props}) => {
    let linkClass = active ? 'main-menu__elem main-menu__elem_active' : 'main-menu__elem'
    const dispatch = useDispatch()
    //dispatch(setActiveCategory(100))
    return (
        <NavLink 
            className={linkClass} 
            onClick={()=> dispatch(func(id))}
            to={href}>
            {children}
        </NavLink>
    )
}


export default MenuElem