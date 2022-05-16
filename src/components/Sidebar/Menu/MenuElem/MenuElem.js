import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';


const MenuElem = ({id, children, active, func, href, ...props}) => {
    //let classLink = active ? 'menu__elem_active' : 'menu__elem'
    
    // const dispatch = useDispatch()
    // let href = window.location.pathname
    // let handleClick = () => {
    //     console.log(href == window.location.pathname)
    //     debugger
    // }
    
    return (
           <NavLink className={'menu__elem'} to={href} >{children}</NavLink> //to={'/'}  onClick={()=> handleClick(id)} onClick={()=> setTimeout(handleClick, 1000)}
    )
}


export default MenuElem