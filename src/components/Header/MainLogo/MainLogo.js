import React from 'react';
import { NavLink } from 'react-router-dom';


const MainLogo = ({...props}) => {
    return (
        <NavLink to={'/'} className='main-logo'>
           <img className='main-logo__picture' src={require('../../../img/logo.png')}/>
           <h1 className='main-logo__text'>SHOP</h1> 
        </NavLink>
    )
}


export default MainLogo