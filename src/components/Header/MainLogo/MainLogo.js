import React from 'react';
import { NavLink } from 'react-router-dom';
import Picture from '../../ui/Picture/Picture';


const MainLogo = () => {
    return (
        <NavLink to={'/'} className='header__wrap-logo-menu__main-logo'>
           {/* <Picture src={'../../img/logo.png'} class={'header__wrap-logo-menu__main-logo__picture'}/> */}
           <img src={require('../../../img/logo.png')}/>
           <h1 className='header__wrap-logo-menu__main-logo__text'>SHOP</h1> 
        </NavLink>
    )
}


export default MainLogo