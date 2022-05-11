import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';


const MenuElem = ({active, href, children, func, ...props}) => {
    //let linkClass = active ? 'main-menu__elem main-menu__elem_active' : 'main-menu__elem'
    let linkClass = 'main-menu__elem'
    
    //const dispatch = useDispatch()

    // let handleClick = (id) => {
 
    // }
    
    return (
        <NavLink 
            className={linkClass} 
            //onClick={()=> handleClick(id)}
            //  activeClassName={'main-menu__elem_active'}
            //active
            to={href}>
            {children}
        </NavLink>
    )
}


export default MenuElem